export const firebaseConfig = {
    apiKey: "AIzaSyCS5vVg31R5BkZbLICOhdjGBZ1JvFrygHs",
    authDomain: "order-1-c66b5.firebaseapp.com",
    projectId: "order-1-c66b5",
    storageBucket: "order-1-c66b5.appspot.com",
    messagingSenderId: "226555278458",
    appId: "1:226555278458:web:2602b84f937907a86177c3"
};
  
  
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
  
  
let docName = "order-1-doc-id";
  
export {docName,initializeApp,getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt};
  