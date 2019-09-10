
from db import db

class StoreModel(db.Model):
    
    __tablename__ = 'stores'
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80))
    items = db.relationship('ItemModel', lazy = 'dynamic')
    
    # anything not mentioned here will not be saved in the database
    
    def __init__(self, name):
        self.name = name
    
    def json(self):
        return {'name': self.name, 'items': [item.json() for item in self.items.all()]}
    
    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first() # returns ItemModel object

    def save_to_db(self):    # not it is not inserting only; it is "upserting"
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
 