//cargar datos a los comboBox
var dptosLocs = {
	"Artigas":["Artigas","Bella Unión"],
	"Canelones":["Canelones","Santa Lucía"],
	"Montevideo":["Montevideo"],
	"Salto":["Salto","Daymán","Arapey"]
};
 var cmbDepartamento = document.getElementById("departamentos");
 var cmbLocalidad=document.getElementById("localidad");
var departamentos=Object.keys(dptosLocs)//Obtener solo los departamentos
var localidades= Object.values(dptosLocs);//obtener departamentos y localidades

var indiceLocalidades=1;
var indiceDepartamentos=1;
for (var i = 0; i <departamentos.length; i++) {
for (var e = 1; e <=localidades[i].length; e++) {

//se le asigna un indice en .options y luego un valor en new Option a ese valor del indice
	cmbLocalidad.options[indiceLocalidades]=new Option(localidades[i][e-1]);
	indiceLocalidades+=1;


}
	cmbDepartamento.options[indiceDepartamentos]=new Option(departamentos[i]);
indiceDepartamentos+=1;

}
//fin cargar datos










 


       

