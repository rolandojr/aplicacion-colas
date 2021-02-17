//comando para establecer la comunicacion
var socket = io();

var label = $("#lblNuevoTicket");

socket.on('connect',()=>{
    console.log('Conectado al Servidor')
})
socket.on('disconnect',()=>{
    console.log('Desconectado del Servidor');
})

socket.on('estadoActual',(estado)=>{
    label.text(estado.actual)
})

$('button').on('click',function(){
    console.log('click');
    
    socket.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket);
    })
})