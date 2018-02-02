from survey.views import Signup, Login, Logout ,SurveyForm
from rest_framework.routers import DefaultRouter
from survey import views
from django.conf.urls import url

router = DefaultRouter()

app_name = 'survey'
router.register(r'signup', Signup, base_name='signup'),
router.register(r'login', Login, base_name='login'),
router.register(r'logout', Logout, base_name='logout'),
router.register(r'save-survey-form',SurveyForm,base_name='save_survey_form')
router.register(r'list',SurveyForm,base_name='list')



urlpatterns = router.urls