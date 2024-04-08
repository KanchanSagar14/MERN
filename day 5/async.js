// console.log("gec start");
//     function printPretty(){
//     console.log("prettyStart");
//     let ans= 2+3;
//     console.log(ans);
//     console.log("prettyEnd");
// }
// setTimeout(printPretty, 2000);
// console.log("gecEnd");
// const btn= document.getElementById( "btn" );
// btn.addEventListener("click", printPretty); // para1- typeof event para2- call back func


// console.log('start');
// const req=fetch("https://api.github.com/users/deepak3440")
// console.log(req);
// req.then(()=>console.log("fetched")); //won't run until promise completed
// console.log('end');

console.log('start');
fetch('https://dummyjson.com/products/1') // fetch is a promise
.then(res => res.json())
.then(json => console.log(json))
.catch((err)=>{
    console.log("error");
});
console.log('end');
