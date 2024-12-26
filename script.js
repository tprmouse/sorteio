let amigos = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('adicionarButton').addEventListener('click', adicionar);
    document.getElementById('sortearButton').addEventListener('click', sortear);
});

function adicionar() {
    const textarea = document.getElementById('amigos');
    amigos = textarea.value.split(',').map(amigo => amigo.trim()).filter(amigo => amigo !== "");
    textarea.value = ''; // Limpa a área de texto após adicionar

    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = 'Nomes adicionados com sucesso!';
    mensagemDiv.classList.remove('hidden');
    void mensagemDiv.offsetWidth; // Forçar reflow
    mensagemDiv.classList.add('show');

    setTimeout(() => {
        mensagemDiv.classList.remove('show');
    }, 3000); // Esconde a mensagem após 3 segundos
}

function sortear() {
    const resultadoDiv = document.getElementById('resultado');
    const resultadoSection = document.getElementById('resultado-section');

    // Limpar o resultado anterior após um tempo
    setTimeout(() => {
        resultadoDiv.classList.remove('show');
        resultadoDiv.textContent = '';
    }, 3000); // Esconde o resultado após 3 segundos

    if (amigos.length === 0) {
        resultadoDiv.textContent = 'Todos os nomes já foram sorteados!';
        resultadoSection.classList.remove('hidden');
        resultadoDiv.classList.add('show');
        return;
    }

    if (amigos.length < 2) {
        resultadoDiv.textContent = `Biólogo sorteado: ${amigos[0]}`;
        amigos = []; // Limpa a lista após o último sorteio
        resultadoSection.classList.remove('hidden');
        resultadoDiv.classList.add('show');
        return;
    }

    const indexSorteado = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos.splice(indexSorteado, 1)[0]; // Remove o nome sorteado da lista

    resultadoDiv.textContent = `Biólogo sorteado: ${sorteado}`;
    resultadoSection.classList.remove('hidden');
    void resultadoDiv.offsetWidth; // Forçar reflow
    resultadoDiv.classList.add('show'); // Aplicar nova animação
}
