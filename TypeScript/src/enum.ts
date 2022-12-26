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
enum Month {
  Jan = "Januari",
  Feb = "Februari",
  Mar = "Maret",
  Apr = "April",
  May = "Mei",
}
console.log(Month.Apr);
