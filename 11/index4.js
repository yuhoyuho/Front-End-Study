const date1 = new Date('2022-12-23').getTime();
const date2 = new Date('2022-12-25').getTime();

const diff = date2 - date1;
const interval = diff /(24 * 60 * 60 * 1000);
console.log(`Datediff is ${interval}.`);