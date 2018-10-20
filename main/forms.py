from django import forms

class ContactForm(forms.Form):
    firstName = forms.CharField(
        label='First Name', 
        max_length=100,
        widget=forms.TextInput(attrs={
        })
    )
    lastName = forms.CharField(
        label='Last Name', 
        max_length=100,
        widget=forms.TextInput(attrs={
        })
    )
    email = forms.EmailField(
        label='Email Address',
        widget=forms.TextInput(attrs={
        })
    )
    phone = forms.CharField(
        label='Phone Number', 
        max_length=20, 
        required=False,
        widget=forms.TextInput(attrs={
        })
    )
    message =  forms.CharField(
        label='Message', 
        widget=forms.Textarea(attrs={
        })
    )
    cc_myself = forms.BooleanField(
        label='Email yourself a copy', 
        required=False
    )