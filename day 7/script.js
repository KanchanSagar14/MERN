// const fs= require ('node:fs');

// const data=fs.readFileSync('./ReadMe.txt', {encoding: 'utf8'}); // encoding used to print actual text
// console.log(data);
// console.log(data.toString()); // to print actual data


// const fs= require('fs');
// console.log('start');
// const data1= fs.writeFileSync('./logs.txt', "Kanchan Sagar"); // to write into a file
// console.log(data1);
// console.log('end');

// const fs= require('fs');
// console.log('start');
// const data1= fs.readFileSync('./logs.txt', {encoding: 'utf8'}); // to read from file // readFileSync is Synchronous and readFile is Asynchronous
// console.log(data1);
// console.log('end');


// const fsPromises= require('fs/promises');
// console.log("start");
// const pr= fsPromises.readFile('./ReadMe.txt', {encoding:'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("end");


//call back in file system
// const fs=require('fs');
// const data2 = fs.readFile('./ReadMe.txt', {encoding: 'utf8'}, (err, data2)=>{
// console.log(data2)
// });


// const http= require('http');
// const app= http.createServer((req,res)=>{
// console.log('request received')
// // console.log(req.url);
// console.log(Object.keys(req));
// res.writeHead(200, {            // 200 is status code
//     "content-type": 'text/html',
// })
// res.end("<h1>hello</h1> <h1>World</h1>");
// });
// app.listen(1400, ()=>{
//     console.log("server started")
// });

// http://localhost:1400/



//mini project
const fs=require('fs');
const data = fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data);
const products = dataObj.products;
// console.log(data);
// console.log(products);

const http = require('http');
const htmlTemplate =`<!DOCTYPE HTML>
<html  lang='en-US'>
    <head>
    <style>
    
    
    header{
        text-align: center;
        color: #8576FF;

        padding: 20px;
    }
    main{
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 10px;
    }
    .product-card{
        height : 400px;
        width : 300px;
        border : 3px double black;
        margin: 20px auto;
        padding: 20px;
        text-align: center;
        background-image:
    linear-gradient(215.77deg, #c7c1ff 1%, #bbdbf7 65.57%, #efefff 100%);
    }
    img{
        height: 100px;
        width: 100px;
    }
    button{
        background-color: black;
        border: none;
        padding: 10px;
        border-radius: 10px;
    }
    a{
        color: white;
        text-decoration: none;
    }
    
    </style>
    </head>
    <body>
    <header><h1>Product Details</h1></header>
        <main>Products Cards</main>
    </body>
</html>
`
const cardTemplate = `
<div class='product-card'>


<h4>Title</h4>
<img src=#>
<h3>$ price</h3>
<h3> Discount: $ discount</h3>

<p>Info</p>
<button><a href="products">Click</a></button>

</div>
`
// const card_1 = cardTemplate.replace('Title',products[0].title)
//                             .replace('Info',products[0].description)
// const card_2 = cardTemplate.replace('Title',products[1].title)
//                             .replace('Info',products[1].description)

const allcards = products.map((elem)=>{
    let newcard= cardTemplate;
   
     newcard = newcard.replace('Title',elem.title);
     newcard = newcard.replace('#',elem.images[0]);
     newcard = newcard.replace('price',elem.price);
     newcard = newcard.replace('discount',elem.discountPercentage);
     newcard = newcard.replace('products', `?id=${elem.id}`);

     
    newcard = newcard.replace('Info',elem.description);
    

    return newcard;
});

    const allcardsString = allcards.join(' ');
const page = htmlTemplate.replace('Products Cards', allcardsString);

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200,{
        'content-type' : 'text/html',
    }) //Response is of what type
    res.end(page);
});
server.listen(1400,()=>{
    console.log("Server Started");
});