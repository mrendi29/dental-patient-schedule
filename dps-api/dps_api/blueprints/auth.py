# from dps_api.model import User
from flask import Blueprint, current_app
from ..model import User
from sqlalchemy.ext.automap import automap_base
from dps_api import db

# from ..model import User

# from dps_api.model import User

bp = Blueprint("auth", __name__, url_prefix="/auth")
# Base = automap_base()
# Base.prepare(db.engine, reflect=True)
# User = Base.classes.user


@bp.route("hi")
def hi():

    # for r in db.session.execute("SELECT * FROM pg_catalog.pg_tables").fetchall():
    # print(list(db.session.execute("SELECT * FROM pg_catalog.pg_tables").fetchall()))
    # return [
    #     u.__dict__
    #     for u in db.session.execute("SELECT * FROM pg_catalog.pg_tables").fetchall()
    # ]
    # with bp.app_context():
    user = User("testuser", "test@test.com", "00-00-0000", "123")
    db.session.add(user)
    db.session.commit()
    return [user.name for user in User.query.all()]
