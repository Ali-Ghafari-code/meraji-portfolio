from django.urls import path
from . import views


urlpatterns = [
    path('', views.home_view, name='home_page'),
    path('about', views.about_meَ, name='about_me'),
]
