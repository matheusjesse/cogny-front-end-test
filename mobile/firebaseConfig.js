
import { initializeApp } from 'firebase/app';

import { getFirestore,  collection,  getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_NATIVE_FIREBASE_API_KEY,
    authDomain: process.env.REACT_NATIVE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_NATIVE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_NATIVE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_NATIVE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_NATIVE_FIREBASE_APP_ID,
    measurementId: process.env.REACT_NATIVE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() 
      }));
      return productsList;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return []; 
    }
  };
  
  export default fetchProducts; 