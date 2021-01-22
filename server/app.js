const io = require('socket.io')(5000);

io.on('connect', function(socket) {

  // emit to the newly connected client the existing count 
  socket.emit('message que', JSON.stringify([
    { text: "text", incoming: true, name: "Some test user", timestamp: Date.now()+1 },
    { text: "outgoing msg", incoming: false, name: "Some test user", timestamp: Date.now()+2 },
    { text: "prihjajoci msg", incoming: true, name: "Some test user", timestamp: Date.now()+3 }
  ]
  ));

	setInterval(function(){
    socket.emit('chat message', JSON.stringify(
      { text: "vsakih 5s sent", incoming: true, name: "Some test user", timestamp: Date.now() },
    ));
  }, 5000);
  
  socket.on('chat message',(msg)=>{
    socket.emit('chat message', JSON.stringify(msg));
  });
  
});