import json

from rest_framework.response import Response
from rest_framework.views import APIView


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