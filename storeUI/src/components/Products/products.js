import ProductCard from "../ProductCard/productCard";
import "./products.css"

function Products({products = []}){
    
   // console.log("hi")
  // console.log(products)
    return(
    <div className="productInfo">
        <h4>
            Welcome, please choose a product you'd like to purchase!
        </h4>

        <div className="product-grid">
            {products.map((products) => (
                <ProductCard
                    key={products.id}
                    product={products}
                    productName = {products.name}
                    
                />  
                // console.log(products)  
                // console.log("hi") 
            ))}  
          
        </div>
        
    </div>
    
    )

    
}
console.log("fghkfg")


export default Products;