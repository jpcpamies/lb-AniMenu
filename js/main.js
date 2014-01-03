
// Variables para capturar la fecha del navegador
var fecha = new Date();
var numero = fecha.getDate();
var dia = fecha.getDay();
var mes = fecha.getMonth();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();

// Arreglos per a mostrar mesesos y díes en Català
var meses = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre" ,"Novembre", "Desembre"];
var diasSemana = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];

// Inserción de la fecha
document.getElementById('divDia').innerHTML = diasSemana[dia];
document.getElementById('divNumero').innerHTML = numero;
document.getElementById('divMes').innerHTML = meses[mes];

function toggleMenu(a){
    var e = document.getElementById(a);
    if(e.className=='boto'){
        e.className='botoOn';
    }
    else {
    	e.className='boto';
    }
}

// Transforamcion del boton al scroll
var inicio = 350; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > inicio) {
    	$('#inici').removeClass('inici');
        $('#inici').addClass('boto');
    } else {
        $('.inici').removeClass('boto');
        $('#inici').addClass('inici');
    }
});

function resizer (multiplicador){
	var texto = document.body;
	
	if (texto.style.fontSize == ""){

		texto.style.fontSize = "1.0em";

	}texto.style.fontSize = parseFloat(texto.style.fontSize)
	+ (multiplicador * 0.2) + "em";
}
