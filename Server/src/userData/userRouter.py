from fastapi import APIRouter,status,requests,Depends
from fastapi.responses import Response
from fastapi.responses import Response
from src.userData.dto import userRegistrationModel
from src.userData.dto import userOutputModel
from src.userData.dto import userLoginModel
from src.utils.db import get_DB
from src.userData import controller
from sqlalchemy.orm import Session
userRouter = APIRouter(prefix='/user')

@userRouter.post('/registration',status_code=status.HTTP_201_CREATED)
def handleRegistration(user : userRegistrationModel,db : Session = Depends(get_DB) ):
    return controller.handleRegistration(user,db)

@userRouter.get('/login')
def handleLogin(user : userLoginModel, response : Response ,db : Session = Depends(get_DB)):
    return controller.handleLogin(user,response,db)

@userRouter.get("/test-cookie")
def test_cookie(response: Response):
    response.set_cookie(
        key="test_cookie",
        value="hello_world",
        httponly=True,
        secure=False,
        samesite="lax",
        max_age=3600
    )
    return {"message": "Cookie should be set"}