from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker
from src.utils.setting import setting

base = declarative_base()
engine = create_engine(url=setting.DB_URL)
LocalSession = sessionmaker(bind=engine)

def get_DB():
    session = LocalSession()
    try:
        yield session
    finally:
        session.close()