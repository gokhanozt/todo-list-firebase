import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsD8uy9OLTADqKPKfxfrS22x5JFZwEIrc",
  authDomain: "todo-list-crud-364611.firebaseapp.com",
  projectId: "todo-list-crud-364611",
  storageBucket: "todo-list-crud-364611.appspot.com",
  messagingSenderId: "29648748914",
  appId: "1:29648748914:web:8a474b49fc13d3ff08ddeb",
  measurementId: "G-2K6C73PLC2",
};

firebase.initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getDatabase(firebaseApp);
export default firebase;
