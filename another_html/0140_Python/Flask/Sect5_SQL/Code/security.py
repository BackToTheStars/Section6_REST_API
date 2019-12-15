
from werkzeug.security import safe_str_cmp  # this library safely compares strings
from user import User      # from file user.py import class User

# users = [
#     User(1, 'nick', 'abcd')
# ]


# username_mapping = {u.username: u for u in users} # comprehension 
# userid_mapping   = {u.id: u for u in users}       # one more comprehension. Watch Python "comprehensions"

def authenticate(username, password):
#   user = username_mapping.get(username) 
    # .get will return a value from a dictionary, and "None" is a default value, if 
    # there is no user returned
    
    user = User.find_by_username(username)
    
    if user and safe_str_cmp(user.password, password):   # was before:    user.password == password:
        return user

def identity(payload): # "payload" is the content of JWT token
    user_id = payload['identity']
#   return userid_mapping.get(user_id, None)  # "None" is the default if not found

    return User.find_by_id(user_id)
    
    