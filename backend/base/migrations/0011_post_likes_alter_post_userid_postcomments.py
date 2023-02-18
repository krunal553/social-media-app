# Generated by Django 4.1.6 on 2023-02-17 06:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0010_story_post_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='likes',
            field=models.ImageField(default=0, upload_to=''),
        ),
        migrations.AlterField(
            model_name='post',
            name='userId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='PostComments',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('comment', models.TextField(blank=True, null=True)),
                ('commented_on', models.DateTimeField(auto_now_add=True)),
                ('post_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.post')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
