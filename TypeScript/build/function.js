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
// default parameter
// jika kita tidak memasukan parameter sesuai type maka hasilnya akan mengeluarkan paramater default, tapi jika memasukan parameter yang berbeda maka parameter default akan diganti
const fullName = (firstName, lastName = "Uchiha") => {
    return firstName + " " + lastName;
};
console.log(fullName("Sasuke"));
console.log(fullName("Naruto", "Uzimaki"));
// optional parameter
// optional parameter pada umumnya berlaku jika return dari function tersebut hanya berupa string dan any tapi khusus untuk number dan boolean hasil compilenya ada tapi untuk eksekusi typescript nya error.
const idNumber = (id1, id2) => {
    return id1 + id2;
};
console.log(idNumber("20112", "0090"));
