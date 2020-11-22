# NOT FUNCTION BASED ON VIEWS
# INSTEAD, WE USE CLASS-BASED VIEWS

from django.shortcuts import render

# Create your views here.

from api.models import Category
from api.serializers import CategorySerializer
from rest_framework import generics


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
