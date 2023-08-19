const apiUrl = 'https://dummyjson.com/products';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
    <img src="${product.images[0]}" width="100px" height="100px" alt="">
    <img src="${product.thumbnail}" width="100px" height="100px" alt="">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <button class="view-details" data-product-id="${product.id}">View Details</button>
  `;
    return card;
}

function handleCardClick(event) {
    const productId = event.target.getAttribute('data-product-id');
    console.log(productId);
    if (productId) {
        window.location.href = `product_detail.html?id=${productId}`;
    }
}

async function loadProducts() {
    const products = await fetchProducts();
    const productContainer = document.querySelector('.product-list');

    products.products.forEach((product) => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
    productContainer.addEventListener('click', handleCardClick);
}

document.addEventListener('DOMContentLoaded', loadProducts);
