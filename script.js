//15%
//if 50 - 300 then 20%
const bill = 40;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
