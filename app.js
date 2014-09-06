$(document).ready(function(){

		$("#btn_Principal_Config").click(function(){
		//si NO tenemos datos, ir de frente a la config inicial, implica ejecucion la primera vez
		if (localStorage.length==0)
		{
			$.mobile.changePage ($("#ConfigInicial"));
			//forzaremos se limpien los campos, dicho sea de paso, eso fuerza el foco
			$("#limpiarDatosRegistro");
		}
		else
		{
		  $.mobile.changePage ($("#Principal"));
		}
		});
		
		$("#limpiarDatosRegistro").click(function(){
		  $("#nombreUsuaria").val("");
		  $("#ultimoPeriodo").val("");
		  $("#duracionPeriodo").val("");
		  $("#detallesExtra").val("");
		  $("#nombreUsuaria").focus();
	    });

		$("#btnCopyright").click(function(){
		  $.mobile.changePage ($("#copyright_disclaimer"));
		});

		$("#btnSugerencias").click(function(){
		  $.mobile.changePage ($("#sugerencias"));
		});

		$("#btnMetodosAnticonceptivos").click(function(){
		  $.mobile.changePage ($("#MetodosAnticonceptivos"));
		});

		$("#btnConfigInicial").click(function(){
		  $.mobile.changePage ($("#ConfigInicial"));
		  $("#noteTitle").focus();
		});
		
		//para borrar los contenidos
		$("#eliminarConfigs").click(function(){
		   localStorage.clear();
 		   $("#note-list").html("");
		   alert("Los datos han sido eliminados");
		   $.mobile.changePage ($("#home"));
		});

		$("#btnDatosUsuaria").click(function(){
		  //Change to the add-notes
          $.mobile.changePage ($("#DatosUsuaria"));
		  //Empty the list first
		  $("#note-list").html("");
		  //Read the notes
		  for (i=0; i<=localStorage.length-1; i++)  
			{  
				key = localStorage.key(i);  
				val = localStorage.getItem(key);
				var noteElement = $("<div data-role='collapsible' data-mini='true'/>");
				var h3NoteTitle = $("<h3/>").text(key);
				var pNoteDetails = $("<p/>").text(val);
				noteElement.append(h3NoteTitle);
				noteElement.append(pNoteDetails);
				$("#note-list").append(noteElement);
			}  
			$('div[data-role=collapsible]').collapsible({refresh:true});
	    });
		
		//Click Handlers for Add Notes page
		$("#guardarDatos").click(function(){
		  nombreUsuaria = $("#nombreUsuaria").val();
		  ultimoPeriodo = $("#ultimoPeriodo").val();
		  duracionPeriodo = $("#duracionPeriodo").val();
		  detallesExtra = $("#detallesExtra").val();
		  //lo guardamos en el local storage, luego salimos de esta paguina para no volver NUNCA
		  if (window.localStorage) {
		      localStorage.setItem(nombreUsuaria,ultimoPeriodo,duracionPeriodo,detallesExtra);
			  alert("Sus Configs han sido guardadas");
		  }
		  $.mobile.changePage ($("#Principal")); //volvemos a casa SI o SI
		  
	    });

});