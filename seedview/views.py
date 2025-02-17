# seedview/views.py
from django.shortcuts import render
from userprofile.models import UserProfile

def home(request):
    # Get the UserProfile object associated with the currently logged-in user
    user_profile = UserProfile.objects.get(user=request.user) if request.user.is_authenticated else None

    return render(request, 'seedview/index.html', {
        'user': request.user,         # Pass the user object
        'user_profile': user_profile  # Pass the UserProfile object (if authenticated)
    })

