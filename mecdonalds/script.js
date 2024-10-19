const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('#show-all');
const buttonMapAll = document.querySelector('#map-all');
const buttonSumAll = document.querySelector('#sum-all');
const totalDisplay = document.getElementById('total-display'); // Para exibir o total

// Função para mostrar todos os itens
function showAll() {
    let myLi = '';
    menuOptions.forEach((product) => {
        myLi += `
            <li class="product-item">
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>
        `;
    });
    list.innerHTML = myLi;

    // Adiciona o evento de clique a cada item da lista
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected'); // Alterna a classe 'selected' ao clicar
            item.style.cursor = 'pointer'; // Muda o cursor para indicar que é clicável
        });
    });
}

// Função para aplicar desconto e mudar a borda
function mapAllItems() {
    let myLi = '';
    const newPrices = menuOptions.map((product) => ({
        name: product.name,
        price: (product.price * 0.9).toFixed(2), // Aplica desconto de 10%
        src: product.src
    }));

    newPrices.forEach((product) => {
        myLi += `
            <li class="product-item" style="border-color: yellow;"> <!-- Borda amarela -->
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="item-price green-price">R$ ${product.price}</p>
            </li>
        `;
    });

    list.innerHTML = myLi;

    // Adiciona o evento de clique a cada item da lista
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected'); // Alterna a classe 'selected' ao clicar
            item.style.cursor = 'pointer'; // Muda o cursor para indicar que é clicável
        });
    });
}

// Função para calcular o total
function sumAllItems() {
    const selectedItems = document.querySelectorAll('.product-item.selected'); // Seleciona os itens clicados
    let total = 0;

    selectedItems.forEach(item => {
        const priceText = item.querySelector('.item-price').innerText; // Obtém o texto do preço
        const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.')); // Converte para número
        total += price; // Adiciona ao total
    });

    totalDisplay.innerText = `Total: R$ ${total.toFixed(2)}`; // Mostra o total
}

// Adiciona os eventos aos botões
buttonShowAll.addEventListener('click', showAll);
buttonMapAll.addEventListener('click', mapAllItems);
buttonSumAll.addEventListener('click', sumAllItems);





