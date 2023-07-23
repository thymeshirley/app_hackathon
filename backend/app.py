from flask import Flask, request, jsonify
import multion
import json
app = Flask(__name__)


multion.login()

schema = {
    'type': 'object',
    'properties': {
        'fullName': {'type': 'string'},
        'gender': {'type': 'string'},
        'email': {'type': 'string'},
        'phoneNumber': {'type': 'string'},
        'address': {'type': 'string'},
        'city': {'type': 'string'},
        'state': {'type': 'string'},
        'country': {'type': 'string'},
        'zipCode': {'type': 'string'},
        'passportNumber': {'type': 'string'},
        'password': {'type': 'string'}
    },
    'required': ['fullName', 'gender', 'email', 'phoneNumber', 'address', 'city', 'state', 'country', 'zipCode', 'passportNumber', 'password']
}


user_details = {
    'fullName': "Shirley Xu",
    'gender': "Female",
    'email': "laixu@gmail.com",
    'phoneNumber': "4159168995",
    'address': "1 Shield Ave",
    'Date of Birth': '01/01/2020',
    'city': "Davis",
    'state': "CA",
    'country': "United States",
    'zipCode': "95616",
    'passportNumber': "E003567",
    'password': "78IKtyJK"}

prompt = f"Create an account for this user: {json.dumps(user_details)}"


@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    # Do something with the data
    return jsonify(data), 200


if __name__ == '__main__':
    app.run(debug=True)
