import json
from smtplib import SMTP_SSL

from django.forms import model_to_dict
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import New, Services, Feedback, infohome, DateEmail
from .serializers import NewSerializer, SerSerializer, EvSerializer, InfohomeSerializer, AppemSerializer, \
    EmailSerializer
from rest_framework import filters
from django.core.mail import send_mail
from django.conf import settings




@api_view(['POST'])
def calculate(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        if int(body_data.get('number1')) == 0:
            return Response({
                "success": False,
                "data": 0,
                "message": "Кол-во сотрудников не может быть 0"
            })

        ans = None

        if body_data.get('add') == "":
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

            ippp = body_data.get('ippp')
            variant = body_data.get('variant')
            ip_ooo = body_data.get('ip-ooo')

            addition = addition_values.get(ippp, {}).get(variant, {}).get(ip_ooo, 0)

            num1 = int(body_data.get('number1'))
            ans = num1 * 2000 + addition

        return Response({
            "success": True,
            "data": ans
        })




@api_view(['GET', 'POST'])
def new(request):
    if request.method == 'GET':
        new = New.objects.all()
        return Response({"posts": NewSerializer(new, many=True).data})

    elif request.method == 'POST':
        serializer = NewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"post": serializer.data})



@api_view(['GET', 'POST'])
def Ser(request):
    if request.method == 'GET':
        ser = Services.objects.all()
        return Response({"posts": SerSerializer(ser, many=True).data})

    elif request.method == 'POST':
        serializer = SerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"post": serializer.data})


class SearchNew(generics.ListAPIView):

    queryset = New.objects.all()
    serializer_class = NewSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title',]


class SearchSer(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class = SerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', ]



@api_view(['GET', 'POST'])
def Fed(request):
    if request.method == 'GET':
        new = Feedback.objects.all()
        return Response({"posts": EvSerializer(new, many=True).data})

    elif request.method == 'POST':
        serializer = EvSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()


@api_view(['GET', 'POST'])
def Infohome(request):
    if request.method == 'GET':
        new = infohome.objects.all()
        return Response({"posts": InfohomeSerializer(new, many=True).data})

    elif request.method == 'POST':
        serializer = InfohomeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"post": serializer.data})


@api_view(['GET', 'POST'])
def appget(request):
    if request.method == 'GET':
        new = DateEmail.objects.all()
        return Response({"posts": AppemSerializer(new, many=True).data})

    elif request.method == 'POST':
        serializer = AppemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"post": serializer.data})




#def send_custom_email(subject, message, recipient_list):
#    email_from = settings.EMAIL_HOST_USER
#    send_mail(subject, message, email_from, recipient_list)




class SendEmailView(APIView):
    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            receiver_email = "omegac3ntr@yandex.ru"
            email = serializer.validated_data['email']
            number = serializer.validated_data['number']


            smtp_server = 'smtp.yandex.ru'
            sender_email = 'omegac3ntr@yandex.ru'
            password = 'hkfpxzpfxrowcbhs'

            try:
                with SMTP_SSL(smtp_server, 465) as server:
                    server.login(sender_email, password)
                    server.sendmail(sender_email, receiver_email, f'Subject: {email}\n\n{number}')
                return Response({'message': 'Email sent successfully'})
            except Exception as e:
                return Response({'error': str(e)}, status=400)
        else:
            return Response(serializer.errors, status=400)
