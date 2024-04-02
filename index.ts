import inquirer from "inquirer"

let answer=await inquirer.prompt([
    {
        name:"userId",
        type:"input",
        message:"Enter your Id"
    },

    {
        name:"userpin",
        type:"number",
        message:"Enter your pin code "
    },

    {
        name:"accounttype",
        type:"list",
        message:"Select your transactionn ",
        choices:["current", "saving"]
    },
    {
        name:"transactiontype",
        type:"list",
        message:"Select your transactionn ",
        choices:["withdraw amount", "fast cash"],
        when(answer){
            return answer.accounttype
        }
    },
    {
        name:"amount",
        type:"list",
        message:"Select your amount",
        choices:["1000", "2000", "3000", "4000", "5000"],
        when(answer){
            return answer.transactiontype=="fast cash"
        }
    },
     {   
        name:"amount",
        type:"number",
        message:"Select your amount",
        when(answer: { transactiontype: any }){
            return answer.transactiontype=="withdraw amount"
        }
    }
])

if(answer.userId && answer.userpin){
    let balance=20000;
    console.log("previous balance", balance);
    let enteredamount=answer.amount;
    if(balance>=enteredamount){
        let remaining=balance-enteredamount;
        console.log("your remaining balance is", remaining);

    }
    else{
        console.log("insufficient balance")
    }


}