// firebase-sync.js — Synchronisation Firebase pour Parcours Y
// Gère les profils, la progression et le compteur de visites

const CLASSES_LYCEE = [
  '1ASSP','1ERA','1ICCER','1MAV','1MELEC','1TBAA','1TBEE','1TMA',
  '2AMA B','2AMA E','2ASSP','2MAC','2MAV','2MEM','2MPI','2PAR','2TNE 1','2TNE 2',
  '3 PM1','3 PM2','3 PM3','FCIL',
  'TASSP','TERA','TICCER','TMAC','TMAV','TMELEC','TMPI','TPAR','TTBAA','TTBEE','TTMA',
  'Autre'
];

// Hashes pré-calculés (identiques à MathsPro)
const MASTER_HASH = 'c83403ab3901be1240ebe93fa12937f674b96f7b9542815737314eb5f8e28271';
const MASTER_SALT = 'MASTER_SALT_2026';
const PROF_HASH = '0c4527cba96be53e21e11ea5da5ff12fa3f6a42b7d7ebaad6f53b0dfff4f5abb';
const PROF_SALT = 'PROF_SALT_2026';

const ProfileManager = {
  currentProfile: null,
  profiles: [],
  visitCount: 0,
  isTeacher: false,
  teacherLevel: null, // 'full' ou 'restricted'

  // Charger tous les profils depuis Firebase
  async loadProfiles() {
    // Vérifier la purge annuelle avant de charger
    await this._checkAnnualPurge();

    try {
      const snapshot = await db.collection(COLLECTIONS.profiles).get();
      this.profiles = [];
      snapshot.forEach(doc => {
        this.profiles.push({ id: doc.id, ...doc.data() });
      });
      this.profiles.sort((a, b) => (a.prenom || '').localeCompare(b.prenom || ''));
    } catch (e) {
      console.warn('Firebase non disponible, mode local uniquement', e);
      this.profiles = JSON.parse(localStorage.getItem('parcoursy-profiles') || '[]');
    }
  },

  // PURGE AUTOMATIQUE AU 1ER AOÛT
  // Supprime tous les profils élèves et réinitialise le compteur de visites
  // pour démarrer chaque année scolaire avec une base propre.
  async _checkAnnualPurge() {
    try {
      const now = new Date();
      const currentYear = now.getFullYear();
      const purgeDate = new Date(currentYear, 7, 1); // 1er août (mois 7 = août en JS)

      // Lire la date de dernière purge depuis Firebase
      const statsRef = db.collection(COLLECTIONS.stats).doc('stats');
      const statsDoc = await statsRef.get();
      const lastPurgeYear = statsDoc.exists ? (statsDoc.data().lastPurgeYear || 0) : 0;

      // Si on est après le 1er août ET qu'on n'a pas encore purgé cette année
      if (now >= purgeDate && lastPurgeYear < currentYear) {
        console.log(`🧹 Purge annuelle déclenchée (année scolaire ${currentYear})`);

        // Supprimer tous les profils élèves de Firestore
        const snapshot = await db.collection(COLLECTIONS.profiles).get();
        const batch = db.batch();
        snapshot.forEach(doc => batch.delete(doc.ref));
        await batch.commit();

        // Réinitialiser les stats (visites à 0) et marquer la purge
        await statsRef.set({ visits: 0, lastPurgeYear: currentYear }, { merge: true });

        // Nettoyer aussi le localStorage
        localStorage.removeItem('parcoursy-profiles');
        localStorage.removeItem('parcoursy-active-profile');
        localStorage.removeItem('livret-progress');

        console.log('✅ Base de données purgée pour la nouvelle année scolaire');
      }
    } catch (e) {
      console.warn('Vérification de purge annuelle impossible (mode hors-ligne ?)', e);
    }
  },

  // Créer un nouveau profil
  async createProfile(prenom, classe, pin) {
    const id = 'eleve-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    let pinHash = '', pinSalt = '';
    if (pin) {
      pinSalt = generateSalt();
      pinHash = await hashString(pin, pinSalt);
    }
    const profile = {
      id, prenom, classe, pinHash, pinSalt,
      progress: {},
      createdAt: new Date().toISOString(),
      lastActivity: null
    };

    this.profiles.push(profile);
    this._saveLocal();

    // Sync Firebase
    try {
      await db.collection(COLLECTIONS.profiles).doc(id).set(profile);
    } catch (e) { console.warn('Sync Firebase échouée', e); }

    return profile;
  },

  // Se connecter à un profil
  async login(profileId, pin) {
    const profile = this.profiles.find(p => p.id === profileId);
    if (!profile) return false;

    if (profile.pinHash) {
      const valid = await verifyHash(pin, profile.pinSalt, profile.pinHash);
      if (!valid) return false;
    }

    this.currentProfile = profile;
    localStorage.setItem('parcoursy-active-profile', profileId);

    // Charger la progression dans le StorageManager
    if (profile.progress) {
      StorageManager.setProgress(profile.progress);
    }

    // Marquer la dernière activité à la connexion
    this.updateLastActivity(new Date().toISOString());

    return true;
  },

  // Déconnexion
  logout() {
    this.currentProfile = null;
    this.isTeacher = false;
    this.teacherLevel = null;
    localStorage.removeItem('parcoursy-active-profile');
  },

  // Mettre à jour la dernière activité du profil connecté
  async updateLastActivity(timestamp) {
    if (!this.currentProfile) return;
    this.currentProfile.lastActivity = timestamp;
    this._saveLocal();
    try {
      await db.collection(COLLECTIONS.profiles).doc(this.currentProfile.id).update({
        lastActivity: timestamp
      });
    } catch (e) { /* mode hors-ligne */ }
  },

  // Sauvegarder la progression du profil actif
  async saveProgress(progressData) {
    if (!this.currentProfile) return;
    this.currentProfile.progress = progressData;
    this._saveLocal();

    try {
      await db.collection(COLLECTIONS.profiles).doc(this.currentProfile.id).update({
        progress: progressData,
        lastActivity: this.currentProfile.lastActivity || new Date().toISOString()
      });
    } catch (e) { console.warn('Sync progression échouée', e); }
  },

  // Sauvegarde locale (fallback)
  _saveLocal() {
    localStorage.setItem('parcoursy-profiles', JSON.stringify(this.profiles));
  },

  // Compteur de visites
  async incrementVisits() {
    try {
      const statsRef = db.collection(COLLECTIONS.stats).doc('stats');
      const doc = await statsRef.get();
      if (doc.exists) {
        this.visitCount = (doc.data().visits || 0) + 1;
        await statsRef.update({ visits: firebase.firestore.FieldValue.increment(1) });
      } else {
        this.visitCount = 1;
        await statsRef.set({ visits: 1 });
      }
    } catch (e) {
      console.warn('Compteur de visites indisponible', e);
      this.visitCount = parseInt(localStorage.getItem('parcoursy-visits') || '0') + 1;
      localStorage.setItem('parcoursy-visits', this.visitCount);
    }
    this._updateVisitDisplay();
  },

  // Écouter le compteur en temps réel
  listenVisits() {
    try {
      db.collection(COLLECTIONS.stats).doc('stats').onSnapshot(doc => {
        if (doc.exists) {
          this.visitCount = doc.data().visits || 0;
          this._updateVisitDisplay();
        }
      });
    } catch (e) { console.warn('Écoute visites impossible', e); }
  },

  _updateVisitDisplay() {
    const el = document.getElementById('visitCounter');
    if (el) el.textContent = this.visitCount.toLocaleString('fr-FR');
  },

  // Connexion enseignant
  async teacherLogin(code) {
    const isMaster = await verifyHash(code, MASTER_SALT, MASTER_HASH);
    if (isMaster) {
      this.isTeacher = true;
      this.teacherLevel = 'full';
      return 'full';
    }
    const isProf = await verifyHash(code, PROF_SALT, PROF_HASH);
    if (isProf) {
      this.isTeacher = true;
      this.teacherLevel = 'restricted';
      return 'restricted';
    }
    return false;
  },

  // Helper : vérifie si une entrée de progression est validée (compatible ancien format boolean)
  _isDone(val) {
    if (val === true || val === false) return val;
    if (val && typeof val === 'object') return !!val.done;
    return false;
  },

  // Helper : compte les indices utilisés dans la progression
  _countHints(progress) {
    if (!progress) return 0;
    let c = 0;
    for (const key of Object.keys(progress)) {
      if (key === '__meta') continue;
      const v = progress[key];
      if (v && typeof v === 'object' && v.hintsUsed) c += v.hintsUsed;
    }
    return c;
  },

  // Données pour le dashboard enseignant
  getDashboardData() {
    const studentProfiles = this.profiles.filter(p => !p.isAdmin && !p.isTeacher);
    const totalExercises = THEMES.reduce((s, t) => s + t.exercises.length, 0);

    return studentProfiles.map(p => {
      const progress = p.progress || {};
      const done = Object.keys(progress).filter(k => k !== '__meta' && this._isDone(progress[k])).length;
      const pct = totalExercises > 0 ? Math.round(done / totalExercises * 100) : 0;
      const hintsUsed = this._countHints(progress);

      // Progression par thème
      const byTheme = THEMES.map(t => {
        const themeDone = t.exercises.filter(e => this._isDone(progress[`${t.id}-${e.n}`])).length;
        return { id: t.id, title: t.title, icon: t.icon, done: themeDone, total: t.exercises.length };
      });

      return { id: p.id, prenom: p.prenom, classe: p.classe, lastActivity: p.lastActivity, hintsUsed, done, total: totalExercises, pct, byTheme };
    }).sort((a, b) => b.pct - a.pct); // Trier par progression décroissante
  }
};
