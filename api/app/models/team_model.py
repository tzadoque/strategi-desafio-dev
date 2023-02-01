import enum

from sqlalchemy import Column, Date, DateTime, Enum, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import text

from database.engine import Base


class Types(enum.Enum):
    avengers = "avengers"
    team = "team"


class TeamModel(Base):
    __tablename__ = "teams"

    team_id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    name = Column(String, nullable=False)
    type = Column(Enum(Types), nullable=False)
    members = relationship("CandidateModel", backref="member", lazy="subquery")
    created_at = Column(DateTime, server_default=text("now()"), nullable=False)
