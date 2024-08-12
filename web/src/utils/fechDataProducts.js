import { collection, getDocs } from "firebase/firestore";
import db from "../firebase"; 

const fetchProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => doc.data());
    return productsList;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return []; 
  }
};

export default fetchProducts; 
