import tkinter
from tkinter import *

main_window = tkinter.Tk()

def event_tekan():
    label2 = tkinter.Label(main_window, text="aku ditekan XD")
    label2.pack()

label = tkinter.Label(main_window, text="hallo, saya adalah \n GUI sederhana dengan \n menggunakan python")
tombol = tkinter.Button(main_window, text="tekan aku", command= event_tekan)

label.pack()
tombol.pack()
main_window.mainloop()