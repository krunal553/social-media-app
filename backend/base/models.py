from django.db import models

from django.contrib.auth.models import User

from django.utils import timezone
import os
from uuid import uuid4


def path_and_rename(instance, filename):
    upload_to=''
    # ext=filename.split('.')[-1]
    # if instance.pk:
    #     filename='{}.{}'.format(instance.pk, ext)
    # else:
    # filename =filename.split('.')[0]+'{}.{}'.format(uuid4().hex, ext)

    return os.path.join(upload_to, filename)



# Create your models here.


class Post (models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    userId = models.CharField(max_length=10)
    profilePic = models.ImageField(null=True, blank=True, upload_to=path_and_rename, max_length=1000)
    desc = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to=path_and_rename, max_length=1000)

    def __str__(self):
        return self.name
    