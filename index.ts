import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    transactionType: string,
    accountType: string,
    amount: number
}

const answers : ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your user ID: ",
    },
    {
        type: "input",
        name: "userPin",
        message: "Enter your PIN: ",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["saving", "current"],
        message: "Select your account type: ",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction type: ",
        when(answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType = "Fast Cash"
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType = "Withdraw"
        },
    }
]) 

if(answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000000);
    console.log(balance)
    const EnteredAmount = answers.amount;
    if(balance >=  EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is : ", remaining)
    } else {
        console.log("Insufficient balance")
    }
}