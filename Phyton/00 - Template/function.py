# membuat fungsi sederhana

def suara_ayam():
    print('kukuruyuk!!!')

def harga_ayam():
    suara_ayam()
    print('harga persatu kilogram adalah Rp.20.000')

# membuat fungsu dengan input argumen
def hargatotalayam(kg):
    suara_ayam()
    harga = 20000
    hargaTotal = kg*harga
    print('harga',kg,'kg ayam adalah',hargaTotal)

harga_ayam()
hargatotalayam(3)