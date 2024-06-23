from django.urls import path
from . import views
from .views import SendEmailView



urlpatterns = [
    path('calculate/', views.calculate),
    path('new/', views.new),
    path('new/search/', views.SearchNew.as_view()),
    path('services/search/', views.SearchSer.as_view()),
    path('services/', views.Ser),
    path('infohome/', views.Infohome),
    path('application/', views.appget),
    path('feedback/', views.Fed),
    path('send-email/', SendEmailView.as_view(), name='send_email'),
]
