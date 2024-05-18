#! /usr/bin/enr node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter fristNumber", type: "number", name: "fristNumber" },
    { message: "enter secondNumber", type: "number", name: "secondNumber" },
    {
      message: "select one of the operations",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division","Percentage"]
    }]);
    if (answer.operator === "Addition"){
      let result = answer.fristNumber +answer.secondNumber
      console.log(result)
    }
    else if (answer.operator === "Subtraction"){
        let result = answer.fristNumber -answer.secondNumber
        console.log(result)
      }
      else if (answer.operator === "Multiplication"){
        let result = answer.fristNumber *answer.secondNumber
        console.log(result)
      }
      else if (answer.operator === "Division"){
        let result = answer.fristNumber /answer.secondNumber
        console.log(result)
      } 
      else if (answer.operator === "Percentage"){
        let result = answer.fristNumber %answer.secondNumber
        console.log(result)
      };
      

