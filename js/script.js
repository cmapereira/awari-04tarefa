const posts = [
  {
    title: "O que é HTML?",

    resume: "A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet...",

    content: "A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento. O HTML não é considerado uma linguagem de programação, já que ele não pode criar funcionalidades dinâmicas. Ao invés disso, com o HTML, os usuários podem criar e estruturar seções, parágrafos e links usando elementos, tags e atributos.Confira abaixo alguns dos usos mais comuns para o HTML:Desenvolvimento web. Os desenvolvedores usam códigos HTML para projetar como um navegador vai exibir os elementos das páginas, como textos, hiperlinks e arquivos de mídia.Navegação na internet. Os usuários podem navegar facilmente e inserir links entre páginas e sites relacionados, já que o HTML é amplamente usado para incorporar hiperlinks.Documentação. O HTML torna possível a organização e a formatação de documentos, de maneira similar ao Microsoft Word.Também vale notar que o HTML agora é considerado um padrão oficial da internet. O World Wide Web Consortium (W3C) mantêm e desenvolve especificações do HTML, além de providenciar atualizações regulares.",

   href:" html.html"
  },

  {
    title: "O que é CSS?",

    resume: "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação...",

    content:"CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante. CSS foi desenvolvido pelo W3C (World Wide Web Consortium) em 1996, por uma razão bem simples. O HTML não foi projetado para ter tags que ajudariam a formatar a página. Você deveria apenas escrever a marcação para o site. Tags novas foram introduzidas na versão 3.2 do HTML e causaram muitos problemas para os desenvolvedores. Como os sites tinham diferentes fontes, cores e estilos, era um processo longo, doloroso e caro para reescrever o código. Assim, o CSS foi criado pelo W3C para resolver este problema.A relação entre HTML e CSS é bem forte. Como o HTML é uma linguagem de marcação (o alicerce de um site) e o CSS é focado no estilo (toda a estética de um site), eles andam juntos.CSS não é tecnicamente uma necessidade, mas provavelmente você não gostaria de olhar para um site que usa apenas HTML, pois isso pareceria completamente abandonado.",

    href: "css.html"
  },

  {
    title: "O que é JS?",

    resume: "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores...",

    content: "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web. Segundo a Mozilla Foundation, atual nome da antiga Netscape Communications Corporations, empresa responsável pela criação do JS, JavaScript é uma linguagem de programação, leve, interpretada, orientada a objetos, baseada em protótipos e em first-class functions (funções de primeira classe), mais conhecida como a linguagem de script da Internet. Com seus scripts é possível incluir, em uma página estática, elementos dinâmicos como mapas, formulários, operações numéricas, animações, infográficos interativos e muito mais. O JavaScript é uma das mais importantes tecnologias voltadas para o front-end e, unindo-se ao trio HTML, CSS e PHP, formam um grupo de linguagens que abrangem praticamente todas as exigências do desenvolvimento de uma página completa, dinâmica e com boa performance.Do final dos anos 90 até meados dos anos 2000, o JS ganhou grande popularidade ao ser utilizado por grandes empresas para a construção de seus sites, como o Facebook, por exemplo.",

    href: "js.html"
  }
];

var wrapper = document.getElementById("js-posts");

for (var i = 0; i < posts.length; i++){
  var data = posts[i];

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
       
   


