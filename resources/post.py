from flask import request
from flask_restful import Resource
from models.db import db
from sqlalchemy.orm import joinedload
from models.post import Post


class Posts(Resource):
    def get(self):
        data = Post.query.options(joinedload('comments')).all()
        posts = [{**d.json()} for d in data]
        for i in range(len(posts)):
            comments = [c.json() for c in data[i].comments]
            posts[i]["comments"] = comments
        return posts

    def post(self):
        data = request.get_json()
        print(data)
        post = Post(data['content'], data['name'], 0, 0)
        post.create()
        return post.json(), 201


class PostDetail(Resource):
    def get(self, post_id):
        post = Post.query.options(
            joinedload('comments')).filter_by(id=post_id).first()
        print(post)
        comments = [p.json() for p in post.comments]
        return {**post.json(), "comments": comments}

    def put(self, post_id):
        data = request.get_json()
        post = Post.find_by_id(post_id)
        for key in data:
            setattr(post, key, data[key])
        db.session.commit()
        return post.json()

    def delete(self, post_id):
        post = Post.find_by_id(post_id)
        if not post:
            return {"msg": "Post not found"}, 404
        db.session.delete(post)
        db.session.commit()
        return {"msg": "Post Deleted", "payload": post_id}
