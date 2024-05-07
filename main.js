#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: `${chalk.bgGray.bold.italic("Enter your sentence to count words: ")}`
});
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`${chalk.bgGray.bold.italic(`Your sentence has ${words.length} words.`)}`);
console.log(`${chalk.bgGray.bold.underline.italic(`THANK YOU FOR USING HASNAIN ALVI WORD COUNTER APP`)}`);
