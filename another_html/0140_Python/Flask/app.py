
# If you are the server:
# POST - to receive the data
# GET - to sent the data only

from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

stores = [
    {
        'name': 'Store1',
        'items': [
            {
            'name':'My Item',
            'price': 15.99
            }
        ]
    }
]

# Our endpoints:

@app.route('/')
def home():
    return render_template('index.html')

# POST /store data: {name:}
@app.route('/store', methods=['POST'])      # декоратор "route" привязывает адрес к функции
def create_store():
    request_data = request.get_json()       # "get_json" converts JSON string into a dictionary
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)

# GET /store/<string:name>
@app.route('/store/<string:name>')
def get_store(name):
    # iterate over stores
    # if the store name matches, return it
    # if none match, return an error message
    for store in stores:
        if store['name'] == name:
            return jsonify(store)
    return jsonify({'message': 'store not found'})
        
# GET /store
@app.route('/store')
def get_stores():
    return jsonify({'stores':stores})   # jsonify превратит этот словарь в текстовую строку для передачи по HTML
    
# POST /store/<string:name>/item {name:, price:}
@app.route('/store/<string:name>/item', methods=['POST'])
def create_item_in_store(name):
    request_data = request.get_json()       # "get_json" converts JSON string into a dictionary
    for store in stores:
        if store['name'] == name:
            new_item = {
            'name': request_data['name'],
            'price': request_data['price']    
            }
            store['items'].append(new_item)
            return jsonify(new_item)
    return jsonify({'message': 'store not found'})
    
# GET /store/<string:name>/item
@app.route('/store/<string:name>/item')
def get_item_in_store(name):
    for store in stores:
        if store['name'] == name:
            return jsonify({'items': store['items']})
    return jsonify({'message': 'store not found'})
    
app.run(port=5000)










#######################   1   #######################

# from flask import Flask

# app = Flask(__name__)
# @app.route('/')   # 'http://www.google.com'

# def home():
#     return "Hello worldy!"
    
# app.run(port=5000)
# # now you can go to 127.0.0.1:5000 and to check the result

