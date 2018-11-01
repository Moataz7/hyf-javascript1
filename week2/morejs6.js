function vehicleType (color, code, age){
    let a = (age === 0) ? ' new' : ' used';
    if (code === 1) {
    console.log('a ' + color + a +' car');
     }
     if (code === 2) {
        console.log('a ' + color + a + ' motorbike');
         }
    }
    vehicleType('red', 1, 5);
    vehicleType('blue', 2, 0);