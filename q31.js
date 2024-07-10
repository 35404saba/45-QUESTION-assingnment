//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
//define the list of user
let users = [];
//list of users is not empty
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    //list is not empty,remove all usersname
    users = [];
    console.log("all usersnames have been removed.");
}
export {};
