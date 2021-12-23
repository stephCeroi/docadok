#################################
#### Auteur : philipe Demaria 
#### pour SACADO
#################################
from django.urls import path, re_path
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [

    path('create_sequence/<int:ids>', create_sequence, name='create_sequence'),
    path('update_sequence/<int:ids>', update_sequence, name='update_sequence'),


    path('ajax_update_sequence', ajax_update_sequence, name='ajax_update_sequence'),
    path('ajax_update_checkbox_sequence', ajax_update_checkbox_sequence, name='ajax_update_checkbox_sequence'),
 ]
