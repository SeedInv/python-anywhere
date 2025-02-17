# seedview/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # The root URL for this app will trigger the `home` view
]
