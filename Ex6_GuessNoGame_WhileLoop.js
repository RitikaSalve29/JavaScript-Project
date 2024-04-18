let GameNum = 1;
let UserNum = prompt("guess the one digit number  : ");

while(GameNum != UserNum)
{
    UserNum = prompt("You guess wrong number, guess right number  : ");
}

console.log(`Congratulations !!! You Guess correct number, the number is :" ${GameNum} "`);