from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    ans = None

    if request.GET.get('add') == "":
        addition_values = {
            '1': {
                't1': {'1': 5000, '2': 10000, '3': 4000, '4': 10000, '5': 9000},
                't2': {'1': 4000, '2': 8000, '3': 3000, '4': 8000, '5': 7000},
                't3': {'1': 5000, '2': 10000, '3': 4000, '4': 10000, '5': 9000},
                't4': {'1': 5000, '2': 10000, '3': 5000, '4': 10000, '5': 9000}
            },
            '2': {
                't1': {'1': 10000, '2': 20000, '3': 4000, '4': 20000, '5': 9000},
                't2': {'1': 8000, '2': 16000, '3': 3000, '4': 16000, '5': 7000},
                't3': {'1': 10000, '2': 20000, '3': 4000, '4': 20000, '5': 9000},
                't4': {'1': 10000, '2': 20000, '3': 5000, '4': 10000, '5': 10000}
            }
        }

        ippp = request.GET.get('ippp')
        variant = request.GET.get('variant')
        ip_ooo = request.GET.get('ip-ooo')

        addition = addition_values.get(ippp, {}).get(variant, {}).get(ip_ooo, 0)

        num1 = int(request.GET.get('number1'))
        ans = num1 * 2000 + addition

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

def services(request):
    return render(request, 'shopapp/services.html')

def news(request):
    return render(request, 'shopapp/news.html')


def appget():
    return None


def students_detail():
    return None