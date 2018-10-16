from django.shortcuts import render
from django.http import HttpResponse

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

