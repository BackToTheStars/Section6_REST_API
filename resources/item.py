from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.item import ItemModel

class Item(Resource):     # class Item inherits class Resource 
    
    parser = reqparse.RequestParser()
    parser.add_argument('price',
        type = float,
        required = True,
        help = "This field cannot be left blank!"
    )
    parser.add_argument('store_id',
        type = int,
        required = True,
        help = "Every item needs a store id."
    )
    
    @jwt_required()         # this is decorator
    def get(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            return item.json()  # because it is no more a dictionary
        return {'message': 'Item not found'}, 404
    
    def post(self, name):
        if ItemModel.find_by_name(name):   # self = Item
            return {'message': "An item with the name '{}' already exists".format(name)}, 400 # 400 = "bad request" code
            
        data = Item.parser.parse_args()
        item = ItemModel(name, data['price'], data['store_id']) # not JSON object anymore, but ItemModel object
        
        try:
            item.save_to_db()
        except:
            return {"message": "An error occurred while inserting the item."}, 500
        
        return item.json(), 201 
        
    def delete(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            item.delete_from_db() 
        return {'message': 'item deleted.'}
  
    def put(self, name):
        data = Item.parser.parse_args()
        
        item = ItemModel.find_by_name(name)
        
        if item is None:
            item = ItemModel(name, data['price'], data['store_id'])
        else:
            item.price = data['price']
        
        item.save_to_db()

        return item.json()
                
class ItemList(Resource):
    def get(self):

        
        return {'items': [item.json() for item in ItemModel.query.all()]} # comprehension