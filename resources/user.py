

from flask_restful import Resource, reqparse
from models.user import UserModel

class UserRegister(Resource):

    parser = reqparse.RequestParser()
    
    parser.add_argument('username',
        type = str,
        required = True,
        help = "This field cannot be blank."
    )
    
    parser.add_argument('password',
        type = str,
        required = True,
        help = "This field cannot be blank."
    )
    
    def post(self):
        
        data = UserRegister.parser.parse_args() # got data from JSON payload, part of Flask-restrul
        
        if UserModel.find_by_username(data['username']) is not None:
            return {"message": "a user with that isername already exists."}, 400 # 400=bad request

        user = UserModel(**data)
        user.save_to_db()        
                
        return {"message": "user created successfully."}, 201 # response code "created"
        
        
        


    