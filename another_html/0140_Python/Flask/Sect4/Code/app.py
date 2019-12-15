
# 7/29/19 Improving code and errors control, authentification
# installed a library Flask-JWT (JSON Web Token, obfuscation of data)

from flask import Flask, request # request processes JSON payloads 
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required
from security import authenticate, identity

app = Flask(__name__)
app.secret_key = 'Nick'   # in the production environment it cannot be so open as here, it should be hidden 
api = Api(app)            # class API from flask_restful

jwt = JWT(app, authenticate, identity)  # JWT will create a new endpoint, /auth, which will return a JWT token

items = []

class Item(Resource):     # class Item inherits class Resource 
    parser = reqparse.RequestParser()
    parser.add_argument('price',
        type = float,
        required = True,
        help = 'This field cannot be left blank!'
    )
    
    @jwt_required()         # this is decorator
    def get(self, name):
        item = next(filter(lambda x: x['name'] == name, items), None) 
        # "None" is if "next" function will not find anything, it will return "None". Otherwise it would be an error.
        # instead of "next" we can use "list", then instead of the first item, it will return a list of what it found 
        # repeat lambda functions lesson, filter there as well  
        # filter function takes 2 arguments: function and a list to filter
        # flask_restful does not need to jsonify dictionaries
        return {'item': item}, 200 if item else 404 # if item = if item exists, not None
        # interview question what is the most popular code, answer - 200. 404 is "not found"   
        
    def post(self, name):
'''        parser = reqparse.RequestParser()   # became the part of class Item
        parser.add_argument('price',
            type = float,
            required = True,
            help = 'This field cannot be left blank!'
        )'''
        
        if next(filter(lambda x: x['name'] == name, items), None):  #same as "is not None"
            return {'message': "An item with the name '{}' already exists".format(name)}, 400 # 400 = "bad request" code
            
        data = Item.parser.parse_args()
            
        # data = request.get_json() # data is a dictionary - line removed because of reqparse
        
        # get_json(silent=True) will return null if something is wrong with text or JSON object
        # get_json(force=True) makes you no need for a JSON header, it will format it itself
        item = {'name': name, 'price': data['price']} # accesses the key in a dictionary "data"
        items.append(item)
        return item, 201 
        # "201" code = "created". "202" = "accepted" (for example, if the creation of object takes 10 min, and client does not need to wait)
        
    def delete(self, name):
        global items # points it to global, instead of local variable
        items = list(filter(lambda x: x['name'] != name, items))
        return {'message': 'item deleted.'}
    
    def put(self, name):
'''        parser = reqparse.RequestParser()       # removed because it will be the part of the class Item
        parser.add_argument('price',
            type = float,
            required = True,
            help = 'This field cannot be left blank!'
        )'''
        data = Item.parser.parse_args()
        
        item = next(filter(lambda x: x['name'] == name, items), None)
        if item is None:
            item = {'name': name, 'price': data['price']}
            items.append(item)
        else:
            item.update(data)
        return item
                
class ItemList(Resource):
    def get(self):
        return {'items': items}
        # when we restart the app, all items are cleared, because they are not in the database, but in RAM.
                        
api.add_resource(Item, '/store/item/<string:name>')     
# error: was : now /
# http://127.0.0.1:5000/item/
# add_resource is a method from class flask_restrul.API
api.add_resource(ItemList, '/store/items')

app.run(port=5000, debug=True)


"""
from flask import Flask, request # request processes JSON payloads 
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)            # class API from flask_restful

items = []

class Item(Resource):     # class Item inherits class Resource 
    def get(self, name):
        for item in items:
            if item['name'] == name:
                return item  # flask_restful does not need to jsonify dictionaries
        return {'item': None}, 404 
        # interview question what is the most popular code, answer - 200. 404 is "not found"   
        
    def post(self, name):
        data = request.get_json() # data is a dictionary
        # get_json(silent=True) will return null if something is wrong with text or JSON object
        # get_json(force=True) makes you no need for a JSON header, it will format it itself
        item = {'name': name, 'price': data['price']} # accesses the key in a dictionary "data"
        items.append(item)
        return item, 201 
        # "201" code = "created". "202" = "accepted" (for example, if the creation of object takes 10 min, and client does not need to wait)
                
class ItemList(Resource):
    def get(self):
        return {'items': items}
        # when we restart the app, all items are cleared, because they are not in the database, but in RAM.
                        
api.add_resource(Item, '/store/item/<string:name>')     
# error: was : now /
# http://127.0.0.1:5000/item/
# add_resource is a method from class flask_restrul.API
api.add_resource(ItemList, '/store/items')

app.run(port=5000, debug=True)
"""




"""
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)            # class API from flask_restful

class Student(Resource):  # class Student inherits class Resource 
    def get(self, name):
        return {'student': name}
        
api.add_resource(Student, '/student/<string:name>')     
# error: was : now /
# http://127.0.0.1:5000/student/Nick
# add_resource is a method from class flask_restrul.API

app.run(port=5000)
"""
