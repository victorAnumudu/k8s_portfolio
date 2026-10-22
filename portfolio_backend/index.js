const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require("cors");

const app = express()


app.use(cors({credentials: true}));
// app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// ROUTES



const PORT = process.env.SERVER_PORT || 10000
// const DB_URL = process.env.NODE_ENV == 'development' ? process.env.DB_URL : process.env.MONGODB_DEV
const DB_URL = process.env.MONGODB_URI;

if (!DB_URL) {
    throw new Error('MONGODB_URI environment variable is missing');
}

// connect to DATABASE
mongoose.connect(DB_URL).then((info)=>{
    console.log(`Connected to Database`)
}).catch((err)=>{
    console.log(err)
})


const array = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 40}
]

app.get('/', (req, res)=>{
    res.status(200).json({status: 1, message:'Sucessful', data: array })
})


const webSocketServer = app.listen(PORT, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('SERVER CONNECTED');
});


