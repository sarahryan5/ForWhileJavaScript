var userEle = document.body.querySelector(".user");
var dragonEle = document.body.querySelector(".dragon");
var winnerEle = document.body.querySelector(".winner");
var inputHits = 0;
var userDamage = 0;
var dragonDamage = 0;
var randomDragonDamage = 0;

while (userDamage < 5 && dragonDamage < 10) {
  inputHits = Number(prompt("How many hits are you going to attempt to hit the dragon with?"));
  randomDragonDamage = Math.floor(Math.random() * inputHits) + 1;
  if (randomDragonDamage > 5) {
    dragonDamage = dragonDamage + 1;
  } else {
    dragonDamage = dragonDamage + randomDragonDamage;
  }
  userDamage = userDamage + (Math.floor(Math.random() * 2) + 1);
  userEle.innerHTML = "User Damage: " + userDamage;
  dragonEle.innerHTML = "Dragon Damage: " + dragonDamage;
}

if (dragonDamage >= 10 && userDamage >= 5) {
  winnerEle.innerHTML = "Tie!";
} else if (dragonDamage >= 10) {
  winnerEle.innerHTML = "User wins!";
} else if (userDamage >= 5) {
  winnerEle.innerHTML = "User loses!";
}