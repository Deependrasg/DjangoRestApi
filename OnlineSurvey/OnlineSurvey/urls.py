from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from survey.views import Signup, Login, Logout
from rest_framework.routers import DefaultRouter
urlpatterns = [
   url(r'^admin/', admin.site.urls),
   url(r'^user/', include('survey.urls', namespace='user')),  
   url(r'^$', TemplateView.as_view(template_name="pets/login.html")),
   url(r'^signup/$', TemplateView.as_view(template_name="pets/signup.html")),
   url(r'^dashboard/$', TemplateView.as_view(template_name="pets/dashboard.html")),
   url(r'^show-list/$', TemplateView.as_view(template_name="pets/ShowSurvey.html")),
   url(r'^survey/(?P<survey_id>[0-9]+)/$',TemplateView.as_view(template_name="pets/Design.html")),
   
]