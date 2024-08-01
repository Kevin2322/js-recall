
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks array or not
console.log(Array.from("Hitesh"))//Convert string to array of characters  Output: ['h', 'i', 't', 'e', 's','h']
console.log(Array.from({name: "hitesh"})) // interesting because we need to secify that it is return keys array or values array otherwise it is return empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//Returns a new array from a set of variables. output: [ 100, 200, 300 ]
