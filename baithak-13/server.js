const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arshjain2605_db_user:NTjgI9B6pdrTiZQ0@cluster0.ptp4zqm.mongodb.net/')
.then(() => {
    console.log("database chal gya");
})
.catch((err) => {
    console.log("nhi chla", err);
});

app.get('/', (req, res) => {
    res.send("welcome my friend");
});

app.listen(PORT, () => {
    console.log(`server chal gya : ${PORT}`);
});

//mongodb+srv://arshjain2605_db_user:<db_password>@cluster0.ptp4zqm.mongodb.net/
//NTjgI9B6pdrTiZQ0
//arshjain2605_db_user