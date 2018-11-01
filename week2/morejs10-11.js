// More JavaScript nr 10 - 11
// You can add one or more vehicle to the list and the program stills working ;)
let vehicles =[ "car", "motorbike", "caravan", "bike"];
str1 = "";
for (let i=0; i < (vehicles.length - 2) ; i++){
    str1 += ' '+vehicles[i]+'s,';
}
str2 = vehicles[(vehicles.length) -2]  ;  
str3 = vehicles[(vehicles.length) -1]  ; 
console.log('\"Amazing Jo\'s Garage, we service' + str1 + ' ' + str2 + 's'+' and '+ str3 +'s.\"');


 