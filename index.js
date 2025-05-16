const express = require("express");
const path = require("path");
const { createServer } = require("http");

const usersRouter = require("./server/routes/users.router");
const { initSocketInstance } = require("./server/services/socket.service");

const PORT = process.env.PORT || 5050;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

// Routes
app.use("/", usersRouter);

// Initialize Socket.IO
initSocketInstance(httpServer);

// Start server
httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);