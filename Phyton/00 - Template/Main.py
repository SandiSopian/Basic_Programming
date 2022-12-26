print("operator logika untuk list dan string")
print(" ")

gorengan = ["bakwan","cireng","gehu","pisang goreng","risoles"]
beli = "pukis"

if beli in gorengan: 
    print('Mamang bilang, " ya saya jual', beli,'"')

if not beli in gorengan:
    print('saya gak jual',beli,'')

karakter = "r"
if  karakter in beli:
    print("ada", karakter, "di", beli)
else:
    print("tidak ada", karakter, "di", beli)