from django.shortcuts import render

# method view
def index(request):
    context = {
        'judul':'website saya',
        'kontributor':'sandi s',
        'subjudul':'selamat datand di',
        'banner':'img/banner_home.png',
        'nav': [
            ['/','Home'],
            ['/blog','Blog'],
            ['/about','About'],
            ['/contact','Contact']
        ]
    }
    return render(request,'index.html', context)
