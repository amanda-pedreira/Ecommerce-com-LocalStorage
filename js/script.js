const produtos = [
    { id: 1, nome: "Whey Protein", preco: 189.90, img: "https://th.bing.com/th/id/OIP.7l_LBNCNlTARpwu7CwTk8AHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3https://th.bing.com/th/id/OIP.7l_LBNCNlTARpwu7CwTk8AHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", categoria: "" },
    { id: 2, nome: "Creatina Monohidratada", preco: 95.00, img: "https://tse1.mm.bing.net/th/id/OIP.SbheUmMLqTmrzeyQTFkS9gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", categoria: "" },
    { id: 3, nome: "Pré-Treino", preco: 129.90, img: "https://tse3.mm.bing.net/th/id/OIP.d9foxfeIDRVI6DMifaEE9QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", categoria: "" },
    { id: 4, nome: "BCAA Recuperação", preco: 65.00, img: "https://tse4.mm.bing.net/th/id/OIP.t-g2cnk7Mr31sSKqB9vunwHaIB?rs=1&pid=ImgDetMain&o=7&rm=3", categoria: "" },
    { id: 5, nome: "Hipercalórico Mass", preco: 85.00, img: "https://tse1.mm.bing.net/th/id/OIP.m04hY_8vMY0Pm4vfRkylwwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", categoria: "" },
    { id: 6, nome: "Multivitamínico", preco: 49.90, img: "https://tse4.mm.bing.net/th/id/OIP.LRkepfu12oiiu0Z3tdQLmwHaL2?rs=1&pid=ImgDetMain&o=7&rm=3", categoria: "" }
];

function carregarProdutos() {
    const listandoProdutos = document.getElementById('lista-produtos');
    if (!listandoProdutos) return;

    produtos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        
        card.innerHTML = `
            <div class="container-foto">
                <img src="${prod.img}" alt="${prod.nome}">
            </div>
            <h3>${prod.nome}</h3>
            <p>${prod.categoria}</p>
            <p class="preco">R$ ${prod.preco.toFixed(2)}</p>
            <a class="button-card" href="../paginas/detalhesProduto.html">Comprar Agora</a>
        `;

        listandoProdutos.appendChild(card);
    });
}

window.reload = carregarProdutos;