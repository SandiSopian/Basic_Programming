from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = {
        'title':'About',
        'heading':'About',
        'subheading':'tentang kelas terbuka',
    }

    return render(request,'about/index.html',context)


