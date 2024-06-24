from django.contrib import admin

from .models import New, Services, Feedback, infohome

# Register your models here.
admin.site.register(New)
admin.site.register(Services)
admin.site.register(Feedback)
admin.site.register(infohome)