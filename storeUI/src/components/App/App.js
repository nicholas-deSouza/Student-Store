import { Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/navBar"
import Products from "../Products/products"
import Home from "../Home/home";
//import ProductCard from "../ProductCard/productCard";
import ProductInfo from "../ShowSingleProduct/singleproduct";

// import './App.css';


function App() {

  const[products, setProducts] = useState([]);      //starts with empty array

  
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const res = await axios.get("http://localhost:3000/product")
        const products = res?.data?.products
        //const data = res.data
        if(products){
          setProducts(products)
        }
      } catch(err){

      }
    }

    fetchProducts()
  },[])
// console.log(products)


  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      {/* <Products/> */}
      {/* <ProductCard/> */}
              {/* <Route path="/" element={<Home products={products} />}/> */}
              
              <Route path="/products/:productID" element={<ProductInfo/>}/>
          
      </BrowserRouter>
      
      <Home/>

      <Products products = {products}/>
      
       
    </div>
  );
}

export default App;
