from django.shortcuts import render

# method view
def index(request):
    context = {
        'title':'kelas terbuka',
        'heading':'Selamat Datang',
        'subheading':'di kelas terbuka',
    }
    return render(request,'index.html', context)


