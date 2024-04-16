const b= new Buffer.from('abc');

console.log(b); // value printed in hex
b.write('other'); //overwrites value
console.log(b.toString()); // in string


