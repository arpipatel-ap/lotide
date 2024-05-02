const raisinAlarm = function (cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  } else {
    return "All good!";
  }
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookie) {
let output = [];
for (let piece of cookie) {
   if (piece.includes("🍇")) {
     output.push("Raisin alert!");
   } else {
     output.push("All good!");
   }
   
 }
 return output;
};

console.log(
raisinAlarmArray([
  ["🍫", "🍫", "🍇", "🍫"],
  ["🍫", "🍇", "🍫", "🍫", "🍇"],
  ["🍫", "🍫", "🍫"],
])
);

// Expected output
// ["Raisin alert!", "Raisin alert!", "All good!"]