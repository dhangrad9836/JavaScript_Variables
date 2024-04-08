// //for loop
let base = parseInt(
  prompt("Waha number do you want to a multiplication table of? ")
);
let range = parseInt(prompt("What number should I stop at?"));

if (!base) {
  base = 1;
} //means if you don't give a valid number then we will set base to 1

//input data
// for(let i = 1; i <= range; i++){
//     //loop body
//     console.log(`${base} x ${i} = ${base * i}`);
// }

//same as while and do while loop
let i = 1;
while (i <= range) {
  console.log(`${base} x ${i} = ${base * i}`);
  i++;
}

//do while
let i = 1;
do {
  console.log(`${base} x ${i} = ${base * i}`);
  i++;
} while (i <= range);

/////////////////////////////////////////
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

let result = "";
let character = "x";
let length = 8;

//password
//""
for (let i = 1; i <= length; i++) {
  result += "x";
}
console.log(result);
//////////////////////////////;///////////
//repeated while loop
let password1 = prompt("Enter password").toLowerCase();
let correctPassword = "password";

while (password1 != correctPassword) {
  password1 = prompt("Enter password: ").toLowerCase();
}
console.log("logged in!");

//same password example using do/while loop
let correctedPassword = "password";
let password; //note that we have to declare this outside the body of the do/while loop
let attempts = 3; //this is limit for the user to log in or timed out
do {
  password = prompt("Enter password: ").toLowerCase();
  attempts--; /// decrement each time the incorrect password is enterd
} while (password != correctPassword && attempts > 0);
{
  if (attempts == 0) {
    console.log("try again in 5 minutes");
  }
}
l;
//1 < = nan??

// for (let i = 1; i < 10; i++) {
//   //console.log(i);
//   console.log(`3 x ${i} = ${3 * i}`);
//   //range

// }

// for (let bottlesOnTheWall = 99; bottlesOnTheWall >= 0; bottlesOnTheWall--) {
//   if (bottlesOnTheWall) {
//     console.log(`${bottlesOnTheWall} bottles of mild on the wall...`);
//   } else {
//     console.log(`No more bottles of milk on the wall`);
//   }
// }

// //while loop
// let bottlesONWall = 99;
// while(bottlesONWall >= 0){
//     if(bottlesONWall){
//         console.log(`${bottlesONWall} bottles of mild on the wall...`);

//     } else{
//         console.log(`No more bottles on wall`);
//     }
//     bottlesONWall--;
// }
