document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("fetch-products");

  button.addEventListener("click", async () => {
    const response = await fetch("/products");
    const products = await response.json();
    console.log(products);
  });
});