//Importando modulos//
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Conexion a la base de datos// 
mongoose.connect("mongodb://localhost/secuencia",  { useNewUrlParser: true });

//Schema de la base de datos//
var adn_schema = new Schema({
    adn     : Object,
    status: Number
});
    
var Adn = mongoose.model("sec",adn_schema);

module.exports.Adn = Adn;




