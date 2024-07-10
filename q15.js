//Q=15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of
//your program stating the name of the guest who can’t make it
// Step 1: Create an initial list of guests
let guests = ["tahira", "nida", "misbah", "samra"];
// Print the initial set of invitation messages
console.log("Initial Guest List:");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner party.`);
});
//  Identify and print the name of the guest who can't make it
let unavailableGuest = "nida";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.`);
//  Replace the guest who can't make it with a new guest
let guestIndex = guests.indexOf(unavailableGuest);
if (guestIndex !== -1) {
    let newGuest = "yasmeen";
    guests[guestIndex] = newGuest;
}
//  Print the updated set of invitation messages
console.log("\nUpdated Guest List:");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner .`);
});
export {};
