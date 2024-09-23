const data = [
  {
    tipo: "Educação",
    tarefa: "Fazer a tarefa de casa",
    status: false
  },
  {
    tipo: "Esporte",
    tarefa: "Fazer caminhada",
    status: true
  },
  {
    tipo: "Esporte",
    tarefa: "Jogar golf",
    status: false
  },
  {
    tipo: "Financeiro",
    tarefa: "Comprar ração do cachorro",
    status: false
  }
];

const btnHome = document.getElementById('btn-home');
const btnCadastro = document.getElementById('btn-cadastro');
const divLista = document.getElementById('lista');

for(const tarefa of data) {
  divLista.innerHTML += `
    <div class="div-tarefa">
      <h3>${tarefa.tipo}</h3>
      <p>${tarefa.tarefa} - ${tarefa.status ? "Concluido" : "Pendente"}</p>
    </div>
  `
};




btnCadastro.addEventListener('click', function () {
  window.location.href = "src/Pages/Cadastro/Cadastro.html"
});


