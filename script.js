// Listas de receitas doces e salgadas
const receitasDoces = [
  {
    titulo: "Brigadeiro",
    ingredientes: [
      "1 lata de leite condensado",
      "1 colher de sopa de manteiga",
      "3 colheres de sopa de chocolate em pó"
    ]
  },
  {
    titulo: "Bolo de Cenoura",
    ingredientes: [
      "3 cenouras médias",
      "4 ovos",
      "2 xícaras de açúcar",
      "3 xícaras de farinha de trigo",
      "1 colher de sopa de fermento em pó"
    ]
  }
];

const receitasSalgadas = [
  {
    titulo: "Coxinha",
    ingredientes: [
      "500g de frango desfiado",
      "1 xícara de farinha de trigo",
      "Temperos a gosto"
    ]
  },
  {
    titulo: "Pão de Queijo",
    ingredientes: [
      "2 xícaras de polvilho",
      "1 xícara de leite",
      "1 xícara de queijo ralado",
      "2 ovos"
    ]
  }
];

// Função para inserir receitas em um container
function inserirReceitas(lista, container) {
  lista.forEach(receita => {
    const article = document.createElement("article");
    article.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = receita.titulo;

    const ul = document.createElement("ul");
    receita.ingredientes.forEach(ingrediente => {
      const li = document.createElement("li");
      li.textContent = ingrediente;
      ul.appendChild(li);
    });

    const button = document.createElement("button");
    button.classList.add("curtir");
    button.textContent = "Curtir ❤️";

    button.addEventListener("click", () => {
      button.textContent = "Curtido ❤️";
      button.disabled = true;
    });

    article.appendChild(h2);
    article.appendChild(ul);
    article.appendChild(button);
    container.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Detecta o container de doces e insere as receitas doces
  const docesSection = document.querySelector("#doces");
  if (docesSection) {
    inserirReceitas(receitasDoces, docesSection);
  }

  // Detecta o container de salgados e insere as receitas salgadas
  const salgadosSection = document.querySelector("#salgados");
  if (salgadosSection) {
    inserirReceitas(receitasSalgadas, salgadosSection);
  }

  // Configura o formulário de contato, caso exista na página
  const formContato = document.getElementById("formContato");
  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      formContato.reset();
    });
  }
});
