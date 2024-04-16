// const fs=require('fs');
// const http = require('http');
// const url = require('url');

// const data = fs.readFileSync('./data.json','utf-8');
// const dataObj = JSON.parse(data).products;
// const cardTemplate = `
// <div class='product-card'>
// <h4>Title</h4>
// <img src=# alt='image'>
// <a href="link"> more info..</a>

// </div>
// `;
// let result = [];
// for(let i=0; i<dataObj.length; i++){
//     let temp = cardTemplate;
//     temp = temp.replace('Title',dataObj[i].title);
//     temp = temp.replace('#',dataObj[i].images[0]);
//     temp = temp.replace('link', `/product?id=${i}`);

//     result.push(temp);
// }
// // console.log(result);
// result= result.join(' ')

// const server = http.createServer((req, res)=>{
//     const {pathname,query}= url.parse(req.url, true);
//     // const path= url.parse(route, true);
//     // console.log(pathname);
//     console.log(query);
//     if(pathname==='/home'){
//         res.end(result);
//     } 
//     else if(pathname==='/product'){
//         const id=query.id;
//         // // console.log(dataObj[id]);
//         // res.end(dataObj[id].title);
//         // // res.end('Product '+query.id);
        
//         const item=dataObj[id];
//          res.end(
//             `<div class="product">
//                 <h4>${item.title}</h4>
//                 <h4>${item.description}</h4>
//                 <img src="${item.images[0]}">
//                 <h4>$ ${item.price}</h4>
//                 <h4>${item.stock}</h4>
//                 <h4>${item.rating}</h4>


//             </div>`
//          )
//     }else{
//         res.end('Not Found');
//     }
//     // res.end(result);

// });
// server.listen(1400);




const fs=require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data).products;
const cardTemplate = `
<body style="display: grid;
            grid-template-columns: 1fr 1fr 1fr ;
            column-gap: 15px;
            row-gap: 5px; ">
    <div class='product-card' 
        style="height:300px; 
                width:300px; 
                border : 3px double black;
                margin: 15px auto;
                padding: 20px;
                background-image:
    conic-gradient(from 139deg at 50% 50%, #f5f5f0 0%, #ffd1e1 26%, #f5f5f0 50%, #c0f7ea 74%, #f5f5f0 100%);
                
                text-align: center;
                border-radius: 10px;">
    <h4>Title</h4>
    <img src="img_src" alt="product_image" 
        style="height: 150px;
                width: 150px;
                margin: 10px;
                cursor: pointer;"><br>
    <button><a href= read> Read More </a></button>
    <p> $ Price</p>

    </div>
<style>
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
</body>`;
let result = [];
for(let i=0; i<dataObj.length; i++){
    let temp = cardTemplate;
    temp = temp.replace('Title',dataObj[i].title);
    temp = temp.replace('img_src',dataObj[i].images[0]);
    temp = temp.replace('read', `/product?id=${i}`);
    temp = temp.replace('Price',dataObj[i].price);


    result.push(temp);
}
// console.log(result);
result= result.join(' ')

const server = http.createServer((req, res)=>{
    const route = req.url;
    const {pathname , query}= url.parse(route, true);  //returns object
    console.log(pathname);
    console.log(query);
    if(pathname=='/home'){
        res.end(result);
    }
    else if(pathname=='/product'){
        const id = query.id;
        const item= dataObj[id];
        // console.log(dataObj[id])
        // res.end('Product Page '+ query.id);
        // res.end(dataObj[id].title)
        res.end(`
        <div class='inside' style="background-color: beige;">
        
        <h4>${item.title}</h4>
                 <h4>${item.description}</h4>
                 <img src="${item.images[0]}">
                 <h4>Price: $ ${item.price}</h4>
                 <h4>Stock Available: ${item.stock}</h4>
                 <h4>Ratings: ${item.rating}</h4>
                 <h4>Category: ${item.category}</h4>

        <div>`);
    }
    else{
        res.end('Not Found');
    }

    // res.end(result);

});
server.listen(1400);