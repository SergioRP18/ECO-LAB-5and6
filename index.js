const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const productsRouter = require("./server/routes/products.router");
const usersRouter = require("./server/routes/users.router");

app.use(express.json());
app.use(express.static("public"));

// Rutas
app.use("/products", productsRouter);
app.use("/users", usersRouter);

// Socket.IO
io.on("connection", (socket) => {
  console.log("Usuario conectado");

  socket.on("screenChange", (data) => {
    console.log("Cambio de pantalla:", data);
    socket.broadcast.emit("screenChange", data);
  });
});

const PORT = 5050;
http.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});