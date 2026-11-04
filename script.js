// Seleciona o botão através do ID criado no HTML
const botao = document.getElementById('btn-mudar-cor');

// Array com opções de cores para alternar a cada clique (opcional)
const cores = ['#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#34495e', '#ffffff'];
let indiceCor = 0;

// Adiciona o evento de clique ao botão
botao.addEventListener('click', function() {
    // Altera a cor de fundo do body para a cor atual do array
    document.body.style.backgroundColor = cores[indiceCor];
    
    // Avança para a próxima cor da lista
    indiceCor = (indiceCor + 1) % cores.length;
});