const fs=require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data).products;
const inputElement=`
<form action='/product'>
<input type="text" name="productName">
<button type="submit">Search</button>
</form>`
const cardTemplate = `
<div class='product-card'>
<h4>Title</h4>
<img src=# alt='image'><br>
<a href="link"> more info..</a>

</div>
`;
let result = [];
for(let i=0; i<dataObj.length; i++){
    let temp = cardTemplate;
    temp = temp.replace('Title',dataObj[i].title);
    temp = temp.replace('#',dataObj[i].images[0]);
    temp = temp.replace('link', `/product?id=${i}`);

    result.push(temp);
}
// console.log(result);
result= result.join(' ')

const server = http.createServer((req, res)=>{
    const {pathname,query}= url.parse(req.url, true);
    res.writeHead(200,{
        'content-type' : 'text/html',
    });
    // const path= url.parse(route, true);
    // const pathname=path.pathname;
    console.log(query);
    if(pathname==='/home'){
        res.end(inputElement+result);
    } 
    else if(pathname==='/product'){
        // const id=query.id;
        const pName=query.productName;
        // if(id){
        //     const item=dataObj[id];
        //     res.end(`
        //     <div>
        //     <h4>${item.title}</h4>
        //     <img src="${item.images[0]}>
        //     </div>`);

        // }
        if(pName){
const searchNameResult= dataObj.filter((elem)=>{
    if(elem.title.includes(pName)){
        return true;
    }
    else{
        return false;
    }
}) 
res.end(JSON.stringify(searchNameResult));
}
        else{
            res.end('<h3>Error</h3>')
        }
        // // console.log(dataObj[id]);
        // res.end(dataObj[id].title);
        // // res.end('Product '+query.id);
        
        // const item=dataObj[id];
        //  res.end(
        //     `<div class="product">
        //         <h4>${item.title}</h4>
        //         <h4>${item.description}</h4>
        //         <img src="${item.images[0]}">
        //         <h4>$ ${item.price}</h4>
        //         <h4>${item.stock}</h4>
        //         <h4>${item.rating}</h4>


        //     </div>`
        //  )
    }
    else{
        res.end('Not Found');
    }
    // res.end(result);

});
server.listen(1400);