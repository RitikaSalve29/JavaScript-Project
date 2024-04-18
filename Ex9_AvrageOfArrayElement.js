// For a given array with marks of student -> [85,97,44,37,76,60] find the average marks of entire class

// avrage formula = sum of all value / total number of elements

let marksArray = [85,97,44,37,76,60];
let sum = 0;
//let i = 0;

for(let i = 0; i<marksArray.length;i++) 
{
     sum= sum + marksArray[i]
 
     
}

console.log("Total sum of array elements is :",sum);
console.log("average of array elements is :", sum/marksArray.length)

