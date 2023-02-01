from pydantic import BaseModel


class CandidateSchema(BaseModel):
    candidate_id: int
    name: str
    description: str
    thumbnail_url: str

    class Config:
        orm_mode = True


class CandidateUpdateSchema(BaseModel):
    team_id: int
