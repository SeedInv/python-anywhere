from django import forms
from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth.forms import PasswordResetForm
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget



class UserRegistrationForm(forms.ModelForm):
    password1 = forms.CharField(
        widget=forms.PasswordInput, 
        label="Password", 
        required=True
    )
    password2 = forms.CharField(
        widget=forms.PasswordInput, 
        label="Confirm Password", 
        required=True
    )
    
    class Meta:
        model = User
        fields = ['username', 'email']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Ensure 'username' and 'email' fields are required
        self.fields['username'].required = True
        self.fields['email'].required = True

    def clean(self):
        cleaned_data = super().clean()
        password1 = cleaned_data.get("password1")
        password2 = cleaned_data.get("password2")

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords do not match.")
        return cleaned_data


class UserProfileForm(forms.ModelForm):
    phone_number = forms.CharField(
        max_length=15, 
        required=True, 
        label="Phone Number"
    )
    country = CountryField(
        blank_label='Select Country'
    ).formfield(
        required=True, 
        label="Country"
    )
    referral_bonus = forms.CharField(
        max_length=20, 
        required=True,  # Set as required
        label="Referral Code"
    )
    
    class Meta:
        model = UserProfile
        fields = ['phone_number', 'country', 'referral_bonus']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Ensure all fields are required
        for field_name in self.fields:
            self.fields[field_name].required = True


class UserLoginForm(forms.Form):
    username = forms.CharField(max_length=150, required=True, label="Username")
    password = forms.CharField(widget=forms.PasswordInput, required=True, label="Password")




class UserPasswordResetForm(PasswordResetForm):
    email = forms.EmailField(max_length=254, required=True, label="Email")





# class UserProfileEditForm(forms.ModelForm):
#     class Meta:
#         model = UserProfile
#         fields = ['first_name', 'last_name', 'govt_issued_id', 'trading_certificates']
#         widgets = {
#             'first_name': forms.TextInput(attrs={'placeholder': 'Enter your first name'}),
#             'last_name': forms.TextInput(attrs={'placeholder': 'Enter your last name'}),
#             'govt_issued_id': forms.ClearableFileInput(attrs={'multiple': False}),
#             'trading_certificates': forms.ClearableFileInput(attrs={'multiple': False}),
#         }


class UserProfileEditForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'govt_issued_id', 'trading_certificates', 'country', 'address']
        widgets = {
            'first_name': forms.TextInput(attrs={'placeholder': 'Enter your first name'}),
            'last_name': forms.TextInput(attrs={'placeholder': 'Enter your last name'}),
            'govt_issued_id': forms.ClearableFileInput(attrs={'multiple': False}),
            'trading_certificates': forms.ClearableFileInput(attrs={'multiple': False}),
            'country': CountrySelectWidget(attrs={'placeholder': 'Select your country'}),
            'address': forms.Textarea(attrs={'placeholder': 'Enter your address', 'rows': 3}),
        }
