from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('send-email/', views.send_contact_mail, name='send_contact_email'),
]