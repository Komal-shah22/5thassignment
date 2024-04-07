#!/usr/bin/env/node

import inquirer from "inquirer";
import chalk from "chalk";

const Currency:any = {
    USD :"1",
    EUR:"0.9",
    GBP:"0.76",
    IMR:"74.57",
    PKR:"280",
    JYP:"113",
    CAD:"1.3",
    AUD :"1.65"
};

let user_answer = await inquirer.prompt([
 {
    name:"from",
    message:"Enter From Currency",
    type:"list",
    choices:['USD','EUR','GBP','IMR','PKR','JYP','CAD','AUD']
    
},
{
    
    name:"To",
    message:"Enter To Currency",
    type:"list",
    choices:['USD','EUR','GBP','IMR','PKR','JYP','CAD','AUD']

},
{
    name :"amount",
    message:`Enter your Amount:${chalk.bold.greenBright()}`,
    type :"number"
}



])
let fromeAmount = Currency[user_answer.from]
let ToAmount = Currency[user_answer.To]
let amount = user_answer.amount
let baseAmount = amount / fromeAmount
let convertedAmount = baseAmount * ToAmount
console.log(`converted Amount :${chalk.bold.greenBright(convertedAmount)}`);