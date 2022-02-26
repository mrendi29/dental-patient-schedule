from dps_api import create_app
import os

app = create_app(
    config={
        "SQLALCHEMY_DATABASE_URI": os.getenv("DATABASE_URL")
        or os.getenv("SQLALCHEMY_DATABASE_URI"),
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }
)
app.app_context().push()
