from shared.database import Base
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


class Candidate(Base):
    __tablename__ = "candidate"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    thumbnail = Column(String)

    team_id = Column(Integer, ForeignKey("team.id"))
    team = relationship("Team", back_populates="candidates")
