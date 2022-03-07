# class
class mahasiswa():
    
    def __init__(self, input_nama, input_nim):
        self.nama = input_nama
        self.nim = input_nim

    def belajar(self, kondisi):
        print(self.nama,'sedang belajar', kondisi)

    def tidur(self):
        print(self.nama,'tidur dikelas')

# main program
otong = mahasiswa("otong surotong", 13345564)

print(otong.nama, otong.nim)
otong.nama = "atang suratang"
print(otong.nama)
