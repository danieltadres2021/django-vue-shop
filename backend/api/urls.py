from django.urls import (
    path,
    include
)

from rest_framework.urlpatterns import format_suffix_patterns

from api import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),
    path('bands/', views.BandList.as_view()),
    path('band/<int:pk>/', views.BandDetail.as_view()),
    path('products/', views.ProductList.as_view()),
    path('product/<int:pk>', views.ProductDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]
