const { storage } = require("../data/storage");

class Store {

    static async listProducts(){
        //list all items in the products array
        const products = storage.get("products").value();
        return products;
    }

}


module.exports = Store;