from flask import Flask
from typing import cast
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import find_modules, import_string
from werkzeug.local import LocalProxy
from db_utils.typings.sql_alchemy import SQLAlchemy as SQLAlchemyStub


# db = SQLAlchemy()
db: SQLAlchemyStub = cast(SQLAlchemyStub, SQLAlchemy())
# db = LocalProxy(lambda: current_app.db)


def register_blueprints(app):
    for name in find_modules("dps_api.blueprints"):
        mod = import_string(name)
        if hasattr(mod, "bp"):
            app.register_blueprint(mod.bp)


def create_app(config=None):
    app = Flask(__name__)
    app.config.update = config
    app.secret_key = "super secret key"

    # For some weird reason config is not getting updated and needs to be specified again here
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_DATABASE_URI"] = config.get("SQLALCHEMY_DATABASE_URI")
    register_blueprints(app)

    db.app = app

    db.init_app(app)
    with app.app_context():
        # db.Model.metadata.reflect(db.engine)
        from dps_api import model

    app.db = db

    return app


# TODO: Determine if this is needed in deployment.
# db = LocalProxy(lambda: current_app.db)
