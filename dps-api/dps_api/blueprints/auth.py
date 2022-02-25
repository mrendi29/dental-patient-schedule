from flask import Blueprint, request, jsonify, g, abort, url_for
from ..model import User
from dps_api import db, auth

bp = Blueprint("auth", __name__, url_prefix="/auth")

"""
Authentication and Authorization adapted from
https://blog.miguelgrinberg.com/post/restful-authentication-with-flask
"""


@bp.route("/signin", methods=["POST"])
@auth.login_required
def sign_in():
    token = g.user.generate_auth_token(3600)
    return jsonify({"token": token.decode("ascii"), "duration": 3600})


@bp.route("/signup", methods=["POST"])
def sign_up():
    username = request.json.get("username")
    email = request.json.get("email")
    password = request.json.get("password")
    if username is None or password is None:
        abort(400)  # missing arguments
    if User.query.filter_by(username=username).first() is not None:
        abort(400)  # existing user
    user = User(email, username, password)

    db.session.add(user)
    db.session.commit()
    return (
        jsonify({"username": user.username}),
        201,
        {"Location": url_for("auth.get_user", id=user.user_id, _external=True)},
    )


@bp.route("/users/<int:id>")
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(400)
    return jsonify({"username": user.username})


@auth.verify_password
def verify_password(username_or_token, password):
    # first try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True
