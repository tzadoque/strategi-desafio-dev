from fastapi import APIRouter, HTTPException

candidates_router = APIRouter()
from typing import List

from fastapi import Depends
from sqlalchemy.orm import Session

from app.models import CandidateModel, TeamModel
from app.schemas import CandidateSchema, CandidateUpdateSchema
from database.dependencies import get_db


@candidates_router.get("", description="list all candidates")
def list_all_candidates(db: Session = Depends(get_db)):
    return db.query(CandidateModel).all()


@candidates_router.get("/avaliable", description="list all available candidates")
def list_avaliable_candidates(db: Session = Depends(get_db)):
    return db.query(CandidateModel).filter_by(team_id=None).all()


@candidates_router.get("/{candidate_id}", description="get candidate by id")
def get_candidate_by_id(candidate_id: int, db: Session = Depends(get_db)):

    candidate = db.query(CandidateModel).filter_by(candidate_id=candidate_id).first()

    if candidate:
        return candidate
    else:
        raise HTTPException(
            status_code=404,
            detail="Candidate not found",
        )


@candidates_router.post("", description="add new candidate")
def add_candidate(request: CandidateSchema, db: Session = Depends(get_db)):
    newCandidate = CandidateModel(**request.dict())

    db.add(newCandidate)
    db.commit()
    db.refresh(newCandidate)

    return {"message": "Hero added to candidate list", "newCandidate": newCandidate}


@candidates_router.put("/{candidate_id}", description="add candidate to a team")
def add_candidate_to_team(
    candidate_id: int, request: CandidateUpdateSchema, db: Session = Depends(get_db)
):

    candidate = db.query(CandidateModel).filter_by(candidate_id=candidate_id).first()
    team = db.query(TeamModel).filter_by(team_id=request.team_id).first()

    if candidate and team:
        if candidate.team_id:
            raise HTTPException(
                status_code=409,
                detail=f"The hero '{candidate.name}' is already in a team. You need to remove him from this team first to add him to another one.",
            )
        else:
            candidate.team_id = request.team_id

            db.commit()
            db.refresh(candidate)

            return {
                "message": f"The candidate '{candidate.name}' has been added to the team '{team.name}'",
                "candidate": candidate,
            }
    else:
        raise HTTPException(
            status_code=404,
            detail="Candidate or team not found",
        )


@candidates_router.delete("/{candidate_id}", description="remove candidate")
def remove_candidate(candidate_id: int, db: Session = Depends(get_db)):
    candidate = db.query(CandidateModel).filter_by(candidate_id=candidate_id).first()

    if candidate:
        db.delete(candidate)
        db.commit()

        return {"message": "Hero removed from list"}
    else:
        raise HTTPException(
            status_code=404,
            detail="Candidate not found",
        )
