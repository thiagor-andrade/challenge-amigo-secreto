//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.
//Funcionalidades: 
//Adicionar nomes:Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
//Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

let nomes_amigos = []; // Arrey nomes dos amigos

function adicionarAmigo() {    
    const nomeAmigo = document.getElementById('amigo').value;// Obtém o valor do nome digitado no campo de texto
    
        if (nomeAmigo.trim() !== '') { // Verifica se o campo não está vazio
        // Adiciona o nome à lista (exemplo)
        const listaAmigos = document.getElementById('listaAmigos'); // Adiciona o nome à lista
        const li = document.createElement('li');
        li.textContent = nomeAmigo;
        listaAmigos.appendChild(li);
       
        document.getElementById('amigo').value = '';   // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome!');
    }
}
