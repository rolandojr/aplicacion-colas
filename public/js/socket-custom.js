var socket = io();
socket.on('connect',function(){
    console.log('conectado al servidor');
})
socket.on('disconnect',function(){
    console.log("desconectado del servidor")
})
socket.emit('usuarioMensaje',{
    usuario:'Rolando',
    mensaje:'Hola mundo'
}
// ,function(mensaje){
//     console.log("mensaje : ",mensaje)
// }
)
socket.on('usuarioMensaje',function(mensaje){
    console.log(mensaje)
})