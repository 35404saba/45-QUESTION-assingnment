// 37.
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different messages
function make_T_shirt1(
  size: string = "large",
  message: string = "i love typescript"
): void {
  console.log(`the size of the shirt is ${size} and the message is ${message}`);
}
make_T_shirt1();
make_T_shirt1("medium");
make_T_shirt1("small", "i love big clothes");
