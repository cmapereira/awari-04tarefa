//posts items assigned to an array of objects
const posts = [
  {
    title: "O que é HTML?",
    resume: "A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet...",
    href:" html.html"
  },

  {
    title: "O que é CSS?",
    resume: "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação...",
    href: "css.html"
  },

  {
    title: "O que é JS?",
    resume: "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores...",
    href: "js.html"
  }
];

//getting element from HTML
var wrapper = document.getElementById("js-posts");

//iterating over the array
for (var i = 0; i < posts.length; i++){
  var data = posts[i];

//rendering posts info 
  var template = `<div class="card-post">
                    <div class="card-title">
                      <h3>${ data.title }</h3>
                    </div>
                    <div class="card-body">
                      <p>${ data.resume }</p>
                    </div>
                    <div class="card-btn">
                      <a href="${data.href}">Saiba Mais</a>
                    </div>
                  </div>
                  `
  wrapper.innerHTML += template;
};

