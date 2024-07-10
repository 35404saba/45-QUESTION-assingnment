const magicians = ["Penn Jillette", "Criss Angel", "Teller"];
function showMagicians(magicians) {
    console.log(magicians.join("\n"));
}
function makeGreat(magicians) {
    return magicians.map((magician) => `${magician} the Great`);
}
console.log("Original magicians:");
showMagicians(magicians);
const greatMagicians = makeGreat(magicians);
console.log("\nModified list:");
showMagicians(greatMagicians);
export {};
