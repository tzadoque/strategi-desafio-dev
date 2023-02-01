from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.sql import text

from database.engine import Base


class CandidateModel(Base):
    __tablename__ = "candidates"

    candidate_id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable=False)
    description = Column(String)
    thumbnail_url = Column(String, nullable=False)
    team_id = Column(Integer, ForeignKey("teams.team_id"))
    added_at = Column(DateTime, server_default=text("now()"), nullable=False)
