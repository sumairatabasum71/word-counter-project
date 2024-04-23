#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answer.sentence.trim().split(" ");
//print the array of word:
console.log(words);
//print word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
