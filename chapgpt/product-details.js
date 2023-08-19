const apiUrl = 'https://dummyjson.com/products';

async function fetchProductDetails(productId) {
    try {
        const response = await fetch(`${apiUrl}/${productId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}

function displayProductDetails(product) {
    const productDetailsContainer = document.querySelector('.product-details');
    const detailsHTML = `
    <img src="${product.images[0]}" width="200px" height="200px" alt="">
    <img src="${product.thumbnail}" width="200px" height="200px" alt="">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <!-- Add more product details here -->`;
    productDetailsContainer.innerHTML = detailsHTML;
}

async function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams)
    const productId = urlParams.get('id');


    if (productId) {
        const product = await fetchProductDetails(productId);
        if (product) {
            displayProductDetails(product);
        } else {
            const productDetailsContainer = document.querySelector('.product-details');
            productDetailsContainer.innerHTML = '<p>Product not found.</p>';
        }
    } else {
        const productDetailsContainer = document.querySelector('.product-details');
        productDetailsContainer.innerHTML = '<p>Invalid product ID.</p>';
    }
}
const d = new Date();
let sTime = d.getTime();
document.addEventListener('DOMContentLoaded', loadProductDetails);
const e = new Date();
let eTime = e.getTime();

console.log(sTime);