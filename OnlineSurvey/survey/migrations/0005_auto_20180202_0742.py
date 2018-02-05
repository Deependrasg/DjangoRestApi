# Generated by Django 2.0.1 on 2018-02-02 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0004_surveyform'),
    ]

    operations = [
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput1',
            new_name='input1',
        ),
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput2',
            new_name='input2',
        ),
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput3',
            new_name='input3',
        ),
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput4',
            new_name='input4',
        ),
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput5',
            new_name='input5',
        ),
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput6',
            new_name='input6',
        ),
        migrations.RenameField(
            model_name='surveyform',
            old_name='imput7',
            new_name='input7',
        ),
        migrations.AlterField(
            model_name='surveyform',
            name='survey',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='survey_name', to='survey.ClientSurvey'),
        ),
    ]