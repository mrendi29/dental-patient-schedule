from abc import abstractproperty
from calendar import c
from email.mime import application
from dps_api import create_app
import os

app = create_app(
    config={"SQLALCHEMY_DATABASE_URI": os.getenv("SQLALCHEMY_DATABASE_URL")}
)

application = app
