# Generated by Django 2.0.1 on 2018-02-05 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0007_auto_20180205_1051'),
    ]

    operations = [
        migrations.AddField(
            model_name='surveydesingform',
            name='level_x',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='surveydesingform',
            name='level_y',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='surveydesingform',
            name='value_x',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='surveydesingform',
            name='value_y',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
