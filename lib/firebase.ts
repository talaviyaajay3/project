import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCtt7GfODtcGVgNdV-BzdFZxh74wOmT0v0",
  authDomain: "nodemcu-23f8b.firebaseapp.com",
  databaseURL: "https://nodemcu-23f8b-default-rtdb.firebaseio.com",
  projectId: "nodemcu-23f8b",
  storageBucket: "nodemcu-23f8b.firebasestorage.app",
  messagingSenderId: "1020615794375",
  appId: "1:1020615794375:web:b81f5196900e4c892968e2",
  measurementId: "G-38C26J98JS"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);