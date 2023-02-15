import uvicorn
from fastapi import FastAPI
from routers import candidates_router, teams_router
from shared.exceptions import NotFound
from shared.exceptions_handler import not_found_exception_handler

app = FastAPI()


@app.get("/")
def hello():
    return {"message": "Hello world! Access the /docs path to test this API"}


app.include_router(teams_router.router, prefix="/teams", tags=["Teams"])
app.include_router(candidates_router.router, prefix="/candidates", tags=["Candidates"])
app.add_exception_handler(NotFound, not_found_exception_handler)


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
