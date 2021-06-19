const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const productsRouter = require("./routes/products");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use("/product", productsRouter);



// app.get("/", async (req, res, next) =>{
//     res.status(200).json({ping: "pong"});
// })

const PORT = 3000;

app.listen(PORT, () => {
    console.log("🚀Server listening on port " + PORT)
})