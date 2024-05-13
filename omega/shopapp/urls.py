from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    #path('result/', views.result, name='result'),
    path('about', views.about, name='about'),
    path('prices', views.prices, name='prices'),
    path('services', views.services, name='services'),
    path('news', views.news, name='news')

]
