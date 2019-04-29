//Importanto modulo//
var bodyParser = require("body-parser");
//Importando schema//
var  Adn = require("./Schema/schema_adn").Adn;


var express = require("express");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade")

app.get("/",function(solicitud,respuesta){
  respuesta.render("index");
});

app.get("/desarrollador",function(solicitud,respuesta){
    respuesta.render("desarrollador");
});

app.get("/index",function(solicitud,respuesta){
    respuesta.render("index");
});

app.post("/mutation",function(solicitud,respuesta){
    
    //***************************************************************************************************************************//  
    //***************************************************************************************************************************//
    //**Variable que almacenara el valor enviado por el usuario**//
    var secuencia_ADN = {
        ADN: solicitud.body.SECADN
    }
    //***************************************************************************************************************************//  
    //***************************************************************************************************************************//
    //**Seccion de variables**/
    let i,j;             //Variables para iterar el arreglo bidimensional.//
    let longitudinterna; //Variable que servira como auxiliar para determinar si el orden es de NXN.//
    let longitud;        //Para saber longitud del for.//
    let logn;            //Para validar si cada uno de los string interntos del JSON tiene la misma cantidad de caracteres.//
    
    let ad = 0, ti = 0, gu = 0, ci = 0;

    let ValHorizontal, ValVertical, Valoblicua, ValOblicuaInv;

    longitud = secuencia_ADN.ADN.length;//valor que tendran los ciclos for.//

    //***********************************************************************//
    //***********************************************************************//
    //Ciclo para verificar si la secuencia en de NXN y a la vez contar el    //
    //numero de letras de cada una de las posiciones//
    console.log("Secuencia de ADN recibida");
    console.log("*************************");
    for(i=0;i<longitud;i++){
        longitudinterna = secuencia_ADN.ADN[i].length;
        console.log(secuencia_ADN.ADN[i]);
        if(longitudinterna == longitud){
            logn = 1;
        }else{
            long = 0;
           if(long == 0){
              console.log("La secuencia de ADN recibida no es de orden NXN.");
              break;
           }
        }
    };
    //************************************************************************//
    //************************************************************************//
    //**Iniciando el conteo para detectar si existe mutacion en la secuencia**//
    if(logn == true){
      console.log("\n\n***************************************");
      console.log("Horizontal");
       for(i=0;i<longitud;i++){
           console.log("\n\nFila " + i);
           for(j=0;j<longitud;j++){
             //**Adenina**//
             if(secuencia_ADN.ADN[i][j] === 'A'){ 
                ad++; 
               if(ad > 3){
                  ValHorizontal = 1;
               } 
             }
             //**Timina**//
             if(secuencia_ADN.ADN[i][j] === 'T'){
                ti++;
                if(ti > 3){
                   ValHorizontal = 1; 
                }
             }
             //**Citosina**//
             if(secuencia_ADN.ADN[i][j] === 'C'){
                ci++;
                if(ci > 3){
                   ValHorizontal = 1;
                } 
             }
             //**Guanina**//
             if(secuencia_ADN.ADN[i][j] === 'G'){
                gu++; 
                if(gu > 3){
                   ValHorizontal = 1;
                }
             }
       }
       //**Imprimiendo en consola en numero de veces que una letra se repite**//
       console.log("Adenina :"+ ad);
       console.log("Timina  :"+ ti);
       console.log("Citosina:"+ ci);
       console.log("Guanina :"+ gu);

       ad = 0;
       ti = 0;
       ci = 0;
       gu = 0;
       }
    } else{
        respuesta.send("La secuencia de ADN recibida no es de orden NXN.");
    }
    //************************************************************************//
    //************************************************************************//
    //**Iniciando el conteo para detectar si existe mutacion en la secuencia**//
    if(logn == true){
        console.log("\n\n***************************************");
        console.log("Vertical");
         for(j=0;j<longitud;j++){
             console.log("\n\nColumna " + j);
             for(i=0;i<longitud;i++){
               //**Adenina**//
               if(secuencia_ADN.ADN[i][j] === 'A'){ 
                  ad++; 
                 if(ad > 3){
                    ValVertical = 1;
                 } 
               }
               //**Timina**//
               if(secuencia_ADN.ADN[i][j] === 'T'){
                  ti++;
                  if(ti > 3){
                     ValVertical = 1; 
                  }
               }
               //**Citosina**//
               if(secuencia_ADN.ADN[i][j] === 'C'){
                  ci++;
                  if(ci > 3){
                     ValVertical = 1;
                  } 
               }
               //**Guanina**//
               if(secuencia_ADN.ADN[i][j] === 'G'){
                  gu++; 
                  if(gu > 3){
                     ValVertical = 1;
                  }
               }
         }
         //**Imprimiendo en consola en numero de veces que una letra se repite**//
         console.log("Adenina :"+ ad);
         console.log("Timina  :"+ ti);
         console.log("Citosina:"+ ci);
         console.log("Guanina :"+ gu);
  
         ad = 0;
         ti = 0;
         ci = 0;
         gu = 0;
         }
      }else{
        respuesta.send("La secuencia de ADN recibida no es de orden NXN.");
      }
    //************************************************************************//
    //************************************************************************//
    //**Iniciando el conteo para detectar si existe mutacion en la secuencia**//
    //**Oblicua**/
    if(logn == true){
        console.log("\n\n***************************************");
        console.log("Oblicua");
         for(i=0;i<longitud;i++){
             for(j=0;j<longitud;j++){
               //**Adenina**//
               if((i==j) && secuencia_ADN.ADN[i][j] === 'A'){ 
                  ad++; 
                 if(ad > 3){
                    Valoblicua = 1;
                 } 
               }
               //**Timina**//
               if((i==j) && secuencia_ADN.ADN[i][j] === 'T'){
                  ti++;
                  if(ti > 3){
                     Valoblicua = 1; 
                  }
               }
               //**Citosina**//
               if((i==j) && secuencia_ADN.ADN[i][j] === 'C'){
                  ci++;
                  if(ci > 3){
                     Valoblicua = 1;
                  } 
               }
               //**Guanina**//
               if((i==j) && secuencia_ADN.ADN[i][j] === 'G'){
                  gu++; 
                  if(gu > 3){
                     Valoblicua = 1;
                  }
               }
            }
         }
         //**Imprimiendo en consola en numero de veces que una letra se repite**//
         console.log("Adenina :"+ ad);
         console.log("Timina  :"+ ti);
         console.log("Citosina:"+ ci);
         console.log("Guanina :"+ gu);
      }
      else{
        respuesta.send("La secuencia de ADN recibida no es de orden NXN.");
      }
    //************************************************************************//
    //Estableciendo variables a 0//
    ad = 0;
    ti = 0;
    ci = 0;
    gu = 0;
    //************************************************************************//
    //**Iniciando el conteo para detectar si existe mutacion en la secuencia**//
    //**Oblicua Inversa**//
    var suma, resta;
    var inversa = []; 
    //Obteniendo caracteres de la diagonal inversa//
    if(logn == true){
        for(i=0;i<longitud;i++){
            for(j=0;j<=longitud;j++){
               
               suma = i+j;
               resta= longitud-1;
     
               if(suma == resta) {
                 inversa[i] = secuencia_ADN.ADN[i][j];
               }
             }
     
             suma  = 0;
             resta = 0;
           } 
           
        for(i=0;i<longitud;i++){
            if(inversa[i] == 'A'){
               ad++;
            }
            if(inversa[i] == 'T'){
               ti++;
            }
            if(inversa[i] == 'C'){
               ci++;
            }
            if(inversa[i] == 'G'){
               gu++;
            }
        }

        console.log("\n\n***********************************");
        console.log("Diagonal inversa");
        console.log("Adenina : "+ad);
        if(ad >=4){
            ValOblicuaInv = 1;
        }
        
        console.log("Timina  : "+ti);
        if(ti >=4){
            ValOblicuaInv = 1;
        }
        
        console.log("Citosina: "+ci);
        if(ci >=4){
            ValOblicuaInv = 1;
        }

        console.log("Guanina : "+gu);
        if(gu >=4){
            ValOblicuaInv = 1;
        }
    }else{
        respuesta.send("La secuencia de ADN recibida no es de orden NXN.");
    }


    //***************************************************************************************************************************//  
    //***************************************************************************************************************************//
    if(ValHorizontal == 1 || ValVertical == 1 || Valoblicua == 1 || ValOblicuaInv == 1){
       console.log("\n\n\nSecuencia de ADN con mutacion 200-OK.");
       //*******************************************************//
       //*******************************************************//
       //Guardando cadena en base de datos//
       var cadena = secuencia_ADN.ADN;
       console.log(typeof cadena);
       console.log(cadena);

           var mutacion_adn = new Adn({adn: cadena,
                                       status: 1});
               mutacion_adn.save(function(){
               console.log("\n\nSecuencia de ADN guardada exitosamente.");          
           })
       //*******************************************************//
       //*******************************************************//
       respuesta.send("200-OK");
    }else{
        console.log("Secuencia de ADN no tiene mutacion 403-Forbidden.");
       //*******************************************************//
       //*******************************************************//
       //Guardando cadena en base de datos//
       var adnsinmutacion = new Adn({adn: cadena,
                                     status: 0});

           adnsinmutacion.save(function(){
             console.log("\n\nSecuencia de ADN guardada exitosamente.");                       
           })
       //*******************************************************//
       //*******************************************************//
        respuesta.send("\n\n403-Forbidden.");
    }
});  


app.get("/stats",function(solicitud,respuesta){
    
    Adn.find({status: 0}).countDocuments(function(err,doc){
        estadocero = doc;
        Adn.find({status: 1}).countDocuments(function(err,doc){
            estadouno = doc;
            if(estadocero > estadouno){
               var ratio = estadouno / estadocero;
            }else if(estadocero < estadouno){
               var ratio = estadouno / estadocero;   
            }

            var resADN =  {
                   "count_mutations": estadouno,
                   "count_no_mutations": estadocero,
                   "ratio": ratio
                   }
            
            console.log(resADN);

            respuesta.send(resADN);


        }).catch(function (err){
            console.log(err);
        })
    }).catch(function (err){
        console.log(err);
    })
});

app.listen(8080);