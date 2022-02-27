from flask import Blueprint
from ..model import User, Appointment, Dentist, Patient
from dps_api import db, auth

bp = Blueprint("appointment", __name__, url_prefix="/appointment")


@bp.route("/new", methods=["POST"])
@auth.login_required
def new():
    #  Check if time slot is available
    # Create if yes otherwise pick other time.
    pass


@bp.route("/<id:int>/update", methods=["PUT"])
@auth.login_required
def update(id):
    # TODO: Get appointment
    # check if specified time is available
    # update time if so otherwise return error message.
    pass
