from django.contrib.auth.models import User, Group
from django.db import models

# Create your models here.
class ClientSurvey(models.Model):
    user = models.ForeignKey(User, related_name="user_name",on_delete=models.CASCADE)
    name = models.CharField(max_length=100,)
    description = models.TextField(max_length=3000,null=True,blank=True)

class SurveyDesingForm(models.Model):
    survey = models.ForeignKey(ClientSurvey, related_name="survey_name",on_delete=models.CASCADE)
    lebel_data = models.CharField(max_length=100,null=True,blank=True)
    value = models.CharField(max_length=100,null=True,blank=True)
