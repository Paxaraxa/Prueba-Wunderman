//asignación de elementos a variables via ID
var btnSubmit=document.getElementById("submit");
var form=document.getElementById("formularioPersona");
var emailPersona=document.getElementById("email");
var nombrePersona=document.getElementById("nombre");
var apellidoPersona=document.getElementById("apellido");
var ciPersona=document.getElementById("ci");
 var cmbDepartamento = document.getElementById("departamentos");
 var cmbLocalidad=document.getElementById("localidad");
var nombreError=document.getElementById("nombreError");
var apellidoError=document.getElementById("apellidoError");
var ciError=document.getElementById("ciError");
var localidadError=document.getElementById("localidadError");
var emailError=document.getElementById("emailError");
var chbAceptar=document.getElementById("chbAceptar");
var checkboxError=document.getElementById("checkboxError");
//fin asignación

//variables que contienen estos mensajes y inputs en arrays
var inputs = [emailPersona,nombrePersona,apellidoPersona,ciPersona];
var mensajesError=[nombreError,ciError,localidadError,emailError,checkboxError,apellidoError]
//fin variables



/////////////////////////////

/////////////////////////////
//obtiene el evento click y dispara la función
btnSubmit.addEventListener("click", validarVacios);

function bordeRojo(input){ //función para hacer el borde rojo en caso de error
input.style.border = "1px solid red";
}

function volverOriginal(input){//se le vuelve a asignar el color de borde original
input.style.border = "1px solid #ccc";
}

function vaciarMensajes(mensaje){//se borra el texto
mensaje.innerHTML="";
}
function validarVacios(){

	//a cada valor de los arrays se le ejecuta una función
 inputs.forEach(volverOriginal);
 mensajesError.forEach(vaciarMensajes);
 //fin ejecución

//verifica si los campos estan vacios
	 if (nombrePersona.value=="") { 
	 
	 	nombreError.textContent="El nombre es requerido"
	 	bordeRojo(nombrePersona);
	 	return false;}

	 

	 if (apellidoPersona.value=="") {
	bordeRojo(apellidoPersona);
	 	apellidoError.textContent="El apellido es requerido"
	 	return false;
}
 
	 if (emailPersona.value=="") {
	bordeRojo(emailPersona);
	 	emailError.textContent="El e-Mail es requerido"
	 
return false;
}



//fin verificación de campos

validarCaracteres();
 
}

function validarCaracteres(){

	//verifica que el nombre y el apellido no sean menores a 3 caracteres
 if (nombrePersona.value.length<2) {

	 bordeRojo(nombrePersona);
	 	nombreError.textContent="Debe de tener al menos dos caracteres"
	 	return false;
}

if (apellidoPersona.value.length<2) {

	 bordeRojo(apellidoPersona);
	 	apellidoError.textContent="Debe de tener al menos dos caracteres"
	 	return false;
}  
 //fin verificacion de caracteres
 verificarEmail();
}
function verificarEmail(){
	var emailReg=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;//formato de email
     var boolean= emailReg.test(emailPersona.value);//se verifica que se cumpla el formato

     if(boolean==false){//si no se cumple el formato se le informara al usuario
bordeRojo(emailPersona);
	 	emailError.textContent="Formato de e-Mail no valido"
return false;

     }
     //verificamos que se selecciones un departamento y localidad
     if (cmbDepartamento.selectedIndex==0 || cmbLocalidad.selectedIndex==0) {
		localidadError.textContent="Localidad Incorrecta"
bordeRojo(cmbLocalidad);
	}else{
		validarLocalidad(cmbDepartamento.selectedIndex-1,cmbLocalidad.value);//valor seleccionado del combo box
	}
     
    
}


function validarLocalidad(indice,localidad){
	var verificarExistencia=localidades[indice].indexOf(localidad);
	//si la localidad no pertenece al departamento va a devolver un -1
if (verificarExistencia==-1) {
		localidadError.textContent="Localidad Incorrecta"
bordeRojo(cmbLocalidad);
		return false;
		
	}

	
	 submitForm(validarCedula(ciPersona.value));
}


function validarCedula(ci) {
		 if (ci=="") {
	bordeRojo(ciPersona);
	 	ciError.textContent="La C.I es requerida"
	 	return false;
}else{


    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
    var suma = 0;
    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = parseInt(arrCoefs.length - ci.length);
    //recorro cada digito empezando por el de más a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    for (var i = ci.length - 1; i > -1; i--) {
        //Obtengo el digito correspondiente de la ci recibida
        var dig = ci.substring(i, i + 1);
        //Lo tenía como caracter, lo transformo a int para poder operar
        var digInt = parseInt(dig);
        //Obtengo el coeficiente correspondiente al ésta posición del digito
        var coef = arrCoefs[i + difCoef];
        //Multiplico dígito por coeficiente y lo acumulo a la suma total
        suma = suma + digInt * coef;
    }
    var result = false;
    // si la suma es múltiplo de 10 es una ci válida
    if ((suma % 10) === 0) {
        result = true;
    }
    return result;
}
}


function submitForm(valido){
	//si la ci es valida y se aceptaron los termino y condiciones se hace el submit
	if (valido==true && chbAceptar.checked==true) {
form.submit();
	}else if (valido==false ){
		//si no lo es, se le muestra el error al usuario
		bordeRojo(ciPersona);
	 	ciError.textContent="La C.I no es valida"

	 	//chequea que se acepten los terminos y condiciones
	}else if(chbAceptar.checked==false){
		

	 	checkboxError.textContent="Acepte los terminos y condiciones"

	}
}

//evento focus para limpiar mensajes de error
nombrePersona.addEventListener("focus", function(){
	volverOriginal(nombrePersona);
	vaciarMensajes(nombreError);

});
apellidoPersona.addEventListener("focus", function(){
	volverOriginal(apellidoPersona);
	vaciarMensajes(apellidoError);

});
emailPersona.addEventListener("focus", function(){
	volverOriginal(emailPersona);
	vaciarMensajes(emailError);

});
ciPersona.addEventListener("focus", function(){
	volverOriginal(ciPersona);
	vaciarMensajes(ciError);

});
cmbLocalidad.addEventListener("focus", function(){
volverOriginal(cmbLocalidad);
	vaciarMensajes(localidadError);

	});
chbAceptar.addEventListener("focus", function(){
volverOriginal(chbAceptar);
	vaciarMensajes(checkboxError);

	});
//fin focus



//evento keydown de los inputs para hacer visible los labels
nombrePersona.addEventListener("keydown", function(){
	
if (nombrePersona.value=="") {
lblNombre.style.visibility = "hidden" ;	
}else{
	lblNombre.style.visibility = "visible" ;
}


});
apellidoPersona.addEventListener("keydown", function(){
if (apellidoPersona.value=="") {
lblApellido.style.visibility = "hidden" ;	
}else{
lblApellido.style.visibility = "visible" ;
}

});
emailPersona.addEventListener("keydown", function(){
	if (emailPersona.value=="") {
lblEmail.style.visibility = "hidden" ;	
}else{
lblEmail.style.visibility = "visible" ;
}

});
ciPersona.addEventListener("keydown", function(){
		if (ciPersona.value=="") {
lblCi.style.visibility = "hidden" ;	
}else{
lblCi.style.visibility = "visible" ;
}


});

//fin inputs