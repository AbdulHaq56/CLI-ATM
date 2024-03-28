#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 1020;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Number",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct Pin Code!!");
    let operatorAns = await inquirer.prompt([
        {
            name: "operator",
            message: "Select One of these Operators",
            type: "list",
            choices: ["withdraw", "checkBalance", "fastCash"],
        },
    ]);
    if (operatorAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the Amount",
                type: "number",
            },
        ]);
        (myBalance -= amountAns.amount),
            console.log(`Your Remaining Balance is ${myBalance}`);
    }
    else if (operatorAns.operator === "checkBalance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else if (operatorAns.operator === "fastCash") {
        let fastAmount = await inquirer.prompt([
            {
                name: "fixMoney",
                message: "Select The Payment you want to Withdraw",
                type: "list",
                choices: ["1000", "2000", "5000", "7000", "10000",]
            }
        ]);
        (myBalance -= fastAmount.fixMoney),
            console.log(`your remaining balance is ${myBalance}`);
    }
}
else
    console.log("Please Enter Correct Pin Number");
