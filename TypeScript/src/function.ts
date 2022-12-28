//  pengembalian nilai dari function secara spesifik

// return "string"
function getName(): string {
  return "hello world!";
}
console.log(getName());

// return "number"
function getAge(): number {
  return 1234;
}
console.log(getAge());

// void
// jika function berupa void maka tidak boleh ada return value, tapi hanya berupa function saja
function printBiodata(): void {
  console.log("print biodata");
}
printBiodata();

// ======================================

// Type data pada argument
// argument dan hasil harus ditentukan agar jelas nilai yang dimasukan dan hasil yang dikeluarkan, berbeda dengan javascript function pada umumnya
function multiply(a: number, b: number): number {
  return a * b;
}
const result = multiply(35, 35);
console.log(result);

// function as type
// menentukan dulu type yang akan digunakan diawal yang kemudian dipakai sebagai function agar terjadi kesamaan aturan type dan function yang digunakan
type Tambah = (a: number, b: number) => number;
const Add: Tambah = (a: number, b: number): number => {
  return a + b;
};

// default parameter
// jika kita tidak memasukan parameter sesuai type maka hasilnya akan mengeluarkan paramater default, tapi jika memasukan parameter yang berbeda maka parameter default akan diganti
const fullName = (firstName: string, lastName: string = "Uchiha"): string => {
  return firstName + " " + lastName;
};
console.log(fullName("Sasuke"));
console.log(fullName("Naruto", "Uzimaki"));

// optional parameter
// optional parameter pada umumnya berlaku jika return dari function tersebut hanya berupa string dan any tapi khusus untuk number dan boolean hasil compilenya ada tapi untuk eksekusi typescript nya error.
const idNumber = (id1: string, id2?: string): string => {
  return id1 + id2;
};
console.log(idNumber("20112", "0090"));
