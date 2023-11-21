from django.db import models

class Usuario(models.Model):
    name = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    phone = models.IntegerField(max_digits=10)
    passname = models.CharField(min_length=80, max_length=15)

    def __str__(self):
        return self.name, self.lastName, self.email, self.email, self.phone, self.passname