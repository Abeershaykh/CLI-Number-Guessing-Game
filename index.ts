#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *10+1) 

const answers = await inquirer.prompt([
  {
    name: "GuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 10: ",
  }
 ])
 if (randomNumber===answers.GuessedNumber)
  {
  console.log("Congratulations! you guessed the correct number")
} else{
  console.log("you guessed the wrong number")
}
