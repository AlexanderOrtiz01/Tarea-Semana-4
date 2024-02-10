//Constantes de evento mouseover
const carta1 = document.getElementById("carta1")
const carta2 = document.getElementById("carta2")
const carta3 = document.getElementById("carta3")

//Variable de imagen de carta 2
let imagen = document.getElementById("imagenCard2")

//Evento card 1
carta1.addEventListener("mouseover", function() {
  carta1.classList.add("text-bg-primary");  
});
carta1.addEventListener("mouseout", function() {
    carta1.classList.remove("text-bg-primary");
})

//Evento card 2
carta2.addEventListener("mouseover", function() {
    imagen.src = "Imagenes/3.jpg";
  });
  carta2.addEventListener("mouseout", function() {
    imagen.src = "Imagenes/2.jpg";
  })
  
//Evento card 3
carta3.addEventListener("mouseover", function() {
    carta3.classList.add("animate__animated");
    carta3.classList.add("animate__flipInY");
  });
  
  
  //===============================================

//Constantes de evento click
const carta4 = document.getElementById("carta4")
const parrafoCarta4 = document.getElementById("parrafoCard4")
let controladorDeClick = false

const carta5 = document.getElementById("carta5")
let imagen2 = document.getElementById("imagenCard5")

const carta6 = document.getElementById("carta6")
let video = document.getElementById("videoCard6")

//Evento card 4
carta4.addEventListener("click", function() {
    if(controladorDeClick == false){
        parrafoCarta4.innerHTML = "Al momento de darle click a la carta, se crea un párrafo con la descripción de lo que hace el evento click; además, este contiene una animación."
    parrafoCarta4.classList.add("animate__animated");
    parrafoCarta4.classList.add("animate__backInLeft");
    controladorDeClick = true
    }
    else{
    parrafoCarta4.classList.remove("animate__animated");
    parrafoCarta4.classList.remove("animate__backInLeft");
    parrafoCarta4.innerHTML = ""
    controladorDeClick = false
    }
    
  });
let controladorDeClick2 = false

//Evento card 5
  carta5.addEventListener("click", function() {
    if(controladorDeClick2 == false){
        imagen2.src = "Imagenes/5.gif"
        controladorDeClick2 = true
    }
    else{
        imagen2.src = "Imagenes/6.png"
        controladorDeClick2 = false
    }
  });

  //Evento card 6
let controladorDeClick3 = false
  carta6.addEventListener("click", function() {
    if(controladorDeClick3 == false){
        carta6.style.background = "#1c2331"
        video.play()
        controladorDeClick3 = true
    }
    else{
      carta6.style.background = ""
      video.pause()
        controladorDeClick3 = false
    }
  });

  //================================================

  //Cosntantes de evento focus
  const input1 = document.getElementById("input1")
  const carta7 = document.getElementById("carta7")
  let imagenCard7 = document.getElementById("imagenCard7")

  let controladorDeFocus1 = true

  //Evento card 7
  input1.addEventListener("focus", function() {

    if(controladorDeFocus1 == true){
      const boton = document.createElement('button');
    boton.innerText = 'No hace nada';
    carta7.appendChild(boton);
    boton.classList.add('btn', 'btn-primary', "btn-lg");
    imagenCard7.src = "Imagenes/7.jpg"
    controladorDeFocus1 = false
    }
    

  });
 

  //Evento card 8
  let input2 = document.getElementById("input2")
  let carta8 = document.getElementById("carta8")
  let controladorDeFocus2 = true
  const imagenCard8 = document.getElementById("imagenCard8")
  
  input2.addEventListener("focus", function() {

    if(controladorDeFocus2 == true){
      carta8.classList.add("text-bg-dark")
      imagenCard8.src = "Imagenes/8.gif"
    controladorDeFocus2 = false
    }
    

  });

  //evento card 9
  const input3 = document.getElementById("input3")

  input3.addEventListener("focus", function() {
    input3.classList.add("animate__animated");
    input3.classList.add("animate__lightSpeedOutRight");
  });