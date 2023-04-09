let Comment = require('./Comment');
const Author = require('./Author');
class Post{
  constructor(title,body,author){
    this.title = title
    this.body = body
    this.author = author
    this.comentarios = [];
    this.data = new Date();
  }
  addComment(author,comentario){
    this.comentarios.push(new Comment(author,comentario));
  }
}
module.exports = Post;