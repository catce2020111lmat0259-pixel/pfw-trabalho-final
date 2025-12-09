document.body.style.backgroundColor = 'rgba(240, 240, 240, 1)';
document.body.style.color = 'black';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.paddingLeft = '40px';

function getById(id) {
    return document.getElementById(id);
};

// botao add
let botaoAdicionar = getById('adicionarJogo');
botaoAdicionar.style.backgroundColor = "#09b403ff";
botaoAdicionar.style.color = "white";

// montar lista
botaoAdicionar.addEventListener('click', () => {
    let nomeJogo = getById('nomeJogo').value;
    let precoJogo = Number(getById('precoJogo').value);
    let nivelPrioridade = getById('nivelPrioridade').value;

    // tabela
    let tabelaJogos = getById('jogosCadastrados');

    // botao excluir
    let botaoDestacar = document.createElement('button');
    botaoDestacar.innerText = "Destacar";
    botaoDestacar.style.backgroundColor = "rgba(0, 64, 240, 1)";
    botaoDestacar.style.color = "white";
    // botao destacar
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.style.backgroundColor = "rgba(255, 0, 0, 1)";
    botaoExcluir.style.color = "white";

    // criacao da linha
    let linha = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaPreco = document.createElement('td');
    let colunaPrioridade = document.createElement('td');
    let colunaAcoes = document.createElement('td');


    // verificacao 
    if (!nomeJogo || !precoJogo || !nivelPrioridade) {
        getById('mensagemErro').style.color = 'red';
        getById('mensagemErro').innerText = "Preencha todos os campos corretamente!";
    } else {
        // limpa a mensagem de verificacao
        getById('mensagemErro').innerText = '';

        // conteudos da linha
        colunaNome.innerText = nomeJogo;
        colunaPreco.innerText = precoJogo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        colunaPrioridade.innerText = nivelPrioridade;
        // botoes na coluna
        colunaAcoes.appendChild(botaoExcluir);
        colunaAcoes.appendChild(botaoDestacar);

        linha.appendChild(colunaNome);
        linha.appendChild(colunaPreco);
        linha.appendChild(colunaPrioridade);
        linha.appendChild(colunaAcoes);

        // adiciona a linha na tabela
        tabelaJogos.appendChild(linha);

        // limpa os campos
        getById('nomeJogo').value = '';
        getById('precoJogo').value = '';
        getById('nivelPrioridade').value = '';

        // botao excluir
        botaoExcluir.addEventListener('click', () => {
            getById('jogosCadastrados').removeChild(linha);
        });
        // botao destacar 
        let destacado = false;
        botaoDestacar.addEventListener('click', () => {
            if (destacado) {
                linha.style.border = "1px solid black";
                linha.style.fontWeight = "normal";
            } else {
                linha.style.border = "3px solid rgba(201, 0, 0, 1)";
                linha.style.fontWeight = "bold";
            }
            destacado = !destacado;
        });
    }

})
let tabela = getById('jogosCadastrados');
let titulo = getById('title');

titulo.style.fontSize = '40px'; // titulo

// tema da pagina
getById('temaPagina').addEventListener('change', () => {
    let temaPagina = getById('temaPagina').value;
    // temas
    let temas = [getById('d1'), getById('d2'), getById('d3')];

    if (temaPagina === "dark") {
        for (let i = 0; i < temas.length; i++) {
            temas[i].setAttribute('class', 'capsula-2');
        }
        document.body.style.backgroundImage = ''; // limpa rdr2
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        tabela.setAttribute('class', 'tab-2');
        titulo.style.webkitTextStroke = ''; // limpa borda do titulo

    } else if (temaPagina === "neon") {
        for (let i = 0; i < temas.length; i++) {
            temas[i].setAttribute('class', 'capsula-3');
        }
        document.body.style.backgroundImage = "linear-gradient(to right, rgba(140, 0, 255, 1), rgba(0, 255, 157, 1), rgba(255, 0, 200, 1))";
        document.body.style.backgroundSize = "cover"; // toda a tela
        document.body.style.color = 'rgba(253, 0, 0, 1)';
        tabela.setAttribute('class', 'tab-3');
        titulo.style.webkitTextStroke = '1.5px rgba(112, 211, 194, 1)';

    } else if (temaPagina === "rdr-2") {
        for (let i = 0; i < temas.length; i++) {
            temas[i].setAttribute('class', 'capsula-4');
        }
        document.body.style.backgroundImage = "url('read-dead-redemption-2.jpg')";
        document.body.style.backgroundSize = "cover"; // toda a tela
        document.body.style.color = '';
        tabela.setAttribute('class', 'tab-4');
        titulo.style.webkitTextStroke = ''; // limpa borda do titulo

    } else {
        for (let i = 0; i < temas.length; i++) {
            temas[i].setAttribute('class', 'capsula-1');
        }
        document.body.style.backgroundImage = ""; // limpa rdr2
        document.body.style.backgroundColor = 'rgba(240, 240, 240, 1)';
        document.body.style.color = 'black';
        tabela.setAttribute('class', 'tab-1');
        titulo.style.webkitTextStroke = ''; // limpa borda do titulo
    }
})

//

//