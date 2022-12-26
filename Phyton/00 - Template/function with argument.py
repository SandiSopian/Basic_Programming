# fungsi dengan menggunakan argumen sederhana
def siswa(nama):
    print('siswa ini bernama:',nama)

siswa('eleina')

# fungsi dengan menggunakan keyword arguments

def guru(nama, pelajaran):
    print('guru ini bernamaL:',nama)
    print('mengajar:',pelajaran)

guru(nama='lili',pelajaran='bahasa inggris')
guru(pelajaran='olah raga',nama='tony')

# fungsi dengan menggunakan default arguments

def penjagaSekolah(nama,shift='siang',galak='tidak'):
    print('penjaga sekolah ini bernama:', nama)
    print('shiftnya:', shift)
    print('sifatnya:', galak)

penjagaSekolah('entis')
penjagaSekolah('maman',shift='malam')
penjagaSekolah('asep',galak='sangat galak')