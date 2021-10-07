from datetime import datetime
from models.db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    like = db.Column(db.Integer, nullable=False)
    dislike = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())

    comments = db.relationship(
        'Comment', cascade='all', backref=db.backref('comments', lazy=True))

    def __init__(self, content, name, like, dislike):
        self.content = content
        self.name = name
        self.like = like
        self.dislike = dislike

    def json(self):
        return {"id": self.id, "content": self.content, "name": self.name, "like": self.like, "dislike": self.dislike, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        posts = Post.query.all()
        return [p.json() for p in posts]

    @classmethod
    def find_by_id(cls, post_id):
        post = Post.query.filter_by(id=post_id).first()
        return post
