# Generated by Django 5.1 on 2024-09-08 18:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_sitesetting_about_me_footer_sitesetting_working_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sitesetting',
            name='working_img',
        ),
    ]
