const date1 = new Date (2022, 11, 25); // 2022 12 25
console.log(date1);
const date2 = new Date (2022, 11, 25, 18, 30, 50); // 2022 12 25 18:30:50
console.log(date2);

const date = new Date(2022, 11, 25, 18, 30, 50);
const dateFormat = `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
console.log(dateFormat)