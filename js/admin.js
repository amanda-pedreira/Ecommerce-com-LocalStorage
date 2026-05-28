function carregarRelatorio() {
    const lista = document.getElementById('lista-produtos-localStorage'); 

    const estoqueManual = JSON.parse(localStorage.getItem('produtos_custom')) || []; 

    lista.innerHTML = ""; // Usamos isso pra limpar a lista antes, porque se não fica repetindo os produtos toda vez que a gente cadastrar um novo

    estoqueManual.forEach((prod, index) => { // Percorre cada produto salvo para criar o visual dele
        const item = document.createElement('div');
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "space-between";
        item.style.padding = "10px";
        item.style.borderBottom = "1px solid #ddd";

        // Adicionamos uma miniatura no relatório para ficar mais visual
        item.innerHTML = `
            <img src="${prod.img}" style="width: 40px; height: 40px; object-fit: cover; margin-right: 10px;">
            <span style="flex-grow: 1;"><strong>${prod.nome}</strong> - R$ ${prod.preco}</span>
            <button onclick="removerProduto(${index})" style="color: red; border: none; background: none; cursor: pointer;">[Remover]</button>
        `;
        lista.appendChild(item);
    });
}

const formAdmin = document.getElementById('formAdmin-produtos');
    formAdmin.onsubmit = function(e) {
        e.preventDefault();

        const novo = {
            nome: document.getElementById('nome-novo').value,
            preco: document.getElementById('preco-novo').value,
            // Pega o caminho da imagem ou usa uma padrão
            img: document.getElementById('img-novo').value || 'img/sem-foto.jpg'
        };

        let estoqueManual = JSON.parse(localStorage.getItem('produtos_custom')) || [];
        estoqueManual.push(novo);
        localStorage.setItem('produtos_custom', JSON.stringify(estoqueManual));
        
        alert("Produto cadastrado com sucesso!");
        this.reset();
        carregarRelatorio();
    };


window.removerProduto = function(index) {
    let estoqueManual = JSON.parse(localStorage.getItem('produtos_custom')) || [];
    estoqueManual.splice(index, 1);
    localStorage.setItem('produtos_custom', JSON.stringify(estoqueManual));
    carregarRelatorio();
};

window.onload = carregarRelatorio;
