from flask_sqlalchemy import SQLAlchemy
from typing import cast
from .typings.sql_alchemy import SQLAlchemy as SQLAlchemyStub

db: SQLAlchemyStub = cast(SQLAlchemyStub, SQLAlchemy())


class User(db.Model):
    __tablename__ = "user"
    __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


class Dentist:
    __tablename__ = "dentist"
    __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


class Patient:
    __tablename__ = "patient"
    __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


class Appointment:
    __tablename__ = "appointment"
    __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


class Records:
    __tablename__ = "records"
    __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}
