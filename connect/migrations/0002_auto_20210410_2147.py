# Generated by Django 3.1.7 on 2021-04-10 21:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='share',
            options={'ordering': ['-id']},
        ),
    ]
