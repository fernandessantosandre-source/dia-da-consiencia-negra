// Seleciona o botão através do ID criado no HTML
const botao = document.getElementById('btn-mudar-cor');

// Array com opções de cores para alternar a cada clique (opcional)
const cores = ['#804e15', '#4f3f14', '#6f0599', '#ffffff'];
let indiceCor = 0;

// Adiciona o evento de clique ao botão
botao.addEventListener('click', function() {
    // Altera a cor de fundo do body para a cor atual do array
    document.body.style.backgroundColor = cores[indiceCor];
    
    // Avança para a próxima cor da lista
    indiceCor = (indiceCor + 1) % cores.length;
});