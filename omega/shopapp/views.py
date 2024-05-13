from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    ans = None
    if request.GET.get('number1') and request.GET.get('number2'):
        num1 = int(request.GET.get('number1'))
        num2 = int(request.GET.get('number2'))
    if request.GET.get('add') == "":
        ans = num1 + num2
    return render(request, 'shopapp/home.html', {'ans': ans})


#def result(request):
#    num1 = int(request.GET.get('number1'))
#    num2 = int(request.GET.get('number2'))
#    if request.GET.get('add') == "":
#        ans = num1 + num2
#    return render(request, 'shopapp/result.html', {'ans': ans})

def about(request):
    return render(request, 'shopapp/about.html')

def prices(request):
    return render(request, 'shopapp/Prices.html')