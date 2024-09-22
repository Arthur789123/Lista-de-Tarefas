const data = [
  {
    tipo: "Educação",
    tarefa: "Fazer a tarefa de casa",
    status: false,
  },
  {
    tipo: "Esporte",
    tarefa: "Fazer caminhada",
    status: true,
  },
  {
    tipo: "Esporte",
    tarefa: "Jogar golf",
    status: false,
  },
];    

const btnHome = document.getElementById('btn-home');
const btnCadastro = document.getElementById('btn-cadastro');



btnCadastro.addEventListener('click', function () {
  window.location.href = "src/Pages/Cadastro/Cadastro.html"
});