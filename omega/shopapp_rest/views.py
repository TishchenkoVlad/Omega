import json

from django.forms import model_to_dict
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import New, Services
from .serializers import NewSerializer, SerSerializer


class Calculate(APIView):
    def post(self, request):
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

#class NewAPIView(generics.ListAPIView):
#    queryset = New.objects.all()
#    serializer_class = NewSerializer

class NewAPIView(APIView):
    def get(self, request):
        new = New.objects.all()
        return Response({"posts": NewSerializer(new, many=True).data})

    def post(self, request):
        serializer = NewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        #post_new = New.objects.create(
        #    title=request.data['title'],
        #    content=request.data['content']
        #)
        return Response({"post": serializer.data})

    # def put(self, request, *args, **kwargs):
    #     pk = kwargs.get("pk", None)
    #     if not pk:
    #         return Response({"error": "Method PUT not allowed"})
    #
    #     try:
    #         instance = New.objects.get(pk=pk)
    #     except:
    #         return Response({"error": "Objects does not exists"})
    #
    #     serializer = NewSerializer(data=request.data, instance=instance)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response({"post": serializer.data})


class SerAPIView(APIView):
    def get(self, request):
        ser = Services.objects.all()
        return Response({"posts": SerSerializer(ser, many=True).data})

    def post(self, request):
        serializer = SerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"post": serializer.data})