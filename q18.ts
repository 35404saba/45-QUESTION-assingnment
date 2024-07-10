//Q=18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
//• Sort to change your array so it’s stored in reverse alphabetical order.
//. Print the list to show that its order has changed.
let places: string[] = [
  "new zeland",
  "narankagan",
  "fortress",
  "iqbal park",
  "model town park",
];

//Print your array in its original order.
console.log("original order:", places);
//• Print your array in alphabetical order without modifying the actual list.
let sortedplaces = [...places].sort();
console.log("alphabetical order:", sortedplaces);
//• Show that your array is still in its original order by printing it.
console.log("still in original order:", places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
let reverseSortedPlaces = [...places].sort().reverse();
console.log("reverse alphabetical order:", reverseSortedPlaces);
//• Show that your array is still in its original order by printing it again.
console.log("still original order:", places);
//• Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("reverse order:", places);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("back to original order:", places);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("sorted in alphabetical  order:", places);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has
places.sort().reverse();
console.log("sorted in reverse alphabetical order:", places);
