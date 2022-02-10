from flask import Flask, current_app, g
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import find_modules, import_string
from werkzeug.local import LocalProxy
from db.model import db


def register_db(app):
    # db_url = app.config.get("SQLALCHEMY_DATABASE_URI")
    # app.db = create_engine(db_url, pool_pre_ping=True)
    # app.db = SQLAlchemy(app)
    pass


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
    register_blueprints(app)

    db.init_app(app)
    # register_db(app)

    return app


# TODO: Determine if this is needed in deployment.
# db = LocalProxy(lambda: current_app.db)
