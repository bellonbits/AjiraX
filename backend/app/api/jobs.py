from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models import models
from app.schemas import schemas
from uuid import UUID

router = APIRouter()

@router.get("/", response_model=List[schemas.JobOut])
def get_jobs(db: Session = Depends(get_db)):
    return db.query(models.Job).all()

@router.post("/", response_model=schemas.JobOut)
def create_job(job_in: schemas.JobCreate, client_id: UUID, db: Session = Depends(get_db)):
    # In reality, client_id would come from JWT token
    db_job = models.Job(**job_in.dict(), client_id=client_id)
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

@router.post("/apply", response_model=schemas.ApplicationOut)
def apply_to_job(app_in: schemas.ApplicationCreate, freelancer_id: UUID, db: Session = Depends(get_db)):
    # Check if job exists
    job = db.query(models.Job).filter(models.Job.id == app_in.job_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    
    db_app = models.JobApplication(**app_in.dict(), freelancer_id=freelancer_id)
    db.add(db_app)
    db.commit()
    db.refresh(db_app)
    return db_app
