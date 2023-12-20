const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
	console.log('User connected');
	socket.on('disconnect', () => {
		console.log('User disconnected.');
	});

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
});

http.listen(3000, () => {
	console.log('Chat server running at http://localhost:3000');
});

// TODO:
/*
1. Customize HTML interface
2. User authentication
3. Implement contact list
 */
