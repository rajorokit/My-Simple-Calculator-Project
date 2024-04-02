#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { massage: "EnerFirstNumber", type: "number", name: "FirstNumber" },
    { massage: "EnterSecondNumber", type: "number", name: "SecondNumber" },
    {
        massage: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("invalid");
}
