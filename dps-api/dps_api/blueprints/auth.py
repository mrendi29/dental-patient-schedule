from flask import Blueprint, request, jsonify, g, abort, url_for
from ..model import User
from dps_api import db, auth

bp = Blueprint("auth", __name__, url_prefix="/auth")

"""
Authentication and Authorization adapted from
https://blog.miguelgrinberg.com/post/restful-authentication-with-flask
"""


@bp.route("/signin", methods=["POST"])
def sign_in():
    form = request.form
    username = form.get("username")
    password = form.get("password")
    user = User.verify_auth_token(username)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(username=username).first()
        if not user or not user.verify_password(password):
            return (jsonify({"error": "Authentication error"}), 401)
    g.user = user
    token = g.user.generate_auth_token(3600)
    return (
        jsonify({"token": token.decode("ascii"), "duration": 3600, "id": user.user_id}),
        201,
    )


@bp.route("/signup", methods=["POST"])
def sign_up():
    form = request.form
    username = form.get("username")
    email = form.get("email")
    password = form.get("password")
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
@auth.login_required
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(400)
    return jsonify({"username": user.username})


@bp.route("/users/<int:id>/password_reset")
@auth.login_required
def password_reset(id):
    user = User.query.get(id)
    form = request.form
    current_password = form.get("current_password")
    new_pass = form.get("new_password")

    if user is not None and user.verify_password(current_password):
        user.hash_password(new_pass)
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "Success"}), 201
    return abort(401)


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
