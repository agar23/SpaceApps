from flask import Flask, request, make_response
from flask_restplus import Resource, Api
from score_calculation import *
from firebase import firebase
import json, os, sys
import constants

app = Flask(__name__)
api = Api(app)

@api.route('/whereToGo')                   
class whereToGo(Resource):            
    def get(self):                  
        firebaseApp = firebase.FirebaseApplication(constants.FIREBASE_BASE_URL, None)
        data = firebaseApp.get('/scoreList', None)
        response = make_response(json.dumps(data))
        response.headers['content-type'] = 'application/json'
        return response
        
@api.route('/whereToCamp')                   
class whereToGo(Resource):            
    def get(self):                     
        firebaseApp = firebase.FirebaseApplication(constants.FIREBASE_BASE_URL, None)
        data = firebaseApp.get('/vegetationMeans', None)
        response = make_response(json.dumps(data))
        response.headers['content-type'] = 'application/json'
        return response

if __name__ == '__main__':
    app.run(host='0.0.0.0')