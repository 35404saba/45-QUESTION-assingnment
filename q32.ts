//Q=32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
//•  Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// List of current users
let currentUsers: string[] = ["john", "smith", "sapna", "emma", "hamna"];

// List of new users
let newUsers: string[] = ["maria", "Alex", "hina", "smiller", "princess"];

// Function to check if a username is available
function isUsernameAvailable(username: string): boolean {
  // Convert both username arrays to lowercase for case-insensitive comparison
  let currentUsersLowercase: string[] = currentUsers.map((user) =>
    user.toLowerCase()
  );
  let usernameLowercase: string = username.toLowerCase();

  return !currentUsersLowercase.includes(usernameLowercase);
}

// Loop through new_users list and check availability of each username
newUsers.forEach((newUser) => {
  if (isUsernameAvailable(newUser)) {
    console.log(`The username '${newUser}' is available.`);
  } else {
    console.log(
      `Sorry, the username '${newUser}' is already taken. Please choose another one.`
    );
  }
});
