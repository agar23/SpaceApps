from flask import Flask, request, make_response
from flask_restplus import Resource, Api
from score_calculation import *
import json
import os, sys

app = Flask(__name__)
api = Api(app)

@api.route('/whereToGo')                   
class whereToGo(Resource):            
    def get(self):                     
        with open("./resources/score_list.json") as f:
            data = json.load(f)
            response = make_response(json.dumps(data))
            response.headers['content-type'] = 'application/json'
        return response
        
@api.route('/whereToCamp')                   
class whereToGo(Resource):            
    def get(self):                     
        with open("./resources/vegetation_means.json") as f:
            data = json.load(f)
            response = make_response(json.dumps(data))
            response.headers['content-type'] = 'application/json'
        return response

if __name__ == '__main__':
    app.run(host='0.0.0.0')