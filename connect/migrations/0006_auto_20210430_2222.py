# Generated by Django 3.1.4 on 2021-04-30 22:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0005_share_parent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='share',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='connect.share'),
        ),
    ]
