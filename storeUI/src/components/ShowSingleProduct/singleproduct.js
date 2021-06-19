//import Products from "../Products/products"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function ShowSingleProduct(){

    const {productsID} = useParams();
    const[products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProductID = async () => {
          try{
            const res = await axios.get(`http://localhost:3000/product/${productsID}`)
            // const products = res?.data?.products
        
            if(res?.data?.products){
              setProducts(res.data.products)
            }
          } catch(err){
    
          }
        }
    
        fetchProductID()
      },[productsID])

      

      const createSingleProductInfo = () =>{

        
            return (
              <>
                <div className="title">
                    <h3>{products?.name}</h3>
                    <p className="price">{(products?.price)}</p>
                </div>
                <p className="description">{products?.description}</p>
                <br></br>
              </>
            )
          }
        
          return (
            <div className="ProductDetail">
              <div className="card">
                <img alt={`${products?.name} pic`} src={products?.image} />
                <div className="info">
                  {createSingleProductInfo()}
                </div>
              </div>
            </div>
          )

     
}

export default ShowSingleProduct;