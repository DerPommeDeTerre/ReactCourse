const nums = [1,2,3,4,5]

let result = nums.map(function(elements){
    return elements * elements;
})

console.log(result);

const names = ["alice", "bob", "charlie", "danielle"]

let result2 = names.map(function(items){
    // return items.charAt(0).toUpperCase() + items.slice(1);-----Alternative
    return items[0].toLocaleUpperCase() + items.slice(1);
})

console.log(result2);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

let result3 = pokemon.map(function(poki){
    return `<p>${poki}<(p)>`;
})

console.log(result3);