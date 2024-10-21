const sentence = " I am a man. ";
console.log(sentence.split(" "));

const phoneNumber = "+82) 010-7565-7843";
console.log(phoneNumber.includes("010"));

if (phoneNumber.indexOf("010") === -1) {
    console.log("It is not phonenumber");
}
console.log(sentence)
console.log(sentence.trim())