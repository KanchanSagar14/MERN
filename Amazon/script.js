const express=require('express');
const productsRouter=require('./routes/productsRoutes.js');
const mongoose=require('mongoose');

const app=express();
const test=require('./models/productsModel.js')


app.use(express.json());

app.use('/api/products', productsRouter);

const url="mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.cekttsw.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const databaseUser='sagarkanchan5000';
const databasePassword='KanchanSagar';
const databaseName='Aamazon-Backend';


let dbLink=url.replace("$_USERNAME_$", databaseUser);
dbLink=dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink=dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink)
  .then(() => console.log('Database Connected!'));

app.listen(1400,
    ()=> console.log('app started')
);
