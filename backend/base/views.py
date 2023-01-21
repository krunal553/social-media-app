from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .posts import posts


# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        'api/posts/',
        'api/products/',
        'api/products/create/',

        'api/products/upload',

        'api/products/<id>/revies/',

        'api/products/top/',
        'api/products/<id>/',

        'api/products/delete/<id>/',
        'api/products/<update>/<id>/',
    ]

    return Response(routes)

@api_view(['GET'])
def getPosts(request):
    return Response(posts)