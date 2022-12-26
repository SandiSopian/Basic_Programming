"use strict";
// enum
// numeric enums
// memberi no index berurut (increment) berdasarkan nilai sebelumnya
// enum Month {
//   Jan = 5,
//   Feb,
//   Mar,
//   Apr,
//   May,
// }
// console.log(Month);
// string enum
// memberi isi berdasarkan nilai sebelumnya
var Month;
(function (Month) {
    Month["Jan"] = "Januari";
    Month["Feb"] = "Februari";
    Month["Mar"] = "Maret";
    Month["Apr"] = "April";
    Month["May"] = "Mei";
})(Month || (Month = {}));
console.log(Month.Apr);
