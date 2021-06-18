const express = require("express");
const router = express.Router();
const Store = require("../models/products");


// list all products
router.get("/", async (req, res, next) => {
    try {
      const products = await Store.listProducts()
      res.status(200).json({ products })
    } catch (err) {
      next(err)
    }
  })



// router.get("/", async(req, res, next) =>{
//     res.status(200).json()
// })

// router.post("/:products", async (req,res, next) =>{
//     console.log(req.params);

//     res.status(200).json(req.params);
// })

module.exports = router;