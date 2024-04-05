const firstNameChange = (e)=> {
console.log(e.target.value);
const val=e.target.value;
if(val.length>3){
    console.log('correct');
}
}
function submitForm(e) {
 e.preventDefault();
 const t = e.target;
 const res={
    hobbies: [],
 };
 for(let i=0; i<t.length; i++){
    // console.log(t[i].value);
    // console.log(t[i].type);
    const ty=t[i].type;
    

    // console.log(nm, ty, vl);
    // if(ty=='checkbox'){
    //     console.log(t[i].checked);
    // }
    if(ty!='submit'){
        const vl = t[i].value;
    const nm = t[i].name;
        if(ty=='checkbox' && t[i].checked){
           res.hobbies.push(vl);
        }
        if(ty!='checkbox'){
           res[nm]=vl;
        }

    }
    // const imp= t(i);
//  console.dir(t[i].value)
// console.dir(t[i]);
}
console.log(res);
// console.log(e);
}
