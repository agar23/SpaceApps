from flask import Flask, request, make_response
from flask_restplus import Resource, Api, fields, reqparse
from score_calculation import *
from firebase import firebase
from firebase_admin import credentials, auth, db
import json, os, sys, firebase_admin
import constants

app = Flask(__name__)
api = Api(app)

cred = credentials.Certificate('./resources/firebase.json')
default_app = firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://kasa-987be.firebaseio.com/'
})

@api.route('/whereToGo')                   
class whereToGo(Resource):            
    def get(self):                  
        firebaseApp = firebase.FirebaseApplication(constants.FIREBASE_BASE_URL, None)
        data = firebaseApp.get('/scoreList', None)
        response = make_response(json.dumps(data))
        response.headers['content-type'] = 'application/json'
        return response
        
@api.route('/whereToCamp')                   
class whereToCamp(Resource):            
    def get(self):                     
        firebaseApp = firebase.FirebaseApplication(constants.FIREBASE_BASE_URL, None)
        data = firebaseApp.get('/vegetationMeans', None)
        response = make_response(json.dumps(data))
        response.headers['content-type'] = 'application/json'
        return response

User = api.model('User', {
    'email': fields.String(description='The User\'s Email', required=True),
    'password': fields.String(description='The User\'s Password', min=8, required=True),
    'firstName': fields.String(description='The User\'s First Name', required=True),
    'lastName': fields.String(description='The User\'s Last Name', required=True),
    'phoneNumber': fields.String(description='The User\'s Phonenumer', min=11, required=True),
})

@api.route('/user', methods=["post"])
class userRecord(Resource): 
    @api.expect(User, validate=True)
    @api.response(400, 'Bad Request')
    @api.response(200, 'Success')
    def post(self):            
        args=request.json  

        email=args['email']
        password=args['password']
        firstName=args['firstName']
        lastName=args['lastName']
        displayName=firstName+' '+lastName
        phone_number=args['phoneNumber']
        
        try:
            firebase_admin.auth.create_user(email=email, password=password, display_name=displayName, phone_number=phone_number)
        except Exception as e:
            return {'error': str(e)}, 400

        user = firebase_admin.auth.get_user_by_email(email, app=None)
        root = firebase_admin.db.reference()
        root.child('users').child(user.uid).set({
                    'email' : email, 
                    'firstName' : firstName,
                    'lastName' : lastName,
                    'displayName' : displayName,
                    'phoneNumber' : phone_number
                })    
        return {'uid': user.uid}

if __name__ == '__main__':
    app.run(host='0.0.0.0')