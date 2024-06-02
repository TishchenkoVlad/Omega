from django.urls import path
from . import views

urlpatterns = [
    path('calculate/', views.Calculate.as_view()),
    path('new/', views.NewAPIView.as_view()),
    path('new/search/', views.SearchNew.as_view()),
    path('services/search/', views.SearchSer.as_view()),
    path('services/', views.SerAPIView.as_view()),
    path('feedback/', views.FedAPIView.as_view())
]
