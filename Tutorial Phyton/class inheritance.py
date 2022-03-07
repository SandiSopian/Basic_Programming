class Ojek():

    def __init__(self, nama, transmisi, daerah) -> None:
        self.nama = nama
        self.transmisi = transmisi
        self.daerah = daerah

    def cek_id_abang(self):
        print('nama:',self.nama,'\nmotor:',self.transmisi,'\ndaerah:',self.daerah)

class Gojek(Ojek): # inheritance/pewarisan dari class Ojek

    def cek_id_abang(self): # override/ditimpah def di atas
        print('cek aplikasi gojek')

ojek1 = Ojek('mario','manual','bandung selatan')
ojek2 = Gojek('jackk','otomatis','bandung barat')

ojek1.cek_id_abang()
ojek2.cek_id_abang()

