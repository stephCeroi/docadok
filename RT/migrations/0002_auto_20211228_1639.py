# Generated by Django 3.0.5 on 2021-12-28 15:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sequence', '0008_activity_is_shuffle'),
        ('RT', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='connexion',
            name='play',
        ),
        migrations.AddField(
            model_name='connexion',
            name='sequence',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='sequence.Sequence'),
        ),
        migrations.AddField(
            model_name='play',
            name='org_channel',
            field=models.CharField(help_text="channel de l'organisateur", max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='play',
            name='ranking',
            field=models.IntegerField(default=-1, help_text='la numero de la dernière activité terminée'),
        ),
        migrations.AlterField(
            model_name='connexion',
            name='channel',
            field=models.CharField(default='non défini', max_length=60),
        ),
        migrations.AlterField(
            model_name='resultat',
            name='activity',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='sequence.Activity'),
        ),
        migrations.AlterField(
            model_name='resultat',
            name='connexion',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='RT.Connexion'),
        ),
        migrations.AlterField(
            model_name='resultat',
            name='score',
            field=models.IntegerField(default=0),
        ),
    ]