// generic
// sebuah type yang akan di tentukan berdasarkan value pertama yang diinisiasikan maka akan menghidari terjadinya error return value pada saat compile, karena sudah di berika notifikasi error sebelumnya
// standarnya untuk type data generic menggunakan variable <T> tapi untuk huruf didalamnya <> boleh menggunakan selain T
function myData<T>(value: T) {
  return value;
}

console.log(myData("namamu").length);
console.log(myData(457).toLocaleString());
// console.log(myData(545).length); <<< Ttidak bisa menggunakan type selain string untuk length

// penulisan generic type pada arrow function
const arrowFunction = <T>(value: T) => {};

// penulisan generic type pada arrow function didalam JSX
const arrowFunction1 = <T extends unknown>(value: T) => {};
