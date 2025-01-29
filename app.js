//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.
//Funcionalidades: 
//Adicionar nomes:Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
//Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

let nomesAmigos = []; // Array para guardar os nomes dos amigos
let nomesSorteados = []; // Array para guardar os nomes que já foram sorteados

function adicionarAmigo() {    
    const salvarNomeAmigo = document.getElementById('amigo').value; // Obtém o valor do nome digitado no campo de texto
    
    if (salvarNomeAmigo.trim() !== '') { // Verifica se o campo não está vazio
        nomesAmigos.push(salvarNomeAmigo); // Adiciona o nome ao array

        const listaAmigos = document.getElementById('listaAmigos'); // Obtém a lista de amigos no HTML
        const li = document.createElement('li'); // Cria um novo elemento de lista
        li.textContent = salvarNomeAmigo; // Define o texto do elemento como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o elemento à lista
        
        document.getElementById('amigo').value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome!'); // Alerta se o campo estiver vazio
    }
}

function sortearAmigo() {
    if (nomesAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
let indiceAleatorio;
let amigoSorteado;

//garante que o nome não seja repetido
do{
    indiceAleatorio = Math.floor(Math.random() * nomesAmigos.length); //gera um indice aleatótio 
    amigoSorteado = nomesAmigos[indiceAleatorio]; //Seleciona o amigo aleatoriamente
} while (nomesSorteados.includes(amigoSorteado)); //repete até encontrar um nome não sorteado 

nomesSorteados.push(amigoSorteado); //adiciona o nome sorteado a lista de nomes já sorteados
const resultado = document.getElementById('resultado'); // Obtém a lista de resultados
resultado.innerHTML = ''; // Limpa resultados anteriores

const li = document.createElement('li'); // Cria um novo elemento de lista para o resultado
li.textContent = `Você tirou: ${amigoSorteado}`; // Define o texto do resultado
 resultado.appendChild(li); // Adiciona o resultado à lista
}