//Q=16
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list
//• Print a new set of invitation messages, one for each person in your list.

let guests1: string[] = ["rabia", "aneeqa", "hafsa"];
//informing people that you found a bigger dinner table.
for (let guest of guests1) {
  console.log(`Hello,${guest},we found a bigger dinner table`);
}
//Add one new guest to the beginning of your array.
let NewGuestAtBeginning: string = "huma";
guests1.unshift(NewGuestAtBeginning);
console.log(guests1);
// Add one new guest to the middle of your array.
let NewGuestInMiddle: string = "shazia";
let middleIndex: number = Math.floor(guests1.length / 2);
guests1.splice(middleIndex, 0, NewGuestInMiddle);
console.log(guests1);
// • Use append() to add one new guest to the end of your list.
let NewGuestAtEnd: string = "asma";
guests1.push(NewGuestAtEnd);
console.log(guests1);
//• Print a new set of invitation messages, one for each person in your list.
console.log(" new set of invitation messages:");
for (let guest of guests1) {
  console.log(`Dear ${guest}, you are invited to  dinner`);
}
