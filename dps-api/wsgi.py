from dps_api import create_app
import os

db_url = os.getenv("DATABASE_URL").replace("://", "ql://", 1) or os.getenv(
    "SQLALCHEMY_DATABASE_URI"
)
app = create_app(
    config={
        "SQLALCHEMY_DATABASE_URI": db_url,
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }
)
app.app_context().push()
