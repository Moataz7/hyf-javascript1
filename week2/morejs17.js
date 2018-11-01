let bar = 42;
console.log ('bar =' + bar);
console.log (typeof typeof bar);
// the internal function (type of) will start from the right, 
// the type of bar (42) is a number so the output is a 'number', 
// then the type of the output('number') is string.