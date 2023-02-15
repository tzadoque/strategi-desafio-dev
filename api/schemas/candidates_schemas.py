from pydantic import BaseModel


class CandidateResponse(BaseModel):
    id: str
    name: str
    description: str
    thumbnail: str
    team_id: int | None = None

    class Config:
        orm_mode = True


class CandidateRequest(BaseModel):
    name: str
    description: str
    thumbnail: str

    class Config:
        orm_mode = True


class AddCandidateToTeamRequest(BaseModel):
    team_id: int

    class Config:
        orm_mode: True
