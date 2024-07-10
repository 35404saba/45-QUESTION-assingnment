//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
//separate array. Call show_magicians() with each array to
// show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians1(magicians1) {
    magicians1.forEach((magician1) => {
        console.log(magician1);
    });
}
function make_great(magicians1) {
    return magicians1.map((magician1) => `the great ${magician1}`);
}
let magicians1 = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
let greatmagicians = make_great([
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
]);
console.log("original magicians");
show_magicians1(magicians1);
console.log("\nGreat magicians");
show_magicians1(greatmagicians);
export {};
