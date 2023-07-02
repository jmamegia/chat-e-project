import express from "express";
import { Server as SocketServer } from "socket.io";
import http from "http";
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    socket.broadcast.emit("message", {
      text: msg.text,
      user: msg.user,
      date: new Date(Date.now()),
      socket_id: socket.id,
    });
  });
});

server.listen(port, () => console.log(`server on port, ${port} `));
