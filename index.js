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
            socket.emit('fileNameChange', rooms[room].fileName);
            socket.emit('languageChange', rooms[room].language || 'plaintext'); 
            for (const [id, cursor] of Object.entries(rooms[room].cursors)) {
                socket.emit('cursorChange', { id, ...cursor });
            }
        } else {
            rooms[room] = { text: '', cursors: {}, fileName: 'file.txt', language: 'plaintext' };
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

            if (Object.keys(rooms[room]?.cursors || []).length === 0) {
                delete rooms[room];
                console.log('room deleted');
            }
        });

        socket.on("lockRange", (range) => {
            socket.to(room).emit("lockRange", range);
        });

        socket.on("unlockRange", (range) => {
            socket.to(room).emit("unlockRange", range);
        });

        socket.on("fileNameChange", (fileName) => {
            socket.to(room).emit("fileNameChange", fileName);
            rooms[room].fileName = fileName;
        });

        socket.on("languageChange", (language) => {
            socket.to(room).emit("languageChange", language);
            rooms[room].language = language;
        });
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
