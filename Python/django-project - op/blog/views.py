from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    context = {
        'judul':'website saya',
        'kontributor':'sandi s',
        'subjudul':'Blog',
        'banner':'blog/img/banner_blog.png',
        'app_css':'blog/css/styles.css',
        'nav': [
            ['/','Home'],
            ['/blog/cerita','Cerita'],
            ['/blog/news','News'],
        ]
    }
    return render(request,'index.html', context)

def cerita(request):
    context = {
        'judul':'cerita apa hari ini',
        'kontributor':'sandi s',
    }
    return render(request,'blog/index.html', context)

def news(request):
    context = {
        'judul':'berita terbaru',
        'kontributor':'sandi s',
    }
    return render(request,'blog/index.html', context)

def recent(request):
    return HttpResponse('<h> ini adalah recent post </h>')