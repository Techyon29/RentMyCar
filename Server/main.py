from fastapi import FastAPI
from src.utils.setting import setting
from src.utils.db import base,engine
from src.userData.userRouter import userRouter
base.metadata.create_all(engine)

app = FastAPI()
app.include_router(userRouter)


@app.get('/')
def handleHome():
    return {'message':'Server is Running'}
