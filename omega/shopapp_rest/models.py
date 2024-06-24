from django.db import models

# Create your models here.
class New(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Services(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    price = models.TextField(blank=True)
    is_published = models.BooleanField(default=True)
    cat = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name



class Feedback(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    is_published = models.BooleanField(default=True)
    ev = models.ForeignKey('Evaluation', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.title

class Evaluation(models.Model):
    score = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.score


class infohome(models.Model):
    icon = models.ImageField(upload_to='images/', blank=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title