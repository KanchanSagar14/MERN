// const res = document.querySelector('div');
// console.log(res);
// div.innerHTML = "<p>hello</p>";
// res.remove(); // itmes inside div removed
// const res= document.querySelector('div');
// // const c = document.querySelector('p:nth-of-type(2)'); // for nth number of child
// const c = document.querySelector('p');  //for first child only
// res.removeChild(c); // removes first child

// // event- any interaction is event
function getInfo (e){
    console.log(e);
//     const d = document.querySelector('div');
//  d.prepend("name is");
// }
// e.target.class='abc';
e.target.setAttribute('style', 'color:blue'); // or do 
e.target.style.backgroundColor = 'red';
}
