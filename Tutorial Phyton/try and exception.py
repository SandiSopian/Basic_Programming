print("ini adalah program pembagian")

while True:
    try:
        penyebut = int(input("masukan angka penyebut: "))
        pembilang = int(input("masukan angka pembilang: "))
        hasil = penyebut/pembilang
        break
    except ValueError:
        print("yang anda masukan bukan angka\n")
    except ZeroDivisionError:
        print("angka pembilang yang anda masukan adalah nol, pilih yang lain ya\n")
    except ImportError:
        print("gak ada modulenya")
    except Exception as err:
        print(err)

    """
        type of exception errors:
        1. IOError
        2. ImportError
        3. Value Error
        4. Devision by zero
        5. KeyboardInterupted
        6. EOFError

    """
    
print("berhasil, hasil pembagian adalah:", hasil)