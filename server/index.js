require ("dotenv").config();

const express=require("express");

const PORT=5000 || process.env.PORT;


const sequelize=require("./db");
const models=require("./models/models");
const cors=require("cors");
const router=require("./routes/index");
const errorHandler=require("./middleware/ErrorMiddleware")
const fileUpload = require('express-fileupload')
const ApiError = require("./error/ApiError");
const path=require("path");


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler);

const start=async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter:true})
      
        app.listen(PORT, ()=>"server start" + PORT)
    } catch (e) {
        console.log(e)
    }
}
start();