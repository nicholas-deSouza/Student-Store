import "./productCard.css"


function ProductCard({product}){
    
    return(
        <div className="ProductCard">
            
            <div className="Picture">
                <img src={product.image} alt="product"/>
            </div>
            <div className="ProductInfo">
                <div className="ProductName">
                    <p  className="product-name">{product.name}</p>
                </div>
                <div className="ProductPrice">
                    <p className="product-price">{product.price}</p>
                </div>
                <div className="ProductDescription">
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;