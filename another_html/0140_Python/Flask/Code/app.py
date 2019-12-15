
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

Class Student(Resource):   # Class Student inherits class Resource from flask_restful
    def get(self, name):
        return {'student': name}
        
api.add_resource(Student, '/student: <string:name>')    # http://127.0.0.1:5000/student/Nick

app.run(port=5000)
