from typing import List

from fastapi import APIRouter, Depends, HTTPException
from models.candidate_model import Candidate
from models.team_model import Team
from schemas.candidates_schemas import CandidateResponse
from schemas.teams_schemas import TeamRequest, TeamResponse
from shared.dependencies import get_db
from shared.exceptions import NotFound
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/", response_model=List[TeamResponse])
def list_teams(db: Session = Depends(get_db)):
    teams = db.query(Team).filter(Team.id != 1).all()
    return teams


@router.get("/all", response_model=List[TeamResponse])
def list_all_teams(db: Session = Depends(get_db)):
    teams = db.query(Team).all()
    return teams


@router.get("/{team_id}", response_model=TeamResponse)
def get_team_by_id(team_id: int, db: Session = Depends(get_db)) -> TeamResponse:
    team = find_team_by_id(team_id, db)

    return team


@router.get("/{team_id}/heroes", response_model=List[CandidateResponse])
def get_all_team_heroes(team_id: int, db: Session = Depends(get_db)):
    team_heroes = db.query(Candidate).filter_by(team_id=team_id).all()

    return team_heroes


@router.post("/", response_model=TeamResponse, status_code=201)
def create_team(
    team_request: TeamRequest, db: Session = Depends(get_db)
) -> TeamResponse:
    if not team_request.name or not team_request.description:
        raise HTTPException(status_code=400, detail="Name and description are required")

    team = Team(name=team_request.name, description=team_request.description)

    db.add(team)
    db.commit()
    db.refresh(team)

    return team


@router.put("/{team_id}", response_model=TeamResponse, status_code=200)
def update_team(
    team_id: int, team_request: TeamRequest, db: Session = Depends(get_db)
) -> TeamResponse:
    if not team_request.name or not team_request.description:
        raise HTTPException(status_code=400, detail="Name and description are required")

    team = find_team_by_id(team_id, db)

    team.name = team_request.name
    team.description = team_request.description

    db.add(team)
    db.commit()
    db.refresh(team)

    return team


@router.delete("/{team_id}", status_code=204)
def delete_team(team_id: int, db: Session = Depends(get_db)) -> None:
    team = find_team_by_id(team_id, db)

    if team.id != 1:
        db.delete(team)
        db.commit()


def find_team_by_id(team_id: int, db: Session) -> Team:
    team: Team = db.query(Team).get(team_id)

    if team is None:
        raise NotFound("Team")

    return team
