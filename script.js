// Muda o conteúdo do id 'horario' para Fechado, caso seja domingo, ou seja menos que 8 horas ou mais de 21 horas.
	var data = new Date();
	var dia_sem = data.getDay();
	var hora    = data.getHours();        
	if(dia_sem==0 | hora<8 | hora>21){
	    var horario = document.querySelector("#horario");
	    horario.textContent = "Fechado";
	    horario.style.color = "#e74c3c";
	}


// Modal (clicar na imagem e ela aparecer em popup)
	var modal = document.getElementById('modal');

	//Pega a imagem e coloca no modal
	var img = document.getElementsByClassName('qimg');
	var modalImg = document.getElementById("img01");

	var showModal = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	}

	for (var i = 0; i < img.length; i++) {
	    img[i].addEventListener('click', showModal);
	}

	//Quando o usuário apertar no botão (X), o modal será fechado
	var span = document.getElementsByClassName("fecharmodal")[0];

	span.onclick = function() { 
	    modal.style.display = "none";
	}
