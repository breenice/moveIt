const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// var http = require('http');
// var fs = require('fs');
// var index = fs.readFileSync( 'index.html');
// var SerialPort = require('serialport');

// var port = new SerialPort('COM4',{ 
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// const parsers = SerialPort.parsers;
// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });

// parser.on('data', function(data) {
//     console.log('data stream: ' + data);
// });
