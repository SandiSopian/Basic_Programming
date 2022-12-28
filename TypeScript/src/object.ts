// Object

// Object pada typescript seluruh property nya di anggap satu kesatuan type, maka dari itu property pada object di typescript tidak boleh di tambah atau dikurangi

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Sandi",
  age: 30,
};
