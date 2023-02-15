from typing import List

from fastapi import APIRouter, Depends, HTTPException
from models.candidate_model import Candidate
from schemas.candidates_schemas import (
    AddCandidateToTeamRequest,
    CandidateRequest,
    CandidateResponse,
)
from shared.dependencies import get_db
from shared.exceptions import NotFound
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/", response_model=List[CandidateResponse])
def list_candidates(db: Session = Depends(get_db)):
    candidates = db.query(Candidate).all()
    return candidates


@router.get("/avaliable", response_model=List[CandidateResponse])
def list_avaliable_candidates(db: Session = Depends(get_db)):
    candidates = db.query(Candidate).filter_by(team_id=None).all()

    return candidates


@router.get("/{candidate_id}", response_model=CandidateResponse)
def get_candidate_by_id(
    candidate_id: int, db: Session = Depends(get_db)
) -> CandidateResponse:
    candidate = find_candidate_by_id(candidate_id, db)

    return candidate


@router.post("/", response_model=CandidateResponse, status_code=201)
def create_candidate(
    candidate_request: CandidateRequest, db: Session = Depends(get_db)
) -> CandidateResponse:
    if (
        not candidate_request.name
        or not candidate_request.description
        or not candidate_request.thumbnail
    ):
        raise HTTPException(
            status_code=400, detail="Name, description and thumbnail are required"
        )

    candidate = Candidate(
        name=candidate_request.name,
        description=candidate_request.description,
        thumbnail=candidate_request.thumbnail,
    )

    db.add(candidate)
    db.commit()
    db.refresh(candidate)

    return candidate


@router.post("/{candidate_id}/add", response_model=CandidateResponse, status_code=201)
def add_candidate_to_team(
    candidate_id: int,
    add_candidate_to_team_request: AddCandidateToTeamRequest,
    db: Session = Depends(get_db),
) -> CandidateResponse:
    candidate = find_candidate_by_id(candidate_id, db)
    candidate.team_id = add_candidate_to_team_request.team_id
    db.commit()
    db.refresh(candidate)

    return candidate


@router.put("/{candidate_id}", response_model=CandidateResponse, status_code=200)
def update_candidate(
    candidate_id: int,
    candidate_request: CandidateRequest,
    db: Session = Depends(get_db),
) -> CandidateResponse:
    candidate = find_candidate_by_id(candidate_id, db)

    candidate.name = candidate_request.name
    candidate.description = candidate_request.description
    candidate.thumbnail = candidate_request.thumbnail

    db.add(candidate)
    db.commit()
    db.refresh(candidate)

    return candidate


@router.delete("/{candidate_id}", status_code=204)
def delete_candidate(candidate_id: int, db: Session = Depends(get_db)) -> None:
    candidate = find_candidate_by_id(candidate_id, db)
    db.delete(candidate)
    db.commit()


@router.delete("/{candidate_id}/remove", status_code=204)
def remove_candidate_to_team(candidate_id: int, db: Session = Depends(get_db)) -> None:
    candidate = find_candidate_by_id(candidate_id, db)
    candidate.team_id = None
    db.commit()


def find_candidate_by_id(candidate_id: int, db: Session) -> Candidate:
    candidate: Candidate = db.query(Candidate).get(candidate_id)

    if candidate is None:
        raise NotFound("Candidate")

    return candidate
