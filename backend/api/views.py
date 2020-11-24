# NOT FUNCTION BASED ON VIEWS
# INSTEAD, WE USE CLASS-BASED VIEWS

from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import User

from api.models import (
    Category,
    Band,
    Product
)

from api.serializers import (
    UserSerializer,
    CategorySerializer,
    BandSerializer,
    ProductSerializer
)

from api.permissions import IsOwnerOrReadOnly

from rest_framework import (
    generics,
    permissions
)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly]

class BandList(generics.ListCreateAPIView):
    queryset = Band.objects.all()
    serializer_class = BandSerializer

class BandDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Band.objects.all()
    serializer_class = BandSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
