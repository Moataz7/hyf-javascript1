// Program checks the types of two variables and prints out
let w = 7 ;
let x = 'text';
let y = [1, 2, 3];
let z = true;
console.log ('The value of my variable W is: ', w);
console.log ('The value of my variable X is: ', x);
console.log ('The value of my variable Y is: ', y);
console.log ('The value of my variable Z is: ', z);
console.log ('The type of my variable W is: number');
console.log ('The type of my variable X is: string');
console.log ('The type of my variable Y is: array');
console.log ('The type of my variable Z is: boolean');
console.log ("The type of w is :", typeof w);
console.log ("The type of x is :", typeof x);
console.log ("The type of y is :", typeof y);
console.log ("The type of z is :", typeof z);
if (typeof w === typeof x) {
    console.log('W and X are the SAME TYPE');
} else {
    console.log('W and X are NOT the SAME TYPE')
}
if (typeof w === typeof y) {
    console.log('W and Y are the SAME TYPE');
} else {
    console.log('W and Y are NOT the SAME TYPE')
}
if (typeof w === typeof z) {
    console.log('W and Z are the SAME TYPE');
} else {
    console.log('W and Z are NOT the SAME TYPE')
}
if (typeof x === typeof y) {
    console.log('X and Y are the SAME TYPE');
} else {
    console.log('X and Y are NOT the SAME TYPE')
}
if (typeof x === typeof z) {
    console.log('X and Z are the SAME TYPE');
} else {
    console.log('X and Z are NOT the SAME TYPE')
}
if (typeof y === typeof z) {
    console.log('Y and Z are the SAME TYPE');
} else {
    console.log('Y and Z are NOT the SAME TYPE')
}