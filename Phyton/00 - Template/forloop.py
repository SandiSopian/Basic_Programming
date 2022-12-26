#list sebagai iterable
# gorengan = ['bakwan','cireng','gehu','tempe','combro']

# for g in gorengan:
#     print(g)
#     print(len(g))

#     #string sebagai iterable
# bakwan = 'bakwan'

# for i in bakwan:
#     print(i)

# for di dalam for
gorengan = ['bakwan','gehu','tempe','combro']
sayuran = ['kol','wortel','kangkung','tomat']
buah = ['apel','jeruk','semangka','melon','pisang']

daftar_belanja = [gorengan,sayuran,buah]

for subDaftarBelanja in daftar_belanja:
    print(subDaftarBelanja)
    for komponen in subDaftarBelanja:
        print(komponen)