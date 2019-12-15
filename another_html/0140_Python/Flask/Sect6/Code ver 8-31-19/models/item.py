from db import db

class ItemModel(db.Model):
    
    __tablename__ = 'items'
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80))
    price = db.Column(db.Float(precision=2))
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id')) # table "stores", column "id"
    
    store = db.relationship('StoreModel')
    
    # anything not mentioned here will not be saved in the database
    
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def json(self):
        return {'name': self.name, 'price': self.price}
    
    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first() # returns ItemModel object

    def save_to_db(self):    # not it is not inserting only; it is "upserting"
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
 