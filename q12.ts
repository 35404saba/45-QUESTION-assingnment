//Q=12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s nam
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
let personName: string[] = ["farah", "kalsoom", "kiran", "eram"];
for (let i = 0; i < personName.length; i++) {
  console.log(`Hello,${personName[i]}!How are you today?`);
}
