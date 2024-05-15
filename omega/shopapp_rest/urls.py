from django.urls import path
from . import views

urlpatterns = [
    path('calculate/', views.Calculate.as_view())
]
