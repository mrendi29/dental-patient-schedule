import os
from dps_api import create_app, db
from dps_api.model import User, Dentist
from werkzeug.security import generate_password_hash
from dotenv import load_dotenv

load_dotenv()
app = create_app(
    config={
        "SQLALCHEMY_DATABASE_URI": os.getenv("SQLALCHEMY_DATABASE_URI"),
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }
)
app.app_context().push()
db.drop_all(app=app)
db.create_all(
    app=create_app(
        config={
            "SQLALCHEMY_DATABASE_URI": os.getenv("SQLALCHEMY_DATABASE_URI"),
            "SQLALCHEMY_TRACK_MODIFICATIONS": False,
        }
    )
)

default_pw = generate_password_hash("123", method="sha256")

user = User("testuser", "test@test.com", default_pw)
db.session.add(user)
db.session.commit()

dentist = Dentist("dentist_name", "last_name")
dentist.user = user
db.session.add(dentist)
db.session.commit()
print(User.query.all())
print(Dentist.query.all())
print(dentist.user)
print(user.dentist)
db.session.close()
db.engine.dispose()
