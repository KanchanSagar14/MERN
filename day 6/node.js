function sum(a,b){
    console.log(a+b);
}
// sum(2,3) // 5
function sub(a,b){
    console.log(a-b);
}
const name="ajay";
// module.exports=sum; // for one function
module.exports = {
    summation: sum,
    subtraction: sub,
    name
}; //for multiple functions