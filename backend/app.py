```python
from flask import Flask, request, jsonify
from routes import createUser, updateAirlineStatus

app = Flask(__name__)

@app.route('/api/user', methods=['POST'])
def handle_create_user():
    user_data = request.get_json()
    user = createUser(user_data)
    return jsonify(user), 201

@app.route('/api/airlineStatus', methods=['POST'])
def handle_update_airline_status():
    response_data = request.get_json()
    status = updateAirlineStatus(response_data)
    return jsonify(status), 200

if __name__ == '__main__':
    app.run(debug=True)
```