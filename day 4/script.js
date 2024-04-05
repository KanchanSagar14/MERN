// // // let a= new String("hello");
// // // let b ="hello";

// // // if (a==b){
// // // console.log("yes");
// // // }
// // // else{
// // //     console.log("no");
// // // }
// // const obj={
// //     "name":"kanchan", // can use both single or double quotes
// //     "age":21
// // }
// // // console.log(obj); //or do
// // // // document.write(obj);


// // // document.write(JSON.stringify(obj));
// // // obj.age=45; // changing value
// // // document.write(JSON.stringify(obj));
// // // obj =
// // // {
// // //     "name":"x",
// // //     "rollnum": 45, // no changes done due to const do 'let' instead
// // // }
// // // document.write(JSON.stringify(obj));
// // let arr=[1,2,3,4];
// // arr=[2,3,4]; // change the array values
// // arr[4]=9;   // add element at first
// // console.log(arr);
// // console.log(typeof(arr)); // it will show object because of array is like
// // console.log(typeof(obj)); // also obj
// // console.log(Array.isArray(obj)); // false as its an object not array
// // console.log(Array.isArray(arr)); // true
// // console.log(typeof(null)) ; // returns obj
// // console.log(typeof(undefined)); //returns undefined
// // function checkIfObj(x){
// //     if(Array.isArray(x)){
// //         console.log("not obj");
// //     }
// //     else if(typeof(x)=="object"){
// //         console.log("obj");
// //     }
// //     else{
// //         console.log("not obj");
// //     }
// // }checkIfObj(1); // not obj because its a number
// // checkIfObj({}); // obj
// // checkIfObj([]) // not obj
// // const arr1 =['name', 1, true];
// // const obj1 ={
// //     'name': "a", 'age': 12, 'rollnum': 45
// // };
// // // for(let i=0; i<2; i++){
// // //     console.log(i);
// // // }
// // // for (let i=0; i<2; i++){
// // //     console.log(obj(i));
// // // }
// // // console.log(obj);
// // for (let i in obj){
// //     console.log(i);
// // }
// // console.log(window.document);
// // console.dir(window.document);
// // const res= 
// // document.getElementsByTagName('h3');
// // console.log(res);

// document.getElementById('h3').innerHTML="hello world";
// // console.dir(res);
// const res= document.querySelectorAll('div>h4');
// console.log(res);
const ne = document.createElement('h4')
ne.innerText = "Hello World kkkkk";

// console.log(ne);
document.body.appendChild(ne); // always appends at last 
const firstdiv = document.getElementsByTagName('div');
firstdiv[0].appendChild(ne); //appending to the first div
let rem =document.getElementById('h4');
rem.remove();
