// IIFE - Immediately Invoked Function Expression
(function () {
	var contador = 0;

	var cargarPagina = function () {
		// Envío de To - Do
		$("#formulario").submit(agregarToDo);
		$("#message").keyup(validarContenido);
	};

	var agregarToDo = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var $mensaje = $mensajeContenedor.val();

		
		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "jumbotron" });
		var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<label />");
		//var $contadorCLetras = $("<p/> ", {"class: cantidadCaracteres"}) 

		var identificador = "marcador-" + contador;

		$postCheck.id = identificador;
		
		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);

		$postCheck.click(eliminarToDo);

		$postContenedor.append($postCheck);
		$postContenedor.append($postTexto);
		//$postContenedor.append($contadorCLetras);

		$contenedor.prepend($postContenedor);

		$mensajeContenedor.val("");
		$botonAgregar.attr("disabled", true);

		contador++;
	};

	var eliminarToDo = function () {
		$(this).parent().remove();
	};

	var validarContenido = function () {
		var $addButton = $("#add-button");
		// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};

	/*var contadorCaracteres = function () {
    var Caracteres = $("#cantidadCaracteres");
    
    contadorCaracteres = 140 - ($(mensajeContenedor).val().length);
    
    if (contadorC >= 21 && contadorC <= 30) {
        cantidadCaracteres.text(contadorC + "/140")
    if (contadorC >= 0 && contadorC <= 20) {
        cantidadCaracteres.text(contadorC + "/140")
    }
    if (contadorC < 0) {
        cantidadCaracteres.text(contadorC + "/140")
    } 
    else if (contadorC >= 31 && contadorC <= 140) {
        cantidadCaracteres.text(contadorC + "/140")
    }
}
*/
	// Cuando carga la página
	$(document).ready(cargarPagina);
})();
