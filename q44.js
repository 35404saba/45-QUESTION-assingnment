//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the
// sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwich(...items) {
    console.log("your sandwich includes");
    if (items.length === 0) {
        console.log("oops :( your sandwich is empty");
    }
    else {
        items.forEach((item) => {
            console.log(item);
        });
    }
    console.log();
}
makesandwich("potato", "tomato", "carrot", "cucumber");
makesandwich("lettucs", "cucumber");
makesandwich();
export {};
