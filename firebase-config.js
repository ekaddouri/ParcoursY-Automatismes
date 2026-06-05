// firebase-config.js — Configuration Firebase pour Parcours Y
// Utilise le même projet Firebase que MathsPro, mais des collections séparées

const firebaseConfig = {
  apiKey: "AIzaSyAQsShgTZk-_gZL5VB9QkR--7dvZCR1u28",
  authDomain: "mathspro2026.firebaseapp.com",
  projectId: "mathspro2026",
  storageBucket: "mathspro2026.firebasestorage.app",
  messagingSenderId: "441471869449",
  appId: "1:441471869449:web:7fbf3ae0f378dd2178ced8"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Collections dédiées à Parcours Y (séparées de MathsPro)
const COLLECTIONS = {
  profiles: 'parcoursy_profiles',
  stats: 'parcoursy_data'
};
