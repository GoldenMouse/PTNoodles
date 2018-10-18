import os

from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

LOCATIONS = ['avondale', 'goodyear', 'surprise', 'phoenix']

# Create your views here.

def play(request):
    return render(request, "play.html", {})
    
def index(request):
    return render(request, "index.html", {})
    
def menus(request, location):
    context = { 'location': location }
    if location in LOCATIONS:
        return render(request, "menus-main.html", context)
    else:
        return HttpResponse("Location not found.", status=404)
        
        
def locations(request):
    return render(request, "locations.html", {})

def gallery(request):
    
    images_dir = os.path.join(settings.BASE_DIR, "main/static/img/gallery")
    images = os.listdir(images_dir)
    
    context = { 'images': images }
    
    return render(request, "gallery.html", context) 
