from datetime import datetime
from models.db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    content = db.Column(db.Text, nullable=False)
    like = db.Column(db.Integer, nullable=False)
    dislike = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)

    posts = db.relationship('Post', backref=db.backref('posts', lazy=True))

    def __init__(self, name, content, like, dislike, post_id):
        self.name = name
        self.content = content
        self.like = like
        self.dislike = dislike
        self.post_id = post_id

    def json(self):
        return {"id": self.id, "name": self.name, "content": self.content, "like": self.like, "dislike": self.dislike, "post_id": self.post_id, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        comments = Comment.query.all()
        return [c.json() for c in comments]

    @classmethod
    def find_by_id(cls, comment_id):
        comment = Comment.query.filter_by(id=comment_id).first()
        return comment
