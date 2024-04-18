//Prompt the user to entire their full name. Generate the username for them based on the input Start username with @, followed by thir full name and ending with the fullname size

let fname = prompt("Enter Your First Name ");
let sname = prompt("Enter Your Last Name ");
let fullname = fname.concat(sname)
let n = "@"+fullname+fullname.length;
console.log(`Your username is : ${n}`);





