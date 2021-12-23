# Generated by Django 3.0.5 on 2021-12-23 07:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
        ('sequence', '0002_ranking'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sequence',
            name='icon',
        ),
        migrations.AddField(
            model_name='sequence',
            name='teacher',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, related_name='sequences', to='account.Teacher'),
        ),
        migrations.AlterField(
            model_name='sequence',
            name='folder',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, related_name='sequences', to='sequence.Folder'),
        ),
    ]