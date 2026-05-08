import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "AjiraX API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-super-secret-key-for-jwt")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days

    # Database
    POSTGRES_USER: str = os.getenv("POSTGRES_USER", "postgres")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD", "password")
    POSTGRES_SERVER: str = os.getenv("POSTGRES_SERVER", "localhost")
    POSTGRES_PORT: str = os.getenv("POSTGRES_PORT", "5432")
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "ajirax")
    DATABASE_URL: str = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"

    # Redis
    REDIS_HOST: str = os.getenv("REDIS_HOST", "localhost")
    REDIS_PORT: int = int(os.getenv("REDIS_PORT", 6379))

    # M-Pesa Daraja API
    DARAJA_CONSUMER_KEY: str = os.getenv("DARAJA_CONSUMER_KEY", "")
    DARAJA_CONSUMER_SECRET: str = os.getenv("DARAJA_CONSUMER_SECRET", "")
    DARAJA_PASS_KEY: str = os.getenv("DARAJA_PASS_KEY", "")
    DARAJA_SHORTCODE: str = os.getenv("DARAJA_SHORTCODE", "")
    DARAJA_B2C_SHORTCODE: str = os.getenv("DARAJA_B2C_SHORTCODE", "")
    DARAJA_INITIATOR_NAME: str = os.getenv("DARAJA_INITIATOR_NAME", "")
    DARAJA_INITIATOR_PASSWORD: str = os.getenv("DARAJA_INITIATOR_PASSWORD", "")
    DARAJA_ENVIRONMENT: str = "sandbox" # sandbox or production

    class Config:
        case_sensitive = True

settings = Settings()
