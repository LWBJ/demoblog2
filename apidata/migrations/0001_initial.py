# Generated by Django 3.0.6 on 2020-05-21 13:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
            ],
            options={
                'ordering': ['date'],
            },
        ),
        migrations.CreateModel(
            name='MainMeal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('calories', models.IntegerField()),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='MainMealInstance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apidata.Day')),
                ('mainMeal', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apidata.MainMeal')),
            ],
        ),
        migrations.AddField(
            model_name='day',
            name='meals',
            field=models.ManyToManyField(through='apidata.MainMealInstance', to='apidata.MainMeal'),
        ),
    ]