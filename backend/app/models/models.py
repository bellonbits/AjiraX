import enum
import uuid
from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Text, Decimal, Integer, Enum, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base

class UserRole(str, enum.Enum):
    CLIENT = "CLIENT"
    FREELANCER = "FREELANCER"
    ADMIN = "ADMIN"

class JobStatus(str, enum.Enum):
    OPEN = "OPEN"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"

class ApplicationStatus(str, enum.Enum):
    PENDING = "PENDING"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"

class OrderStatus(str, enum.Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    DELIVERED = "DELIVERED"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"

class EscrowStatus(str, enum.Enum):
    HELD = "HELD"
    RELEASED = "RELEASED"
    REFUNDED = "REFUNDED"
    DISPUTED = "DISPUTED"

class TransactionStatus(str, enum.Enum):
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

class User(Base):
    __tablename__ = "users"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    full_name = Column(String, nullable=False)
    role = Column(Enum(UserRole), nullable=False)
    is_verified = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    profile = relationship("FreelancerProfile", back_populates="user", uselist=False)
    wallet = relationship("Wallet", back_populates="user", uselist=False)

class FreelancerProfile(Base):
    __tablename__ = "freelancer_profiles"
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), primary_key=True)
    bio = Column(Text)
    hourly_rate = Column(Decimal(10, 2))
    location_county = Column(String)
    avatar_url = Column(String)
    rating = Column(Decimal(3, 2), default=0.00)
    review_count = Column(Integer, default=0)

    user = relationship("User", back_populates="profile")
    skills = relationship("Skill", secondary="freelancer_skills")

class Skill(Base):
    __tablename__ = "skills"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)

class FreelancerSkill(Base):
    __tablename__ = "freelancer_skills"
    freelancer_id = Column(UUID(as_uuid=True), ForeignKey("freelancer_profiles.user_id"), primary_key=True)
    skill_id = Column(Integer, ForeignKey("skills.id"), primary_key=True)

class Job(Base):
    __tablename__ = "jobs"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    client_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    budget_min = Column(Decimal(10, 2))
    budget_max = Column(Decimal(10, 2))
    status = Column(Enum(JobStatus), default=JobStatus.OPEN)
    category = Column(String)
    deadline = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    applications = relationship("JobApplication", back_populates="job")

class JobApplication(Base):
    __tablename__ = "job_applications"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    job_id = Column(UUID(as_uuid=True), ForeignKey("jobs.id"))
    freelancer_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    proposal_text = Column(Text, nullable=False)
    bid_amount = Column(Decimal(10, 2), nullable=False)
    estimated_days = Column(Integer)
    status = Column(Enum(ApplicationStatus), default=ApplicationStatus.PENDING)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    job = relationship("Job", back_populates="applications")

class Wallet(Base):
    __tablename__ = "wallets"
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), primary_key=True)
    balance = Column(Decimal(15, 2), default=0.00)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="wallet")

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    mpesa_receipt_number = Column(String, unique=True)
    checkout_request_id = Column(String, unique=True)
    amount = Column(Decimal(10, 2), nullable=False)
    phone_number = Column(String, nullable=False)
    type = Column(String) # DEPOSIT, WITHDRAWAL
    status = Column(Enum(TransactionStatus), default=TransactionStatus.PENDING)
    raw_response = Column(JSON)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class EscrowRecord(Base):
    __tablename__ = "escrow_records"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    transaction_id = Column(UUID(as_uuid=True), ForeignKey("transactions.id"))
    client_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    freelancer_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    job_id = Column(UUID(as_uuid=True), ForeignKey("jobs.id"), nullable=True)
    amount = Column(Decimal(10, 2), nullable=False)
    status = Column(Enum(EscrowStatus), default=EscrowStatus.HELD)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    released_at = Column(DateTime(timezone=True), nullable=True)
