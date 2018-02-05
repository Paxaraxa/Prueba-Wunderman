//Variables con el texto
	var txtCompleto="Lorem ipsim dolor sit amet, <br>consectetur adipiscing elf, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation"
	var tituloCompleto="Lorem Ipsum sit amet, <br> consetetur."
	var tituloIncompleto="Lorem Ipsum"
	var txtPequeño="Lorem ipsim dolor sit amet, <br>consectetur adipiscing elf, sed do eiusmod tempor incidiunt."
	var txtMediano="Lorem ipsim dolor sit amet, <br>consectetur adipiscing elf, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua."
    
    //asignación de variables a elementos HTML via su ID
    primerTitulo=document.getElementById("primerTitulo");
    segundoTitulo=document.getElementById("segundoTitulo");
    tercerTitulo=document.getElementById("tercerTitulo");
    cuartoTitulo=document.getElementById("cuartoTitulo");
	primerLorem=document.getElementById("primerLorem");
	segundoLorem=document.getElementById("segundoLorem");
	tercerLorem=document.getElementById("tercerLorem");
	cuartoLorem=document.getElementById("cuartoLorem");
    var landingRight=document.getElementById("landingRight");
	
	//eventos que disparan la función
window.onload=verificarPantalla;
window.onresize= verificarPantalla;//función que verifica cada vez que la resolución es alterada

//Función que asigna el texto en cada caso
function verificarPantalla(){
	
	if (window.innerWidth<=768) { //cuando la ventana tiene 768 pixeles o menos
		tercerLorem.innerHTML=txtCompleto;
		cuartoLorem.innerHTML=txtPequeño;
		cuartoTitulo.innerHTML=tituloCompleto;
		  landingRight.innerHTML="SEGUÍ CONECTADO";
	} if (window.innerWidth<=380) {//cuando la ventana tiene 350 pixeles o menos
  
  segundoTitulo.innerHTML=tituloIncompleto;
  segundoLorem.innerHTML=txtCompleto;
  tercerTitulo.innerHTML=tituloCompleto;
  tercerLorem.innerHTML=txtPequeño;
  cuartoTitulo.innerHTML=tituloCompleto;
  cuartoLorem.innerHTML=txtPequeño;
  landingRight.innerHTML= "";//eliminar texto de de "segui conectado" al llegar a esta resolución

	}else{ //cuando la ventana tiene más de 768 pixeles

			primerTitulo.innerHTML=tituloIncompleto;
	segundoTitulo.innerHTML=tituloCompleto;
	tercerTitulo.innerHTML=tituloIncompleto;
	cuartoTitulo.innerHTML=tituloIncompleto;
	primerLorem.innerHTML=txtCompleto;
	segundoLorem.innerHTML=txtPequeño;
	tercerLorem.innerHTML=txtMediano;
	cuartoLorem.innerHTML=txtCompleto;
	}
}