const mysql = require('mysql2')

const conexion = mysql.createPool({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT || 3306,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10
})

conexion.getConnection((error, connection) => {
    if(error){
        console.log('Error de Conexion con BD: '+error)
        return
    }
    console.log('Base de datos Conectada')
    connection.release()
})

module.exports= conexion
