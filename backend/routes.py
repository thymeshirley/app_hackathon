from flask import Blueprint, request
from .services.airlineService import createUser, updateAirlineStatus

routes = Blueprint('routes', __name__)


@routes.route('/createUser', methods=['POST'])
def create_user():
    user_data = request.get_json()
    user = createUser(user_data)
    return user, 201


@routes.route('/updateAirlineStatus', methods=['POST'])
def update_airline_status():
    response_data = request.get_json()
    status = updateAirlineStatus(response_data)
    return status, 200
