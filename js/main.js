// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// Variables para capturar la fecha del navegador
var fecha = new Date();
var numero = fecha.getDate();
var dia = fecha.getDay();
var mes = fecha.getMonth();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();

//Variables para capturar elementos
var texto = document.getElementsByClassName('detallEvent');
var prog = document.getElementsByClassName('llistaVisible');
var bot = document.getElementsByClassName('dia');

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

function resizer (multiplicador){
    for (var i = 0; i < texto.length; i++) {
        
        if (texto[i].style.fontSize == ""){

            texto[i].style.fontSize = "1.0em";

        }texto[i].style.fontSize = parseFloat(texto[i].style.fontSize)
        + (multiplicador * 0.1) + "em";
        };
}


function mostrar(b){
    resetearProg();
    var elem = document.getElementById(b);
    elem.className="llistaVisible";

}


function resetearProg(){
    for (var i = 0; i < prog.length; i++) {
        if (prog[i].className=="llistaVisible"){
            prog[i].className="llistaInvisible";
        }else{
            prog[i].className="llistaInvisible";
        }
    };
}

// function resetearBot(){
//     for (i=0;i<bot.length;i++)
//       bot[i].style.backgroundColor="";
// }

//Cambiar el display de none a block
// function cambiar(esto){
//   vista = document.getElementById(esto).style.display;

//   if (vista == 'none')
//   {
//     vista = 'block';
//   }
//   else
//   {
//     vista = 'none';
//   }
//   document.getElementById(esto).style.display = vista;
// }




function togglePes(a){
  var elem = document.getElementById(a);
  $(elem).slideToggle('slow');
}






















