//Q=14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
let guest = ["sumaira", "Munaza", "zahra"];
// Function to print invitation messages
function printInvitations(guestList) {
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are cordially invited to dinner.`);
    }
}
printInvitations(guest);
export {};
