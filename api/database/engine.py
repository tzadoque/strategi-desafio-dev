from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine(
    "postgresql://postgres:NXXqnYS5kF3zX72TtWFBabX7YYevGRmobW2sS7dSeGLJUoYDpaAJdjGLu9GDtq56@35.247.205.157:5432/heroes-manager-database"
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
