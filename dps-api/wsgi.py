from dps_api import create_app
import os

if os.getenv("FLASK_ENV"):
    db_url = os.getenv("SQLALCHEMY_DATABASE_URI")
else:
    db_url = os.getenv("DATABASE_URL").replace("://", "ql://", 1)

app = create_app(
    config={
        "SQLALCHEMY_DATABASE_URI": db_url,
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }
)
app.app_context().push()
