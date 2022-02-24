# from dps_api.model import User
from flask import Blueprint
from ..model import User
from dps_api import db

bp = Blueprint("auth", __name__, url_prefix="/auth")


@bp.route("hi")
def hi():

    user = User("testuser1", "test1@test.com", "123")
    db.session.add(user)
    db.session.commit()

    return " ".join([user.email for user in User.query.all()])
