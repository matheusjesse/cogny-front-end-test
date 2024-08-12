import { collection, getDocs } from "firebase/firestore";
import db from "./firebase"; 

const fetchProducts = async () => {
  try {
    const produtosCollection = collection(db, "produtos");
    const produtosSnapshot = await getDocs(produtosCollection);
    const produtosList = produtosSnapshot.docs.map(doc => doc.data());

    console.log(produtosList); 
    return produtosList; 
  } catch (error) {
    console.error("Erro ao buscar produtos: ", error);
  }
};

export default fetchProducts; 
