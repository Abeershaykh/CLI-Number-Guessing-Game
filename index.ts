#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 3 + 2);

console.log("Welcome to Number Guessing Game");

const answers = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
  },
]);

if (answers.UserGuessedNumber === randomNumber) {
  console.log(`Congratulations! You guessed correct number.`);
} else {
  console.log(`You guessed wrong number.`);
}