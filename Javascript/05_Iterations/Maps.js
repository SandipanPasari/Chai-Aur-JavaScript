// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('fr', "France");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }