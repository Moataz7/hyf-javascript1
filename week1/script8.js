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
if (w===x) {
    console.log('W and X are the SAME TYPE');
} else {
    console.log('W and X are NOT the SAME TYPE')
}
if (w===y) {
    console.log('W and Y are the SAME TYPE');
} else {
    console.log('W and Y are NOT the SAME TYPE')
}
if (w===z) {
    console.log('W and Z are the SAME TYPE');
} else {
    console.log('W and Z are NOT the SAME TYPE')
}
if (x===y) {
    console.log('X and Y are the SAME TYPE');
} else {
    console.log('X and Y are NOT the SAME TYPE')
}
if (x===z) {
    console.log('X and Z are the SAME TYPE');
} else {
    console.log('X and Z are NOT the SAME TYPE')
}
if (y===z) {
    console.log('Y and Z are the SAME TYPE');
} else {
    console.log('Y and Z are NOT the SAME TYPE')
}