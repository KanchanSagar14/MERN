// // let figlet = require("figlet");

// // figlet("Hello",(err, data)=>{
// //     console.log(data);
// // });


// //old method
// // fetch("https://api.github.com/users/deepak3440").then((res)=>{
// //     return res.json();
// // })
// // .then((data)=>{
// //     console.log(data);
// // })
// // .catch((err)=>{
// //     console.log("error occurred");
// // })
// // console.log("end");


// // new method async await
console.log("start");
async function getAPI(){
    console.log("api calling..")
    const pr= await fetch("https://api.github.com/users/deepak3440");
    console.log("making json..")

    const data =await pr.json();
    // console.log(data);
    console.log("fetched data");
}
getAPI();
console.log("end");




