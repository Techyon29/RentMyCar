from pydantic import BaseModel,Field
from typing import Annotated,Literal

class userRegistrationModel(BaseModel):
    name: str
    email : str
    password : str
    type: Annotated[str,Field(...,title='Can be Customer or Car Agency'),Literal['customer','car agency']]

class userOutputModel(BaseModel):
    name: str
    email : str
    type : str

class userLoginModel(BaseModel):
    email: str
    password : str
    type : str