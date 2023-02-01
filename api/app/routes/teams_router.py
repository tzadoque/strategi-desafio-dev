from fastapi import APIRouter, HTTPException

teams_router = APIRouter()
from fastapi import Depends
from sqlalchemy.orm import Session

from app.models.team_model import TeamModel
from app.schemas import TeamSchema
from database.dependencies import get_db


@teams_router.get("", description="list all teams")
def list_teams(db: Session = Depends(get_db)):
    return db.query(TeamModel).filter(TeamModel.name != "avengers").all()


@teams_router.post("", description="create a team")
def create_team(request: TeamSchema, db: Session = Depends(get_db)):
    newTeam = TeamModel(**request.dict(), type="team")

    db.add(newTeam)
    db.commit()
    db.refresh(newTeam)

    return {"message": "team was created", "newTeam": newTeam}


@teams_router.get("/avengers", description="avengers")
def get_avengers(db: Session = Depends(get_db)):
    avengers = db.query(TeamModel).filter_by(name="avengers").first()

    if avengers:
        return avengers
    else:
        raise HTTPException(
            status_code=404,
            detail="Avengers not found",
        )


@teams_router.get("/{team_id}", description="get team by id")
def get_team_by_id(team_id: int, db: Session = Depends(get_db)):
    team = db.query(TeamModel).filter_by(team_id=team_id).first()

    if team:
        return team
    else:
        raise HTTPException(
            status_code=404,
            detail="Team not found",
        )


@teams_router.delete("/{team_id}", description="delete team by id")
def delete_team(team_id: int, db: Session = Depends(get_db)):
    team = db.query(TeamModel).filter_by(team_id=team_id).first()

    if team:
        db.delete(team)
        db.commit()

        return {"message": "Team has been deleted"}

    else:
        raise HTTPException(
            status_code=404,
            detail="Team not found",
        )
