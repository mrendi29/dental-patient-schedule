from . import db
from flask_sqlalchemy import SQLAlchemy

# db.Model = db.Model.metadata.reflect(db.engine)
# db.Model.metadata.reflect(db.engine)
db.Model.metadata.reflect(db.engine)


class User(db.Model):
    __tablename__ = db.Model.metadata.tables["user"]
    __mapper_args__ = {"primary_key": [__tablename__.c.user_id]}
    # __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


# class Dentist(db.Model):
#     __tablename__ = "dentist"
#     __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


# class Patient(db.Model):
#     __tablename__ = "patient"
#     __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


# class Appointment(db.Model):
#     __tablename__ = "appointment"
#     __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}


# class Records(db.Model):
#     __tablename__ = "records"
#     __table_args__ = {"autoload": True, "schema": "public", "autoload_with": db.engine}
