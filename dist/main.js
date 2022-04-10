'use strict';
var btn = document.getElementById('wyslij');
var outpout = document.querySelector('#outpout')


btn.addEventListener('click', function(event) {
                     event.preventDefault();
    
  var imie = document.getElementById("imie").value;
  var nazwisko = document.getElementById("nazwisko").value;
    var matryca = document.getElementById("matryca").value;
var procesor = document.getElementById("procesor").value;
		var disc = document.getElementById("dysk").value;
		var ram = document.getElementById("ram").value;
		var graficsCard = document.getElementById("karta").value;
		var powerSupply = document.getElementById("zasilacz").value;
		var state = document.getElementById("stan").value;
  var sum = parseFloat(matryca) + parseFloat(disc) + parseFloat(ram) + parseFloat(procesor) + parseFloat(graficsCard) + parseFloat(powerSupply) + parseFloat(state); 
		
		  
   outpout.innerHTML = "<p>imię: " + imie +"</p><p>nazwisko: "+ nazwisko + "</p>" + "</p><p>matryca: "+ matryca + "</p>" + "</p><p>procesor: "+ procesor + "</p>" + "</p><p>dysk: "+ disc + "</p>" + "</p><p>ram: "+ ram + "</p>" + "</p><p>karta graficzna: "+ graficsCard + "</p>" + "</p><p>zasilacz: "+ powerSupply + "</p>" + "</p><p>stan: "+ state + "</p>" + "</p><p>suma: "+ sum + "</p>"   ;
});
