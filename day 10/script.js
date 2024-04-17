const express=require('express');
// const fs=require('fs');
const fsPromises=require("fs/promises");
const productController=require('./controllers/productsControllers.js');
const userController=require('./controllers/userControllers.js');
const productRouter= require('./routes/productRouter.js');
const userRouter= require('./routes/userRouter.js');


const app = express();


app.use(express.json());

// const productRouter=express.Router();
// const userRouter=express.Router();
app.use('/api/products', productRouter)
app.use('/api/user', userRouter)


// app.use((req,res,next)=>{

   

// console.log(req.url)
// const time=new Date().toLocaleString();
// fsPromises.appendFile('./log.txt', req.url+'\n'+time);
// next();
// });



// app.get('/api/products', async(req, res)=>{
//     // const data= fs.readFileSync('./data.json', 'utf-8');
//     const data=await fsPromises.readFile('./data.json', 'utf-8');
//     const arr= JSON.parse(data);
//     res.json({
//         status:'Success',
//         results:arr.length,
//         data:{
//         products:arr,
//     }
//     })
// });

productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProducts);


productRouter.route('/:id')
.put(productController.replaceProducts)
.delete(productController.delProducts);


userRouter.route('/')
.get(userController.getUser)
.post(userController.postUser)
.put(userController.putUser)
.delete(userController.delUser);




// app.get('/api/products', productController.getAllProducts);
// app.post('/api/products', productController.addProducts);
// app.delete('/api/products/:id', productController.delProducts);
// app.put('/api/products/:id', productController.replaceProducts);


// app.get('/api/user', userController.getUser);
// app.post('/api/user', userController.postUser);
// app.delete('/api/user', userController.delUser);
// app.put('/api/user', userController.putUser);


// app.post('/api/products',async (req,res)=>{
// // console.log(Object.keys(req));
// const data=req.body;

// if(!data.price||!data.title){
//     res.json({
//         status:'fail',
//         message:'must provide title and price',
//     });
// }else{
// data.id=121;
// console.log(data);
// const db=await fsPromises.readFile('./data.json','utf-8')
// const arr= JSON.parse(db);
// const len=arr.length;
// const newId=data;
// if(len==0){
// data.id=1;
// // console.log(db);

// // arr.push(data);
// // console.log(arr);
// fsPromises.writeFile("./data.json", JSON.stringify(arr));
// }else{
// // const newId= db(len-1);

// newId.id=(arr[len-1].id)+1;
// // console.log(newId)


// }
// arr.push(newId);
// fsPromises.writeFile("./data.json", JSON.stringify(arr));

// res.json({
//     status:'Success',
//     results:arr.length,
//     data:{
//     products:arr,
// }
// })
// }
// // res.send('work in progress');
// });



// app.put('/api/products/:id', async(req,res)=>{

//     const arr= JSON.parse(await fsPromises.readFile("./data.json", 'utf-8'))
// console.log(req);
// // res.send("work in progress");
// const reqID=req.params.id;
// const data=req.body;
// data.id=reqID;
// // console.log(data);
// const newArr= arr.map((elem)=>{
// if(elem.id==reqID)return data;
// else return elem;
// });
// fsPromises.writeFile("./data.json", JSON.stringify(newArr));
// res.json({
//     status:'success',
//     results:1,
//     data:{
//         newId: data,
//     }
// })
// })

// app.delete('/api/products/:id', async(req,res)=>{
//     const reqID=parseInt(req.params.id);
//     const arr= JSON.parse(await fsPromises.readFile('./data.json', 'utf-8'));
//     const newArr=arr.filter((elem)=>{
//         if(elem.id==reqID)return false;
//         else return true;
//     });
// fsPromises.writeFile('./data.json', JSON.stringify(newArr));
// res.status(204);
// res.json({
//     status:'success',
//     data:{
//         newId:null,
//     }
// })
// });

// app.get('/api/user', (req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:"route not yet implemented"
//     });
// })


// app.post('/api/user', (req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:"route not yet implemented"
//     });
// })


// app.put('/api/user', (req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:"route not yet implemented"
//     });
// })


// app.delete('/api/user', (req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         message:"route not yet implemented"
//     });
// })





app.listen(1400);

