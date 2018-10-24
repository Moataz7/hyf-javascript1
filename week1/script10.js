// Array with different types of elements, compare infinities
let x = [7, "text"];
console.log (x);
console.log ('the type of the first element in my array is ',typeof x[0]);
console.log ('the type of the second element in my array is ',typeof x[1]);
let y = 6/0;
let z = 10/0;
console.log('the value of y', y);
console.log('the value of z', z);
console.log('the type of y', typeof y);
console.log('the type of z',typeof z);
if (y===z) {
    console.log('y and z are the same value, so we can compare infinities');
	}else{
		console.log('x and y are Not the same value, so we can NOT compare infinities');
}