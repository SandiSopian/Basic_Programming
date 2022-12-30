"use strict";
// generic class membuat type data yang akan di input menjadi dinamis, penggunan class ini bisa di tentukan di saat pemanggilan
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// let numbers = new List<number>(1,2,3)
// numbers.add(4);
// number.addMultiple(5,6,7);
// console.log(numbers.getAll());
let random = new List(1, "a", "b", "c", "d", "e", "f");
random.add("gglk");
random.add(7787);
random.addMultiple(115, "jjkl");
console.log(random.getAll());
