from src.userData.dto import userRegistrationModel
from src.userData.dto import userLoginModel
from src.utils.db import get_DB
from sqlalchemy.orm import Session
from src.userData.model import userSchema
from fastapi import HTTPException,status
from fastapi.responses import JSONResponse,Response
from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()

def verifyPassword(plain_password,hash_password):
        return password_hash.verify(plain_password,hash_password)
def getHashPassword(password : str):
        return password_hash.hash(password)

def handleRegistration(user : userRegistrationModel, db : Session):
        try:
            exist_user = db.query(userSchema).filter(userSchema.email == user.email).first()
            if exist_user:
                 raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='User Already Exist')
            hash_password = getHashPassword(user.password)
            userData = userSchema(name = user.name,email = user.email,password = hash_password,type = user.type)
            db.add(userData)
            db.commit()
            db.refresh(userData)
            return {"message":'User Created Successfully'}
        except HTTPException as e:
             return e
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=str(e))

def handleLogin(user : userLoginModel,response : Response,db :Session):
    try:
        data_user = db.query(userSchema).filter(userSchema.email == user.email).first()
        if not data_user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail='No User')
        verify_password = verifyPassword(user.password,data_user.password)

        if not verify_password:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail='Wrong Password')
        
        response.set_cookie(
        key="test_cookie",
        value="hello_world1",
        httponly=True,
        secure=False,
        samesite="lax",
        max_age=3600)
        return {"message":"Login SuccessFull"}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail='Error')
    