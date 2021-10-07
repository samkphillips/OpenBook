from flask import request
from flask_restful import Resource
from models.comment import Comment
from models.db import db
from sqlalchemy.orm import joinedload


class Comments(Resource):
    def get(self):
        comments = Comment.find_all()
        return comments

    def post(self):
        data = request.get_json()
        # params = {}
        # for k in data.keys():
        #     params[k] = data[k]
        # comment = Comment(**params)
        # Probably fine but maybe not
        comment = Comment(data['name'], data['content'], 0, 0, data['post_id'])
        comment.create()
        return comment.json(), 201


class CommentDetail(Resource):
    def get(self, comment_id):
        comment = Comment.query.options(joinedload(
            'post')).filter_by(id=comment_id).first()
        return {**comment.json(), "post": comment.post.json()}

    def put(self, comment_id):
        data = request.get_json()
        comment = Comment.find_by_id(comment_id)
        for key in data:
            setattr(comment, key, data[key])
        db.session.commit()
        return comment.json()

    def delete(self, comment_id):
        comment = Comment.find_by_id()
        if not comment:
            return {'msg': 'Comment not found'}, 404
        db.session.delete(comment)
        db.session.commit()
        return {'msg': 'Comment deleted', 'payload': comment_id}
