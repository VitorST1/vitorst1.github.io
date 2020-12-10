// Muda o conteúdo do id 'horario' para Fechado, caso seja domingo, ou seja menos que 8 horas ou mais de 21 horas.
	var data = new Date();
	var dia_sem = data.getDay();
	var hora    = data.getHours();        
	if(dia_sem==0 | hora<8 | hora>21){
	    var horario = document.querySelector("#horario");
	    horario.textContent = "Fechado";
	    horario.style.color = "#e74c3c";
	}

// Os pratos do cardápio ficam escondidos até o usuário clicar
	var cardapio = document.querySelectorAll(".cbox, .cbox2");
	var pratos = document.querySelectorAll(".cpratos");
   
    //tentei usar "for", não consegui, clicando em uma imagem abria os pratos de todas as outras 
	cardapio[0].onclick = function(){
		if(pratos[0].style.display=="none" | pratos[0].style.display==""){
			pratos[0].style.display= "block";
		}else pratos[0].style.display= "none";
	}

	cardapio[1].onclick = function(){
		if(pratos[1].style.display=="none" | pratos[1].style.display==""){
			pratos[1].style.display= "block";
		}else pratos[1].style.display= "none";
	}

	cardapio[2].onclick = function(){
		if(pratos[2].style.display=="none" | pratos[2].style.display==""){
			pratos[2].style.display= "block";
		}else pratos[2].style.display= "none";
	}

	cardapio[3].onclick = function(){
		if(pratos[3].style.display=="none" | pratos[3].style.display==""){
			pratos[3].style.display= "block";
		}else pratos[3].style.display= "none";
	}