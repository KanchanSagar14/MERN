// // console.log("hello")
// // const arr=[1,2,3];
// // const ans= arr.map((a)=>{
// //     console.log(a);
// //     return a+2; // outputs-3,4,5
// // });
// // const ans2= arr.map((a=>a*2));
// // const arr3=[10.11, 22.32, 34.67];
// // const arr5= arr3.map(a=>Math.floor(a))

// // console.log(ans2);
// // console.log(ans);
// // console.log(arr5);

// //filter
// // const arr=[10,20,30];
// // const ans=arr.filter((a)=>{
// //     if(a>20) return true;
// //     else return false;
    
// // })
// // console.log(arr);
// // console.log(ans);

// // const city=[
// //     "Delhi",
// //     "Mumbai",
// //     "Bangalore",
// //     "Hyderabad",
// //     "Chennai",
// //     "Kolkata",
// //     "India"

// // ]

// // const ans= city.filter((s)=>{
// // if(s.includes('i')){
// //     return true;
// // }else{
// //     return false;
// // }
// // });

// // console.log(ans);

// const country=[
//     "Delhi, India",
//     "Washington DC, USA",
//     "Shanghai, China", 
//     "Beijing, China",
//     "NY, USA",
//     "Iraq"
// ]
// const ans= country.filter((s)=>{
//     const uc= s.toUpperCase();
//     console.log(uc);
//     if(s.includes('i') || s.includes("I")){ //const ans=country.filter((a)=>s.toUpperCase().includes("I"));
//         return true;
//     }else{
//         return false;
//     }
//     });
//     console.log(ans)

const arr=[10,22,34,50];
const ans=arr.reduce((a,b,c,d)=>{
console.log(a,b,c,d);
return a+b;
});
console.log(ans);
