from django.db import models

# Create your models here.
class ServiceData(models.Model):
    courseid=models.IntegerField()
    coursename=models.CharField(max_length=20)
    duration=models.CharField(max_length=10)
    corsefee=models.IntegerField()
    startdate=models.DateField()
    enddate=models.DateField()
    certificate=models.CharField(max_length=20)


class FeedbackData(models.Model):
    name=models.CharField(max_length=10)
    rating=models.CharField(max_length=10)
    feedback=models.CharField(max_length=30)
    