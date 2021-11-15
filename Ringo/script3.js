// Muda o conteúdo do id 'horario' para Fechado, caso seja domingo, ou seja menos que 8 horas ou mais de 21 horas.
	var data = new Date();
	var dia_sem = data.getDay();
	var hora    = data.getHours();        
	if(dia_sem==0 | hora<8 | hora>21){
	    var horario = document.querySelector("#horario");
	    horario.textContent = "Fechado";
	    horario.style.color = "#e74c3c";
	}

///Form 
	var formbutton = document.querySelector("#formbutton");
	var formmsg = document.querySelector("#formmsg");
	var formmsg2 = document.querySelector("#formmsg2");

 // Nome precisa ter mais de 2 caracteres
 	var nome = document.querySelector("#formname");

 	formbutton.onclick = function(){
	 	if(nome.value.length < 3 & nome.value != 0){
	 		formmsg.textContent = "Nome precisa ter 3 caracteres ou mais";
	 		formmsg.style.display = "block";
	 	}else{
	 		formmsg.style.display = "none";
	 	}
	}

 // Indica que a reserva foi concluída
 	function fsubmit(){
 		alert("Reserva concluída");
 	}