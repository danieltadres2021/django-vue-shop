# NOT FUNCTION BASED ON VIEWS
# INSTEAD, WE USE CLASS-BASED VIEWS

from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import User

from api.models import Category

from api.serializers import (
    CategorySerializer,
    UserSerializer
)

from api.permissions import IsOwnerOrReadOnly

from rest_framework import (
    generics,
    permissions
)

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
