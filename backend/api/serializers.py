from rest_framework import serializers

from api.models import (
    Category,
    Band,
    Product
)

from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username'
        ]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'categoryId',
            'title'
        ]

class BandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Band
        fields = [
            'bandId',
            'title'
        ]

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'productId',
            'title',
            'price',
            'description',
            'imageUrl',
            'category',
            'band'
        ]
