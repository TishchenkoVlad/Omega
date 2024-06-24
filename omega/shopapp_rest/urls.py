from django.urls import path
from . import views

urlpatterns = [
    path('calculate/', views.calculate),
    path('new/', views.new),
    path('new/search/', views.SearchNew.as_view()),
    path('services/search/', views.SearchSer.as_view()),
    path('services/', views.Ser),
    path('infohome/', views.Infohome),
    path('feedback/', views.Fed),
    path('send-email/', views.SendEmail, name='send_email'),
]
