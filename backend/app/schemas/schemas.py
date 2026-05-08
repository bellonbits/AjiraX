from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from uuid import UUID
from datetime import datetime
from app.models.models import UserRole

class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    phone: str
    role: UserRole

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class UserOut(UserBase):
    id: UUID
    is_verified: bool
    created_at: datetime

    class Config:
        from_attributes = True

class FreelancerProfileBase(BaseModel):
    bio: Optional[str] = None
    hourly_rate: Optional[float] = None
    location_county: Optional[str] = None
    avatar_url: Optional[str] = None

class FreelancerProfileUpdate(FreelancerProfileBase):
    pass

class FreelancerProfileOut(FreelancerProfileBase):
    user_id: UUID
    rating: float
    review_count: int
    skills: List[str] = []

    class Config:
        from_attributes = True

class JobBase(BaseModel):
    title: str
    description: str
    budget_min: Optional[float] = None
    budget_max: Optional[float] = None
    category: Optional[str] = None
    deadline: Optional[datetime] = None

class JobCreate(JobBase):
    pass

class JobOut(JobBase):
    id: UUID
    client_id: UUID
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

class ApplicationBase(BaseModel):
    proposal_text: str
    bid_amount: float
    estimated_days: Optional[int] = None

class ApplicationCreate(ApplicationBase):
    job_id: UUID

class ApplicationOut(ApplicationBase):
    id: UUID
    job_id: UUID
    freelancer_id: UUID
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
