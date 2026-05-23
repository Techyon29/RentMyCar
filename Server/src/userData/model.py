from sqlalchemy import Column,Integer,String
from src.utils.db import base

class userSchema(base):
    __tablename__ = 'usersData'
    id = Column(Integer , primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    type = Column(String)