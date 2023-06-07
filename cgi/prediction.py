#!/usr/bin/python3.9

import cgi
from random import *
import cgitb
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
import json
import pickle
import os

print("Content-type: application/json\r\n")

cgitb.enable()

form = cgi.FieldStorage()

if 'descr_cat_veh' not in form or 'descr_agglo' not in form or 'descr_lum' not in form or 'descr_athmo' not in form or 'descr_etat_surf' not in form or 'descr_type_col' not in form or 'latitude' not in form or 'longitude' not in form or 'descr_dispo_secu' not in form:
    response = {'error': 'Missing parameter(s)'}
    print(json.dumps(response))
    exit()

# Récupération des paramètres depuis le formulaire
accident_info = {
    'descr_cat_veh': int(form['descr_cat_veh'].value),
    'descr_agglo': int(form['descr_agglo'].value),
    'descr_lum': int(form['descr_lum'].value),
    'descr_athmo': int(form['descr_athmo'].value),
    'descr_etat_surf': int(form['descr_etat_surf'].value),
    'descr_type_col': int(form['descr_type_col'].value),
    'latitude': float(form['latitude'].value),
    'longitude': float(form['longitude'].value),
    'descr_dispo_secu': int(form['descr_dispo_secu'].value)
}

svm = pickle.load(open('/var/www/etu121/cgi/svm.sav', 'rb'))
rf = pickle.load(open('/var/www/etu121/cgi/rf.sav', 'rb'))
mlp = pickle.load(open('/var/www/etu121/cgi/mlp.sav', 'rb'))
knn = pickle.load(open('/var/www/etu121/cgi/knn.sav', 'rb'))

def haut_niveau_predict_accident(accident_info):
    feature_names = ['descr_cat_veh', 'descr_agglo', 'descr_lum', 'descr_athmo', 'descr_etat_surf', 'descr_type_col', 'latitude', 'longitude', 'descr_dispo_secu']
    accident_info_reordered = [accident_info[feature] for feature in feature_names]

    svm_predicted_class = svm.predict([accident_info_reordered])[0]
    rf_predicted_class = rf.predict([accident_info_reordered])[0]
    mlp_predicted_class = mlp.predict([accident_info_reordered])[0]
    knn_predicted_class = knn.predict([accident_info_reordered])[0]
    #svm_predicted_class = randint(0,1)
    #rf_predicted_class = randint(0,1)
    #mlp_predicted_class = randint(0,1)

    svm_predicted_class_string = "grave" if svm_predicted_class == 0 else "pas grave"
    rf_predicted_class_string = "grave" if rf_predicted_class == 0 else "pas grave"
    mlp_predicted_class_string = "grave" if mlp_predicted_class == 0 else "pas grave"
    knn_predicted_class_string = "grave" if knn_predicted_class == 0 else "pas grave"

    results = {
        'SVM': {'descr_grav': svm_predicted_class_string},
        'Random Forest': {'descr_grav': rf_predicted_class_string},
        'MLP': {'descr_grav': mlp_predicted_class_string},
        'KNN': {'descr_grav': knn_predicted_class_string}
    }

    return results

try:
    predicted_classes = haut_niveau_predict_accident(accident_info)
    print(json.dumps(predicted_classes))
except Exception as e:
    response = {'error': str(e)}
    print(json.dumps(response))

