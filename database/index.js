const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

const getCliente = function(){
  return newPromise((resolve, reject) => {
    connection.query('SELECT * FROM cliente', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};

const.postCliente = function(nombre, apellido_paterno, apellido_materno){
  return newPromise((resolve, reject) => {
    connection.query('INSERT INTO cliente(nombre, apellido_paterno, apellido_materno) VALUES (?, ?, ?)',
  [nombre, apellidoPaterno, apellidoMaterno], (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};

module.exports = {
  getCliente,
  postCliente
};
