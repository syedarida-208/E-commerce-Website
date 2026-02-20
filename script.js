const productList = document.getElementById("product-list");

async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    const products = await res.json();
    displayProducts(products);
  } catch (err) {
    console.log("Error:", err);
  }
}

function displayProducts(products) {
  productList.innerHTML = "";

  products.forEach(product => {
    productList.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <p class="fw-bold">$${product.price}</p>
            <a href="product.html?id=${product.id}" class="btn btn-primary btn-sm">
              View Details
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

fetchProducts();






































