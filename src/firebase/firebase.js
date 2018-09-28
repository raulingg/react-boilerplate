import { database, auth, initializeApp } from 'firebase';

/* eslint no-undef: 0 */
const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

initializeApp(config);

const googleAuthProvider = new auth.GoogleAuthProvider();

export { googleAuthProvider, database };
