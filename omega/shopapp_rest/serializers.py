from rest_framework import serializers

from .models import New, Services, Feedback, infohome, Application


class NewModel:
    def __init__(self, title, content):
        self.title = title
        self.content = content

class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = ('title', 'content', 'time_create', 'time_update', 'is_published',)

        def create(self, validated_data):
            return New.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.title = validated_data.get("title", instance.title)
            instance.content = validated_data.get("content", instance.content)
            instance.time_update = validated_data.get("time_update", instance.time_update)
            instance.is_published = validated_data.get("is_published", instance.is_published)
            instance.save()
            return instance


class SerModel:
    def __init__(self, title, content):
        self.title = title
        self.content = content

class SerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ('title', 'content', 'price', 'is_published', 'cat_id')

        def create(self, validated_data):
            return Services.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.title = validated_data.get("title", instance.title)
            instance.content = validated_data.get("content", instance.content)
            instance.time_update = validated_data.get("price", instance.time_update)
            instance.is_published = validated_data.get("is_published", instance.is_published)
            instance.cat_id = validated_data.get("is_published", instance.is_published)
            instance.save()
            return instance



class EvModel:
    def __init__(self, title, content):
        self.title = title
        self.content = content

class EvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('title', 'content', 'is_published', 'ev_id')

        def create(self, validated_data):
            return Feedback.objects.create(**validated_data)


class InfohomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = infohome
        fields = ('icon', 'title', 'content', 'is_published',)

        def create(self, validated_data):
            return infohome.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.icon = validated_data.get("icon", instance.icon)
            instance.title = validated_data.get("title", instance.title)
            instance.content = validated_data.get("content", instance.content)
            instance.is_published = validated_data.get("is_published", instance.is_published)
            instance.save()
            return instance


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('name', 'email', 'number',)

        def create(self, validated_data):
            return Application.objects.create(**validated_data)