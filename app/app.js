const socket = io();

// Escuchar eventos del servidor
socket.on("screenChange", (data) => {
  console.log("Cambio de pantalla:", data);
});

// Ejemplo de interacción con el servidor
const fetchProducts = async () => {
  const response = await fetch("/products");
  const products = await response.json();
  console.log(products);
};

fetchProducts();