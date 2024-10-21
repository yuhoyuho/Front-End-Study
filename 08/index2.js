let sum = 0;
for (i = 1 ; i < 101 ; i ++) {
    sum += i;
}
console.log(sum);

function multiply (x, y) {
    return x * y;
}

x = multiply(2, 3);
console.log(x);

console.log('---------------');
const y = function() {
    for (i = 1 ; i < 10 ; i ++) {
        console.log(3 * i);
    }
}
y();