from flask import jsonify
from models.User import User


def createUser(data):
    new_user = User(
        full_name=data['full_name'],
        gender=data['gender'],
        email=data['email'],
        phone_number=data['phone_number'],
        address_lines=data['address_lines'],
        city=data['city'],
        state=data['state'],
        country=data['country'],
        zip_code=data['zip_code'],
        passport_number=data.get('passport_number', None),
        password=data.get('password', None)
    )
    # Save the user to the database
    new_user.save()
    return new_user


def updateAirlineStatus(user):
    # Simulate the process of sending user's information to airlines
    airlines = ["Delta", "United", "American", "Southwest", "JetBlue"]
    status = {}
    for airline in airlines:
        # Simulate the success or failure of the operation
        status[airline] = "SUCCESS" if user.send_info_to_airline(
            airline) else "FAILED"
    return jsonify(status)
