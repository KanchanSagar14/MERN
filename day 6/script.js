// console.log("start");
// setTimeout(()=>{console.log("..timeout")}, 0)
// console.log("end")

// setTimeout(()=>{
//     console.log("timeout 1")},1000)
// console.log("start")
// setTimeout(()=>{
//     console.log("timeout 2")},0)
// console.log("intermediate")
// console.log("end")


// function createOrder(x, fn){
// console.log(x);
// setTimeout(()=>fn("xyz"), 5000);
// }
// function makePayement(orderID){
// console.log(orderID);
// }

// createOrder("soap", makePayement);


//promises


// const pr=new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         reject("Out of Stock");
//     },0
//     );
// });
// setTimeout(()=>{
//     console.log("first setTimeout");
// },0
// );
// console.log(pr);
//  pr.then((res)=>{
//     console.log(res);
//  }).catch((err)=>{ // used with reject
//     console.log(err);
//  })
 setTimeout(function abc(){
    console.log("i am one");
 },0);
  const pr= new Promise((res, rej)=>{
    setTimeout(()=>{res("done")},0);
  })
  pr.then(function b(res){
    console.log("promise completed", res);
  });
  setTimeout(function xyz(){
    console.log("i am two");
  },0);
 

