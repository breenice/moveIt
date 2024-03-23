var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'index.html');
var SerialPort = require('serialport');

var port = new SerialPort('COM4',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n'
});

parser.on('data', function(data) {
    console.log('data stream: ' + data);
});
