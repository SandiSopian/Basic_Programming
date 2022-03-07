from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = {
        'judul':'About',
        'subjudul':'tentang website',
        'banner':'about/img/banner_about.png',
        'app_css':'about/css/styles.css',
    }
    return render(request,'index.html',context)

def recent(request):
    return HttpResponse('<h> ini adalah recent post </h>')

