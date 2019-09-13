# 8/18/19 SQLAlchemy

# models is our internal representation, helper/classes for a server
# resources is external API representation

import os               
# for Postgres database environment variable, provided by Heroku CLI

from flask import Flask # request processes JSON payloads 
from flask_restful import Api
from flask_jwt import JWT

from security import authenticate, identity
from resources.user import UserRegister # looks into resources package (folder)
from resources.item import Item, ItemList
from resources.store import Store, StoreList

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///data.db') 
# App will connect to Heroku environment variable. GET(<read>, <default>)
# If there's nothing, it will use the path to database file in the root.

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'Nick'   # in the production environment it cannot be so open as here, it should be hidden 
api = Api(app)            # class API from flask_restful
  
jwt = JWT(app, authenticate, identity)  # JWT will create a new endpoint, /auth, which will return a JWT token

# items = [] deleted because now we will use not the memory, but database
# deleted classes Item and ItemsList from here to another file         
                        
api.add_resource(Item, '/item/<string:name>')     
api.add_resource(ItemList, '/items')
api.add_resource(UserRegister, '/register')   # those are endpoints
api.add_resource(Store, '/store/<string:name>')
api.add_resource(StoreList, '/stores')

if __name__ == '__main__':
    
    from db import db
    db.init_app(app)
    
    app.run(port=5000, debug=True)


