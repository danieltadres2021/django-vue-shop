from django.db import models

# Create your models here.

class Category(models.Model):
    categoryId  = models.IntegerField(primary_key=True)
    title       = models.CharField(max_length=30)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['categoryId']

class Band(models.Model):
    bandId      = models.IntegerField(primary_key=True)
    title       = models.CharField(max_length=30)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['bandId']

class Product(models.Model):
    productId   = models.IntegerField(primary_key=True)
    title       = models.CharField(max_length=30)
    price       = models.IntegerField()
    description = models.CharField(max_length=60)
    imageUrl    = models.CharField(max_length=300)
    category    = models.ForeignKey(Category, on_delete=models.CASCADE)
    band        = models.ForeignKey(Band, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['productId']
