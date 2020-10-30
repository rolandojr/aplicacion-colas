const {io} = require('../server');
io.on('connection',(client)=> {
    console.log('usuario conectado')
    client.on('disconnect',()=>{
        console.log('usuario desconectado')
    })
    
    client.on('usuarioMensaje',(data,callback)=>{
        console.log(data);

        client.broadcast.emit('usuarioMensaje',data)
        // if (mensaje.usuario) {
        //     callback({
        //         mensaje:'SE EJECUTO CORRECTAMENTE!!'
        //     });
            
        // }else{
        //     callback({
        //         mensaje:'NO SE EJECUTO CORRECTAMENTE!!'
        //     });
        // }
    })
    client.emit('usuarioMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a mi aplicacion que usa sockets'
    })

})