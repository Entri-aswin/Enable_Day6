const express = require("express");
const { productRouter } = require("./routes/productRoute");
const { userRouter } = require("./routes/userRouter");
const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

const port = 4000;
app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});


