//Q=29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favoriteFruits = ["apple", "bananas", "orange"];
if (favoriteFruits.includes("apple")) {
    console.log("i like apple!");
}
if (favoriteFruits.includes("bananas")) {
    console.log("I enjoy bananas!");
}
if (favoriteFruits.includes("orange")) {
    console.log("orang are delicious!");
}
if (favoriteFruits.includes("Grapes")) {
    console.log("grapes are tasty !");
}
if (favoriteFruits.includes("mango")) {
    console.log("mangoes are one of my favorite !");
}
export {};
