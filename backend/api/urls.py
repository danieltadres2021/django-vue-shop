from django.urls import path
from api import views

urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:pk>', views.category_detail),
]
