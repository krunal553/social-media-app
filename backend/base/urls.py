from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("posts/", views.getPosts, name="posts"),
    path("posts/<str:pk>/", views.getPost, name="post"),
    path("stories/", views.getStories, name="stories"),
    path("postcomments/<pid>", views.getPostComment, name="comment"),
] 