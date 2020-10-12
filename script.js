'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    ];

const renderProduct = (item, img ='https://picsum.photos/200/300') => 
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products); 