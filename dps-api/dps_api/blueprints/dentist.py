from flask import Blueprint, jsonify
from ..model import Dentist, User
from dps_api import db, auth

bp = Blueprint("dentist", __name__, url_prefix="/dentist")


@bp.route("hi")
@auth.login_required
def hi():

    # user = User("testuser1", "test1@test.com", "123")
    # db.session.add(user)
    # db.session.commit()

    return " ".join([user.email for user in User.query.all()])


@bp.route("dentists")
@auth.login_required
def get_dentists():
    return jsonify(
        {
            "dentists": [
                f"{dentist.name} {dentist.last_name}" for dentist in Dentist.query.all()
            ]
        }
    )
