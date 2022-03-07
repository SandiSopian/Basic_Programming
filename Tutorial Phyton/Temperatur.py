print("\nPROGRAM KONVERSI TEMPERATUT\n")

celcius = float(input('Masukan suhu dalam celcius : '))
print("suhu adalah",celcius, "Celcius")

#reamur 
reamur = (4/5) * celcius
print("suhu dalam reamur adalah",reamur, "Reamur")

#fahrenheit
fahrenheit = ((9/5) * celcius) + 32
print("suhu dalah fahrenheit adalah",fahrenheit, "Fahrenheit")

#kelvin 
kelvin = celcius + 273
print("suhu dalam kelvin adalah",kelvin, "Kelvin")

print("====================================")
# dari temperatur reamur ke temperatur lain
reamur = float(input('Masukan suhu dalam reamur : '))
print("suhu adalah",reamur, "Reamur")

#celcius
celcius = (5/4) * reamur
print("suhu dalam reamur adalah",reamur, "Reamur")

#fahrenheit
fahrenheit = ((9/4) * reamur) + 32
print("suhu dalah fahrenheit adalah",fahrenheit, "Fahrenheit")

#kelvin 
kelvin = ((5/4) * reamur) + 273
print("suhu dalam kelvin adalah",kelvin, "Kelvin")

print("====================================")
#dari temperatur fahrenheit ke temperatur lain
fahrenheit = float(input('Masukan suhu dalam fahrenheit : '))
print("suhu adalah",fahrenheit, "fahrenheit")

#celcius
celcius = 5/9 * (fahrenheit - 32)
print("suhu dalam celcius adalah",celcius, "Celcius")

#reamur
reamur = 4/9 * (fahrenheit - 32)
print("suhu dalam reamur adalah",reamur, "Reamur")

#kelvin 
kelvin = celcius + 273
print("suhu dalam kelvin adalah",kelvin, "Kelvin")

print("====================================")
#dari temperatur kelvin ke temperatur lain
kelvin = float(input('Masukan suhu  dalam kelvin : '))
print("suhu adalah",kelvin, "kelvin")

#celcius
celcius = kelvin - 273
print("suhu dalam celcius adalah",celcius, "Celcius")

#reamur
reamur = 4/5 * (kelvin - 273)
print("suhu dalah reamur adalah",reamur, "Reamur")

#fahrenheit
fahrenheit = (9/5) * celcius + 32
print("suhu dalam fahrenheit adalah",fahrenheit, "Fahrenheit")

print("====================================")