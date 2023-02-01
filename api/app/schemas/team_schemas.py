from pydantic import BaseModel


class TeamSchema(BaseModel):
    name: str

    class Config:
        orm_mode = True
