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
 // Validar telefone 
	var telefone = document.querySelector("#formphone");
	var regex = new RegExp('^[1-9]{2}[0-9][0-9]{7,8}$'); 
	if (regex.test(telefone.value)) { 
		 telefone.setCustomValidity("");
	}
	else telefone.setCustomValidity("Digite um número válido. Ex: dd988888888");