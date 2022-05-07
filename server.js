const http = require('http');
const exec = require('child_process').exec;

let tigervnc_fullpath = '/usr/bin/vncviewer';

http.createServer
(
  (req, res) =>
  {
    exec(tigervnc_fullpath + ' ' + req.url.substr(1));

    res.writeHead(200);
    res.end();
  }
).listen(process.env.port);
