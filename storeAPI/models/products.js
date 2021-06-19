const { storage } = require("../data/storage");

class Store {

    static async listProducts(){
        //list all items in the products array
        const products = storage.get("products").value();
        return products;
    }



    static async getProductID(productID){
        const product = storage;
          storage.get("products")
          storage.find({id:Number(productID)})
          storage.value()
          return product;

        //   const product = storage
        //   .get("products")
        //   .find({ id: Number(productId) })
        //   .value();
        // return product;
    }
}


module.exports = Store;