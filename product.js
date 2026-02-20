const API_URL = "https://fakestoreapi.com/products";

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function fetchProduct() {
  try {
    const res = await fetch(`${API_URL}/${productId}`);
    const product = await res.json();
    displayProduct(product);
  } catch (err) {
    // console.log("Error fetching product:", err);
  }
}

function displayProduct(product) {
  const detail = document.getElementById("product-detail");
  detail.innerHTML = `
    <div class="col-md-6">
      <img src="${product.image}" class="img-fluid" alt="${product.title}">
    </div>
    <div class="col-md-6">
      <h2>${product.title}</h2>
      <p class="fw-bold">$${product.price}</p>
      <p>${product.description}</p>
      <span class="badge bg-info">${product.category}</span>
    </div>
  `;
}

fetchProduct();








































