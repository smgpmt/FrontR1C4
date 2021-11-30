function registroUsuario(){
    var name = $.trim($("#name").value());
    var email = $.trim($("#email").value());
    var password = $.trim($("#password").value());
    var password2 = $.trim($("#password2").value());

    if(name != "" && email != "" && password != "" && password2 != ""){
        if(password != password2){
            alert("Las contraseñas no coinciden");
            $("#password2").focus();
        }
        if(email==email){
            alert("El correo ya existe")
        }
        else{
            $.ajax({
                url:'http://158.101.99.133/api/user/new',
                data:JSON.stringify({
                    "email":email,
                    "password":password,
                    "name":name
                }),
                type:'POST',
                contentType:'application/json',
                dataType:'json',
                error: function(resultado){
                    alert("Usuario no registrado");
                    console.log(resultado);
                },
                success:function(respuesta){
                    console.log(respuesta);
                        if(respuesta.id==null){
                            alert("No se creo la cuenta");
                            $("#name").focus();
                            $("#email").focus();
                        }else{
                            alert("La cuenta se creo de manera correcta");
                        }
                        $(':input').val('');
                        $('#name').focus();
                    }
               
            });
        }

    }
    return false;
}

