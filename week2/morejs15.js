// compare arrays
let x = [1,2,3];
let y = [1,2,3];
let z = y;

function same(a,b){
    let same = a.length === b.length,
        result,
        len;
    if(!same) { result = false }
    else {
        // so far, they're the same
        result = true;
        len = a.length;
        for(var i=0;result !== false && i < len; i++) {
            if(a[i] !== b[i]) {
                result = false;
            }
        }
    }
    return result;
}
console.log(same(x, y));  
