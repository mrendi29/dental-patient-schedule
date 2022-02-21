from flask import Flask, current_app, g
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import find_modules, import_string
from werkzeug.local import LocalProxy

# from .model import db

db = SQLAlchemy()
# db = LocalProxy(lambda: current_app.db)


def register_db(app):
    # db_url = app.config.get("SQLALCHEMY_DATABASE_URI")
    # app.db = create_engine(db_url, pool_pre_ping=True)
    # app.db = SQLAlchemy(app)
    pass


def register_models(app):
    from ..db import Appointment, User, Dentist, Patient, Records


def register_blueprints(app):
    for name in find_modules("dps_api.blueprints"):
        mod = import_string(name)
        if hasattr(mod, "bp"):
            app.register_blueprint(mod.bp)


def create_app(config=None):
    app = Flask(__name__)
    app.config.update = config
    app.secret_key = "super secret key"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_DATABASE_URI"] = config.get("SQLALCHEMY_DATABASE_URI")
    # print(app.config)
    register_blueprints(app)
    # register_models(app)
    print(config)
    # with app.app_context():
    # db.app = app
    # db.init_app(app)
    # register_db(app)
    # db = SQLAlchemy()
    db.app = app

    db.init_app(app)
    with app.app_context():
        db.Model.metadata.reflect(db.engine)
        from dps_api import model
    # db.create_all()
    app.db = db

    return app


# TODO: Determine if this is needed in deployment.
# db = LocalProxy(lambda: current_app.db)
