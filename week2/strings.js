// remove the commas from the string and replace them with spaces.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log (myString);
console.log ("The lenght of my string is " + myString.length);
myString = myString.replace(/,/g," ");
console.log (myString);