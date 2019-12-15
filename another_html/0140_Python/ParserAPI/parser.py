from flask_restful import reqparse

class WhateverClass():

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
    
    def whatever_def(self):
        
        data = WhateverClass.parser.parse_args() # got data from JSON payload, part of Flask-restrul
        
        if data['username'] is not None:
            return {"message": "a user with that isername already exists."}, 400 # 400=bad request
        
        return {"message": "user created successfully."}, 201 # response code "created"