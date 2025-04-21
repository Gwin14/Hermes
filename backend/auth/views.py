# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User


class RegisterView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        if username and password:
            user = User.objects.create_user(username=username, password=password)
            return Response(
                {"msg": "Usuário criado com sucesso"}, status=status.HTTP_201_CREATED
            )
        return Response(
            {"error": "Dados inválidos"}, status=status.HTTP_400_BAD_REQUEST
        )
