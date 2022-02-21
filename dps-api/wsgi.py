from dps_api import create_app
import os
from model import db

basedir = os.path.abspath(os.path.dirname(__file__))

app = create_app(
    config={
        "SQLALCHEMY_DATABASE_URI": os.getenv("SQLALCHEMY_DATABASE_URI"),
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }
)
app.app_context().push()

# application = app
