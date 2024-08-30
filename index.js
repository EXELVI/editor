const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.set('view engine', 'ejs');

const rooms = {};

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('joinRoom', (room) => {
        socket.join(room);

        if (rooms[room]) {
            socket.emit('textChange', rooms[room].text);
        } else {
            rooms[room] = { text: '', cursors: {} };
        }

        socket.on('textChange', (data) => {
            rooms[room].text = data;
            socket.to(room).emit('textChange', data);
        });

        socket.on('cursorChange', (cursorData) => {
            rooms[room].cursors[socket.id] = cursorData;
            socket.to(room).emit('cursorChange', { id: socket.id, ...cursorData });
        });

        socket.on('disconnect', () => {
            if (rooms[room]) {
                delete rooms[room].cursors[socket.id];
                socket.to(room).emit('cursorRemove', socket.id);
            }
            console.log('user disconnected');
        });
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
