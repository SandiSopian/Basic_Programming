"use strict";
//  pengembalian nilai dari function secara spesifik
// return "string"
function getName() {
    return "hello world!";
}
console.log(getName());
// return "number"
function getAge() {
    return 1234;
}
console.log(getAge());
// void
// jika function berupa void maka tidak boleh ada return value, tapi hanya berupa function saja
function printBiodata() {
    console.log("print biodata");
}
printBiodata();
// ======================================
// Type data pada argument
// argument dan hasil harus ditentukan agar jelas nilai yang dimasukan dan hasil yang dikeluarkan, berbeda dengan javascript function pada umumnya
function multiply(a, b) {
    return a * b;
}
const result = multiply(35, 35);
console.log(result);
const Add = (a, b) => {
    return a + b;
};
