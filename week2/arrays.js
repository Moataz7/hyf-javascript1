// Add, delete, edit and find index of an element in array.
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log ('favorite animals = ', favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log ('The new value of the array is [\'blowfish\', \'meerkat\' , \'capricorn\', \'giraffe\' , \'turtle\']');
console.log ('favorite animals = ', favoriteAnimals);
console.log ('The array has a length of: ' , favoriteAnimals.length );
favoriteAnimals.splice(3,1);
console.log ('favorite animals = ', favoriteAnimals);
console.log ('The item you are looking for (meerkat) is at index ' + favoriteAnimals.findIndex(favoriteAnimal => favoriteAnimal === 'meerkat'));
