from django import forms

from .models import ClientSurvey

class ClientSurveyForm(forms.ModelForm):

    class Meta:
        model = ClientSurvey
        fields = "__all__"