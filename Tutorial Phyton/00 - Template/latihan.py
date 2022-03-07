hitung=0
sum=0
for i in range(100):
    bil = i+1
    if bil%3==0 and bil%5==0:
        hitung = hitung + 1
        sum = sum + bil
        print(bil)

print('Banyak bilangan : ' + str(hitung))
print('Jumlahan bilangan : ' + str(sum))