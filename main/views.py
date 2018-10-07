from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def play(request):
    return render(request, "play.html", {})
    
def index(request):
    return render(request, "index.html", {})
    
def menus(request, location):
    if location == 'avondale':
        return render(request, "menus-main.html", {})
    elif location == 'surprise':
        return render(request, "index.html", {})
    elif location == 'goodyear':
        return render(request, "index.html", {})
    elif location == 'camelback':
        return render(request, "index.html", {})
    else:
        return HttpResponse("Location not found.", status=404)

