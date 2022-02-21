import os
from dps_api import create_app, db
from dps_api.model import User
from werkzeug.security import generate_password_hash

app = create_app()
app.app_context().push()
db.create_all(
    app=create_app(
        config={
            "SQLALCHEMY_DATABASE_URI": os.getenv("SQLALCHEMY_DATABASE_URI"),
            "SQLALCHEMY_TRACK_MODIFICATIONS": False,
        }
    )
)

default_pw = generate_password_hash("123", method="sha256")

user = User("testuser", "test@test.com", "00-00-0000", default_pw)
db.session.add(user)
db.session.commit()
