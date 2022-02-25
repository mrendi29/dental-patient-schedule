from flask import Blueprint
from ..model import User
from dps_api import db, auth

bp = Blueprint("dentist", __name__, url_prefix="/dentist")


@bp.route("hi")
@auth.login_required
def hi():

    # user = User("testuser1", "test1@test.com", "123")
    # db.session.add(user)
    # db.session.commit()

    return " ".join([user.email for user in User.query.all()])
