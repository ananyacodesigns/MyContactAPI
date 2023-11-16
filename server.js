const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection")
connectDb();
const app = express();
const port = process.env.PORT || 5000;
//HHTP client is used for testing api. thunderclient or postman 
app.use(express,json()); //applied inbuilt middleware and now this will provide a parser which will parse the data recieved from the client on the server side
app.use("/api/contacts", require("./routes/contactRoutes")); //middleware 
app.use(errorHandler);
app.listen(port,() => {
    console.log(`Server running on ${port}`);
});