import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import candidates_router, teams_router

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.include_router(candidates_router, prefix="/candidates", tags=["Candidates"])
app.include_router(teams_router, prefix="/teams", tags=["Teams"])
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app="main:app", reload=True, port=8000, host="localhost")
