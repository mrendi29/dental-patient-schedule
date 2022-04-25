from flask import Blueprint


bp = Blueprint("base", __name__, url_prefix="/base")


@bp.route("/")
def helloWorld():
    return "Hello, cross-origin-world!"
