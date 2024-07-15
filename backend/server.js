const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const port = 4000;
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO with CORS settings
const io = socketIo(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

// Apply CORS middleware to the Express app
app.use(cors({
    origin: ["http://localhost:3000"]
}));

// Handle Socket.IO connections
io.on("connection", (socket) => {
    console.log(`WebSocket is connected: ${socket.id}`);
    
    // Handle 'send-message' event
    socket.on("send-message", (room, message) => {
        if (room === '') {
            socket.broadcast.emit("receive-message", message);
        } else {
            socket.to(room).emit("receive-message", message);
        }
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
