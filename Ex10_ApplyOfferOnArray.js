//for a given array with prices of 5 items -> [250,645,300,900,50] all items have offer of 10 % on them . change the array to store finel price after applying offer

let prices = [250,645,300,900,50];
let prices1 = [];

let i=0;
let offer =0

for(let val of prices)
{
    offer = val/10;
   prices1[i] = prices[i] - offer;
    console.log(`Without offer : ${prices[i] }=> with 10% offer ${prices1[i]}`)
    i++;

}


/* let prices = [250,645,300,900,50];


let i=0;
let offer =0

for(let val of prices)
{
    offer = val/10;
   prices[i] = prices[i] - offer;
    console.log(` with 10% offer ${prices[i]}`)
    i++;

}
 */
