
import sqlite3

class User:
    def __init__(self, _id, username, password):
        self.id = _id
        self.username = username
        self.password = password
    
    @classmethod
    def find_by_username(cls, username):                # self is what every method needs to interact with the object of type User
        
        connection = sqlite3.connect('data.db')         # initialise the connection
        cursor = connection.cursor()                    # initialise the cursor
        
        query = "SELECT * FROM users WHERE username=?"  # search through the database by username
        result = cursor.execute(query, (username,))     # ( ,) makes username a tuple to use in the query
        
        row = result.fetchone()                         # will return a first fow with the result found
        if row is not None:                             # can be simplified to "if row:"
#           user = cls(row[0], row[1], row[2])          # create the object of class User
            user = cls(*row)                            # same as above, pass positional arguments
        else:
            user = None
        
        connection.close()                              # close the connection to database
        
        return user                                     # return user or None

    @classmethod
    def find_by_id(cls, _id):                           # self is what every method needs to interact with the object of type User
        
        connection = sqlite3.connect('data.db')         # initialise the connection
        cursor = connection.cursor()                    # initialise the cursor
        
        query = "SELECT * FROM users WHERE id=?"        # search through the database by id
        result = cursor.execute(query, (_id,))          # ( ,) makes username a tuple to use in the query
        
        row = result.fetchone()                         # will return a first fow with the result found
        if row is not None:                             # can be simplified to "if row:"
#           user = cls(row[0], row[1], row[2])          # create the object of class User
            user = cls(*row)                            # same as above, pass positional arguments
        else:
            user = None
        
        connection.close()                              # close the connection to database
        
        return user                                     # return user or None
        
    