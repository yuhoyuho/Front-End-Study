const gugudan = x => {
    for (i = 1; i < 10 ; i++) {
        console.log(`${x} * ${i} = ${x * i}`);
    }
}

gugudan(3); // arrow 함수를 이용한 구구단 출력

function getArrayMaxNumber(arr) {
    let result = 0;
    for ( i = 0; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i];
        }
    }
    return result;
}
const max = getArrayMaxNumber([10, 50, 70, 30, 100]);
console.log(max);

var text = "outside";
function printScope () {
    console.log(text);
    var text = "inside";
}
printScope();