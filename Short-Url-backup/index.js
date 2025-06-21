const express = require("express");
const app = express();
const port = 3000;
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const { connectToDatabase } = require("./connect");
connectToDatabase()
app.use(express.json());
app.use("/url", urlRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});