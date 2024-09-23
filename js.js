
let listaPalabras;
let palabraRandon;
window.addEventListener("load", function () {
  if (localStorage.getItem("listaPalabras") == null) {
    listaPalabras = ["AUTOMOVIL", "LIBRO", "RECETA", "PARAMETRO", "AVENIDA", "AUTOBUS", "DEPARTAMENTO", "POLICIA", "BOMBEROS", "ARGENTINA"];
    window.localStorage.setItem("listaPalabras", JSON.stringify(listaPalabras));
  } else {
    listaPalabras = JSON.parse(window.localStorage.getItem("listaPalabras"));
  }
});


/////////////// Boton Comenzar ///////////////////////////
const img = document.getElementById("imagen")
const btnInicio = document.querySelector("#inicio");
btnInicio.addEventListener("click", () => {
  img.setAttribute('src', './img/imagen0.png')

  let i = Math.floor(Math.random() * listaPalabras.length);
  palabraRandon = listaPalabras[i];
  document.getElementById('errores').textContent = 0;
  let CantErrores =0;
  let resultadoAciertos =0

  let arrayLetras = [];
  const arrayPR = [palabraRandon]; // palabra randdon
  window.localStorage.setItem("arrayLetras", JSON.stringify(arrayLetras));
  window.localStorage.setItem("arrayPR", JSON.stringify(arrayPR));

  let palabraH2 = "";
  for (let i = 0; i < palabraRandon.length; i++) {
    palabraH2 += "_";
  }
  const h2Letra = document.querySelector("#palabra");
  h2Letra.textContent = palabraH2;


  ///////////////// Evento KEY //////////////////////////////
  document.addEventListener("keydown", (evento) => {
      if (CantErrores >=7){
    
      }else{
      
    arrayLetras = JSON.parse(window.localStorage.getItem("arrayLetras"));
    let palabraString = palabraRandon.toString(); // lo convierto a string
    if (arrayLetras == null) {
      for (let i = 0; i < palabraString.length; i++) {
        arrayPR.push(palabraString[i]);
        arrayLetras.push("_");
      }
    }
    console.log(arrayPR);
    console.log("vacio", arrayLetras);
    let cantAciertos =  0;
    let letraBuscada = `${evento.key}`.toUpperCase();
    for (let i = 0; i < palabraString.length; i++) {
      for (let j = 0; j < palabraString.length; j++) {
        if (palabraString[i] == letraBuscada[j]) {
          arrayLetras[i] = palabraString[i];
          cantAciertos += 1;
          break;
        } else {
          if (arrayLetras[i]==null || arrayLetras[i]=="_"){
            
            arrayLetras[i]="_"
          }else{
            
          }
        }
      }
    }
    if (cantAciertos==0){
      CantErrores += 1;
      if (CantErrores >= 7 ){
        img.setAttribute('src', './img/imagen7.png')
      }else{
        img.setAttribute('src', './img/imagen'+ CantErrores + '.png')
      }
    }
    
    
    let arrayLetrasR = "";
    let contar =0
    arrayLetras.forEach(myFunction);
    function myFunction(item) {
      arrayLetrasR += item;
      if (item == "_"){
        contar+=1
      }
    }
    if (contar == 0){
      var count = 200;
      var defaults = {
        origin: { y: 0.7 }
      };
      
      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }
      
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
    // console.log(contar);


    document.getElementById('errores').textContent = CantErrores;
    h2Letra.textContent = arrayLetrasR;
    //// Guarda arrayLetras el localstorage
    window.localStorage.setItem("arrayLetras", JSON.stringify(arrayLetras));
  }
  });
  //////////////////////// termina el evento KEY ///////////////////////
});



