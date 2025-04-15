// Product data
const products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        description: "Minimalist design meets comfort in these versatile white sneakers.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        buyLink: "https://www.amazon.com/white-sneakers"
    },
    {
        id: 2,
        name: "Leather Backpack",
        price: 129.99,
        description: "Durable leather backpack perfect for daily use or travel.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
        buyLink: "https://www.amazon.com/leather-backpack"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        price: 199.99,
        description: "Premium wireless headphones with noise cancellation.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        buyLink: "https://www.amazon.com/wireless-headphones"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 299.99,
        description: "Feature-rich smartwatch with health tracking capabilities.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        buyLink: "https://www.amazon.com/smart-watch"
    },
    {
        id: 5,
        name: "Denim Jacket",
        price: 79.99,
        description: "Classic denim jacket with modern fit.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        buyLink: "https://www.amazon.com/denim-jacket"
    },
    {
        id: 6,
        name: "Sunglasses",
        price: 149.99,
        description: "Stylish sunglasses with UV protection.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        buyLink: "https://www.amazon.com/sunglasses"
    }
];

// DOM elements
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');

// Create product cards
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="button-group">
                    <button class="add-to-cart">Add to Cart</button>
                    <a href="${product.buyLink}" target="_blank" class="buy-now">Buy Now</a>
                </div>
            </div>
        </div>
    `;
}

// Display all products
function displayProducts(productsToShow) {
    productsContainer.innerHTML = productsToShow
        .map(product => createProductCard(product))
        .join('');
}

// Filter products based on search
function filterProducts(searchTerm) {
    return products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Initial display
displayProducts(products);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    const filteredProducts = filterProducts(searchTerm);
    displayProducts(filteredProducts);
});