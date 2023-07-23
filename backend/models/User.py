```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone_number = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    zip_code = db.Column(db.String(20), nullable=False)
    passport_number = db.Column(db.String(50), nullable=True)
    password = db.Column(db.String(100), nullable=True)

    def __init__(self, full_name, gender, email, phone_number, address, city, state, country, zip_code, passport_number=None, password=None):
        self.full_name = full_name
        self.gender = gender
        self.email = email
        self.phone_number = phone_number
        self.address = address
        self.city = city
        self.state = state
        self.country = country
        self.zip_code = zip_code
        self.passport_number = passport_number
        self.password = password
```