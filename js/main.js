
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

function toggleMenu(){
    var e = document.getElementById('divMenu');
    if(e.className=='menuOff') {
        e.className='menuOn'
    } else {
        e.className='menuOff'
    }
}

// Transforamcion del boton al scroll
var inicio = 50; //number of pixels before modifying styles

		$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > inicio) {
		        $('.boto').addClass('botoTrans');
		    } else {
		        $('.boto').removeClass('botoTrans');
		    }
		});
