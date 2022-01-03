# Generated by Django 3.0.5 on 2021-12-28 11:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sequence', '0008_activity_is_shuffle'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Connexion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pseudo', models.CharField(blank=True, max_length=50)),
                ('date', models.DateTimeField(auto_now=True)),
                ('channel', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Resultat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reponse', models.CharField(blank=True, max_length=100)),
                ('score', models.IntegerField()),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sequence.Activity')),
                ('connexion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RT.Connexion')),
            ],
        ),
        migrations.CreateModel(
            name='Play',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.SmallIntegerField(default=0)),
                ('date_start', models.DateTimeField(blank=True)),
                ('date_end', models.DateTimeField(blank=True)),
                ('sequence', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sequence.Sequence')),
            ],
        ),
        migrations.AddField(
            model_name='connexion',
            name='play',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RT.Play'),
        ),
        migrations.AddField(
            model_name='connexion',
            name='user',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
