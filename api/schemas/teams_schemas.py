from pydantic import BaseModel


class TeamResponse(BaseModel):
    id: str
    name: str
    description: str

    class Config:
        orm_mode = True


class TeamRequest(BaseModel):
    name: str
    description: str

    class Config:
        orm_mode = True
