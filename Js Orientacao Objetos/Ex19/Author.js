let Post = require('./post');
class Author{
  constructor(nome){
    this.nome = nome
    this.posts = [];
  }
  createPost(title,body){
    let novoPost = new Post(title,body,this);
    this.posts.push(novoPost);
    return novoPost
  }

}
module.exports = Author;