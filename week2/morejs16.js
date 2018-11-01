let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log('this is o1' , o1);
console.log('this is o2' , o2);
console.log('this is o3' , o3);
o2 = { file : 'rar' };
console.log('this is o1' , o1);
console.log('this is o2' , o2);
console.log('this is o3' , o3);
o1 = { folder : 'zip' };
console.log('this is o1' , o1);
console.log('this is o2' , o2);
console.log('this is o3' , o3);
// Sure the order that I assign (o3 = o2 or o2 = o3) matter.
// if in the beginning written o2 = o3, then the value of o2 and o3 will be undefined