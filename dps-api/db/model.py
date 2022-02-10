from flask_sqlalchemy import SQLAlchemy
from typing import cast
from .typings.sql_alchemy import SQLAlchemy as SQLAlchemyStub

db: SQLAlchemyStub = cast(SQLAlchemyStub, SQLAlchemy())


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return "<User {}>".format(self.username)


class Patients:
    pass


class Records:
    pass
