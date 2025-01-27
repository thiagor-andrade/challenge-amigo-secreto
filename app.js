//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.
//Funcionalidades: 
//Adicionar nomes:Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
//Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

let nomes_amigos = []; // Arrey nomes dos amigos

function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Pega o nome digitado no campo de texto
    const nome = input.value.trim(); // Remove espaços extras do começo e do fim

    if (nome === '') {
        alert('Por favor, digite um nome válido!'); // Se o campo estiver vazio, avisa o usuário
        return; // Sai da função
    }

    nomes_amigos.push(nome); // Adiciona o nome na lista
    mostrarLista(); // Atualiza a lista na tela
    input.value = ''; // Limpa o campo de texto para o próximo nome
}

