from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:NXXqnYS5kF3zX72TtWFBabX7YYevGRmobW2sS7dSeGLJUoYDpaAJdjGLu9GDtq56@35.247.205.157/heroes-manager-db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
