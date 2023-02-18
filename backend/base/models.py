from django.db import models

from django.contrib.auth.models import User

from django.utils import timezone
import os
from uuid import uuid4
from datetime import date


def path_and_rename(instance, filename):
    upload_to=''
    ext=filename.split('.')[-1]
    filename ='{}.{}'.format("IMG"+date.today().strftime("%d%m%Y")+uuid4().hex, ext)

    return os.path.join(upload_to, filename)



# Create your models here.


class Post (models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    profilePic = models.ImageField(null=True, blank=True, upload_to=path_and_rename, max_length=1000)
    desc = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to=path_and_rename, max_length=1000)
    likes = models.ImageField(default=0)

    def __str__(self):
        return self.name
    
class Story (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE,null=True, blank=True)
    desc = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.user)


class PostComment (models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # name = models.ForeignKey(User, default=User.first_name, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    commnet_text = models.TextField(null=True, blank=True)
    commented_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.comment)