from datetime import datetime
from dps_api import db
from passlib.apps import custom_app_context as pwd_context
from itsdangerous import (
    BadSignature,
    SignatureExpired,
    TimedJSONWebSignatureSerializer as Serializer,
)
from flask import current_app as app


class User(db.Model):
    __tablename__ = "user"
    user_id = db.Column(db.Integer, primary_key=True, nullable=False, index=True)
    username = db.Column(db.String(18), unique=True, index=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    dentist = db.relationship(
        "Dentist", back_populates="user", lazy=True, uselist=False
    )
    patient = db.relationship(
        "Patient", back_populates="user", lazy=True, uselist=False
    )

    def generate_auth_token(self, expiration=3600):
        s = Serializer(app.config["SECRET_KEY"], expires_in=expiration)
        return s.dumps({"user_id": self.user_id})

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(app.config["SECRET_KEY"])

        try:
            data = s.loads(token)
        except SignatureExpired:
            return None  # valid token, but expired
        except BadSignature:
            return None  # invalid token
        user = User.query.get(data["user_id"])

        return user

    def __init__(self, email, username, password, **kwargs):
        super(User, self).__init__(**kwargs)
        self.email = email
        self.username = username
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def __repr__(self) -> str:
        return f"User -> {self.username}"


class Dentist(db.Model):
    __tablename__ = "dentist"
    dentist_id = db.Column(db.Integer, primary_key=True, nullable=False, index=True)
    name = db.Column(db.String(18), nullable=False, index=True)
    last_name = db.Column(db.String(18), nullable=False, index=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.user_id"), nullable=False, index=True
    )
    user = db.relationship("User", back_populates="dentist", lazy=True, uselist=False)

    appointments = db.relationship("Appointment", back_populates="dentist", lazy=True)
    records = db.relationship("Record", back_populates="dentist", lazy=True)

    def __init__(self, name, last_name, **kwargs):
        super(Dentist, self).__init__(**kwargs)
        self.name = name
        self.last_name = last_name

    def __repr__(self) -> str:
        return f"Dentist -> {self.name}:{self.last_name}"


class Patient(db.Model):
    __tablename__ = "patient"
    patient_id = db.Column(db.Integer, primary_key=True, nullable=False, index=True)
    name = db.Column(db.String(18), nullable=False, index=True)
    last_name = db.Column(db.String(18), nullable=False, index=True)
    birth_date = db.Column(db.DateTime, nullable=False)
    gender = db.Column(db.String(1), nullable=False)
    cellphone = db.Column(db.String(45), nullable=False)
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.user_id"), nullable=False, index=True
    )
    user = db.relationship("User", back_populates="patient", lazy=True, uselist=False)

    appointments = db.relationship("Appointment", back_populates="patient", lazy=True)
    records = db.relationship("Record", back_populates="patient", lazy=True)

    def __init__(self, name, last_name, birth_date, gender, cellphone, **kwargs):
        super(Patient, self).__init__(**kwargs)
        self.name = name
        self.last_name = last_name
        self.birth_date = birth_date
        self.gender = gender
        self.cellphone = cellphone

    def __repr__(self) -> str:
        return f"Patient -> {self.name}:{self.last_name}"


class Appointment(db.Model):
    __tablename__ = "appointment"
    appointment_id = db.Column(db.Integer, primary_key=True, nullable=False, index=True)
    start_time = db.Column(db.DateTime, nullable=False, index=True)
    pattient_accepted = db.Column(db.Boolean, nullable=False, default=False)
    description = db.Column(db.Text)
    notes = db.Column(db.Text)
    patient_id = db.Column(
        db.Integer, db.ForeignKey("patient.patient_id"), nullable=False, index=True
    )
    patient = db.relationship(
        "Patient", back_populates="appointments", lazy=True, uselist=False
    )
    dentist_id = db.Column(
        db.Integer, db.ForeignKey("dentist.dentist_id"), nullable=False, index=True
    )
    dentist = db.relationship(
        "Dentist", back_populates="appointments", lazy=True, uselist=False
    )
    record_id = db.Column(
        db.Integer,
        db.ForeignKey("record.record_id"),
        nullable=False,
        index=True,
    )
    record = db.relationship(
        "Record", back_populates="appointments", lazy=True, uselist=False
    )

    def __init__(self, start_time, patient_accepted, description, notes, **kwargs):
        super(Appointment, self).__init__(**kwargs)
        self.start_time = start_time
        self.pattient_accepted = patient_accepted
        self.description = description
        self.notes = notes

    def __repr__(self) -> str:
        return f"Appointment -> {self.start_time}-{self.patient_id}-{self.dentist_id}"


class Record(db.Model):
    __tablename__ = "record"
    record_id = db.Column(db.Integer, primary_key=True, nullable=False, index=True)
    description = db.Column(db.Text)
    notes = db.Column(db.Text)
    patient_id = db.Column(
        db.Integer, db.ForeignKey("patient.patient_id"), nullable=False, index=True
    )
    patient = db.relationship(
        "Patient", back_populates="records", lazy=True, uselist=False
    )
    dentist_id = db.Column(
        db.Integer, db.ForeignKey("dentist.dentist_id"), nullable=False, index=True
    )
    dentist = db.relationship(
        "Dentist", back_populates="records", lazy=True, uselist=False
    )
    appointments = db.relationship("Appointment", back_populates="record", lazy=False)

    def __init__(self, description, notes, **kwargs):
        super(Record, self).__init__(**kwargs)
        self.description = description
        self.notes = notes

    def __repr__(self) -> str:
        return f"Record<{self.patient_id}-{self.dentist_id}>"
