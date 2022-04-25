from crypt import methods
from flask import Blueprint, jsonify
from ..model import User, Appointment, Dentist, Patient
from dps_api import db, auth

bp = Blueprint("patient", __name__, url_prefix="/patient")


@bp.route("/")
def logged_user():
    # Return currnetly logged patient
    pass


@bp.route("/<int:id>")
@auth.login_required
def get_patient(id):
    return jsonify(Patient.query.filter_by(patient_id=id).first()), 201


@bp.route("/list_dentists")
@auth.login_required
def list_dentists():
    # Get dentists
    pass


@bp.route("/<int:id>/pick_dentist", methods=["POST"])
def pick_dentist(id):
    # Update dentist for patient
    pass


@bp.route("/<int:id>/reserved_slots", methods=["GET"])
@auth.login_required
def reserved_slots(id):
    # Find Dentist from patient
    # Get all appointments for that dentist
    pass


@bp.route("<int:id>/schedule", methods=["POST"])
@auth.login_required
def schedule_appointment(id):
    # Get patient
    # Confirm again if appointment is available
    # schedule if yes otherwise return error
    pass


def get_reserved_slots(id):
    # find denist
    # return reserved slots from now - future
    pass
