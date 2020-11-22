from django.db import models

# Create your models here.

class Category(models.Model):
    categoryId  = models.IntegerField(primary_key=True)
    title       = models.CharField(max_length=30)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['categoryId']
