// SelfCheck1
const area = x => {
    return x * x * (3.14);
};
console.log(area(3));
console.log('-----------------');

// SelfCheck2
const returnMax = function(x) {
    let maxV = 0;
    for(i = 0; i < x.length; i++) {
        if (maxV < x[i]) {
            maxV = x[i];
        }
    }
    return maxV
}
const x = returnMax([10, 5, 5, 7, 225, 9, 51, 193]);
console.log(x);

// SelfCheck3
const BMI = function (x, y) {
    result = y / ((x / 100)**2);
    let BMIResult;

    if (result >= 26) {
        BMIResult = "비만";
    } else if (result >=24 && result <= 25.9) {
        BMIResult = "과체중";
    } else if (result >= 18.5 && result <=23.9) {
        BMIResult = "정상";
    } else {
        BMIResult = "저체중";
    }
    return BMIResult;
}

console.log(BMI(190,85))