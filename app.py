from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models.comment import Comment
from models.post import Post
from resources import post
from resources import comment


app = Flask(__name__)

CORS(app)
api = Api(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/openbook'
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(post.Posts, '/posts')
api.add_resource(post.PostDetail, '/posts/<int:post_id>')
api.add_resource(comment.Comments, '/comments')
api.add_resource(comment.CommentDetail, '/comments/<int:comment_id>')

if __name__ == '__main__':
    app.run(debug=True)
