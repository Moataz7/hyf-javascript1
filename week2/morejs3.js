//a function that takes the object and prints out all of its properties and values.
let myCar = {
    brand : 'Ford',
    model : 'Mustang',
    year : 1969,
} ;
console.log ('My car = ' , myCar);
function display(myCar) {
    for (let x in myCar) {
        console.log("Properties of My car "+ x);
    }
    console.log(Object.values(myCar));
}
display(myCar);