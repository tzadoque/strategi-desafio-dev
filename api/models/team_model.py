from shared.database import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship


class Team(Base):
    __tablename__ = "team"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)

    candidates = relationship("Candidate", back_populates="team")
