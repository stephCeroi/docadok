# Generated by Django 3.0.5 on 2021-12-28 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sequence', '0009_auto_20211228_0837'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sequence',
            name='participants',
        ),
        migrations.AddField(
            model_name='sequence',
            name='qrcode',
            field=models.CharField(blank=True, default='', editable=False, max_length=255, null=True),
        ),
    ]