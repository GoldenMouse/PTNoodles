import os

from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.conf import settings
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.template.loader import render_to_string

from .forms import ContactForm

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
    
    page = request.GET.get('page', 1)

    paginator = Paginator(images, 20)
    
    try:
        images_per_page = paginator.page(page)
    except PageNotAnInteger:
        images_per_page = paginator.page(1)
    except EmptyPage:
        images_per_page = paginator.page(paginator.num_pages)

    
    context = { 'images': images_per_page }
    
    return render(request, "gallery.html", context) 


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = 'PTNoodles Contact-Us Inquiry'
            sender = 'webadmin@ptnoodles.com' 
            recipients = ['customerservice@ptnoodles.com',]
            
            msg_params = {
                'firstName': form.cleaned_data['firstName'],
                'lastName': form.cleaned_data['lastName'],
                'email': form.cleaned_data['email'], 
                'phone': form.cleaned_data['phone'],
                'message': form.cleaned_data['message']
            }
            
            message = 'no html',
            html_message =  render_to_string('email/contactus.html', msg_params)
        
            send_mail(
                subject, 
                html_message,
                sender,
                recipients,
                html_message=html_message,
                fail_silently=False,
            )
            return redirect("contact-submitted")

    # 
    else:
        form = ContactForm(label_suffix="")

    context = {
        'form': form
    }
    return render(request, "contact.html", context)