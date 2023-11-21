
      /*=========================================
      =========FUNCION PARA VER CONTRASEÑA=======*/
	  function seePwd(){
		var icon = document.getElementById('eyePwd').style.color = "blue";
		var eye = document.getElementById('passname');
		var eye2 = document.getElementById('passname2');     
			  if (eye.type === "password" && eye2.type === "password") {
				eye.type = "text";
				eye2.type = "text";
			  } else {
				eye.type = "password";
				eye2.type = "password";
			  }
		  }
	

//VALIDAR DIRECCION DE CORREO
function validateEmailAddress(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}

function ValidateEmail(){
	var emailaddress = $("#email").val();
	var div = document.getElementById("verifica1");
	var div2 = document.getElementById("verifica2");
	let EmailVerify = $('#emailState').val();
	var non = $('#non').val();
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailaddress)){
	if(non == 1){
		$('#emailState').val(1);
		// EmailVerify = "1";
		texto1 = document.createTextNode(emailaddress + " está permitido ✔");
		$('#verifica1').prop("class", "alert alert-success");
		document.getElementById("verifica2").style.display = "none";
		document.getElementById("verifica1").style.display = "inline-block";
    	texto1.innerHTML;
    	div.appendChild(texto1);
    	console.log("valor de email: " + EmailVerify);
    }
    console.log("Este es el nuevo valor de EmailVerify" + EmailVerify);
    return (true);
  }else{
    var texto2 = document.createTextNode( "Dato no válido, por favor ingrese un correo válido");
	$('#verifica2').prop("class", "alert alert-danger");
	$('#emailState').val(0);
	document.getElementById("verifica1").style.display = "none";
	document.getElementById("verifica2").style.display = "inline-block";
    texto2.innerHTML;
    div2.appendChild(texto2);
    return (false)
	}
}


	$('#email').on('blur', function(event){
    event.preventDefault();
    var email = $('#email').val();	
    var photo = $('#photo').val();
    var non = $('#non').val();
    if (email != "") {
          $.ajax({
                  url:"controlador/controllerEmailPhoto.php",
                  method:'POST',
                  data: {email, photo}, 
                  success: function(data){
                  	if (non == 0) {
             		$('#emailState').val(0);
                   }
                       var link = 'PhotoBase/Users/' + data.photo;
                       $("#verifica3").append(data);
                       $("#photo").attr('src', link);
                   }
                 })
          }
       });




	/*$('#registro').on('click', function(event){
		var sex = $('input[name="Sex"]:checked').val();
		var names  = $('#names').val();
		var lastnames = $('#lastnames').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var password = $('#passname').val();
		var dategrow = $('#dategrow').val();
		var EmailVerify = $('#emailState').val();
		var pase = $('#controlPass').val();
		console.log(EmailVerify);
		if(pase == "allow" && EmailVerify == "1"){
		          $.ajax({
                  url:"controlador/controllerEmailPhoto.php",
                  method:'POST',
                  data: {sex, names, lastnames, phone, email, password, dategrow, EmailVerify, pase}, 
                  success: function(data){
						alert('Registro correcto');
                   }
                 })
		      }else{
		      	alert("Algo está mal, por favor verifique sus datos");
		      }
	})*/


function confirma(){
	var pass1 = $('#passname').val();
	var pass2 = $('#passname2').val();
	if (pass1 != "" && pass1 == pass2) {
		$("#controlPass").val("allow");
		var passe = $("#controlPass").val();
		console.log(passe);		
		var div = document.getElementById("message1");
		document.getElementById("message2").style.display = "none";
		document.getElementById("message1").style.display = "inline-block";
		$("#message1").prop("class", "alert alert-success");
		var texto = document.createTextNode('Las contraseñas coinciden ✔');
		div.innerHTML;
		texto.innerHTML; 
		completo = div.appendChild(texto);
		//document.form.appendChild(div);
	}else{
		var div = document.getElementById("message2");
		document.getElementById("message1").style.display = "none";
		document.getElementById("message2").style.display = "inline-block";
		$("#message2").prop("class", "alert alert-danger");
		var texto = document.createTextNode('Las contraseñas no coinciden ✘');
		div.innerHTML;
		texto.innerHTML; 
		completo = div.appendChild(texto);
		//document.form.appendChild(div);
		$("#controlPass").val("deny");
	}
}