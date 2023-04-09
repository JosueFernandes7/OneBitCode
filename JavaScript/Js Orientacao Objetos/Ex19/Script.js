const Author = require('./Author');

const john = new Author("John Doe");

const pedro = new Author("Pedro Certezas");
const postPedro = pedro.createPost("Title","gremio")

const post = john.createPost("Titulo","Lorem")

post.addComment(pedro,"Top");

// console.log(john);
console.log(post.comentarios[0].author.posts[0]);