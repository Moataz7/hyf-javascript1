// More JavaScript nr 7 - 8 - 9
let vehicles =[ "motorbike", "caravan", "bike", "car"]
console.log (vehicles);
console.log('The third element from the list is ' + vehicles[2]);
function vehicleType(color, code, age){
    let a = (age === 0) ? ' new ' : ' used ';
    switch (code) {
    case code = 1 :
    console.log('a ' + color + a + vehicles[0]);
    break;
    case code = 2 :
    console.log('a ' + color + a + vehicles[1]);
    break;
    case code = 3 :
    console.log('a ' + color + a + vehicles[2]);
    break;
    case code = 4 :
    console.log('a ' + color + a + vehicles[3]);   
    }
}
vehicleType('green', 3, 0);