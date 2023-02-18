from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# from .tempData import *
from .models import *
from .serializers import *

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
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPost(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getStories(request):
    stories = Story.objects.all()
    serializer = StorySerializer(stories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getPostComment(request, pid):
    post_comments = PostComment.objects.filter(post_id=pid)
    serializer = PostCommentSerializer(post_comments, many=True)
    return Response(serializer.data)