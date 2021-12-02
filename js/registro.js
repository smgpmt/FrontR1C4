async function registrar(event) {
    event.preventDefault();
    try {
        const emailValue = emailField.value.trim();
        const passwordValue = passwordField.value.trim();
        const passwordValue2 = passwordField2.value.trim();
        const nameValue = nameField.value.trim();
       
      if (emailField && passwordField && nameField && passwordVField2) {
        
        if (emailValue != "") {
          console.log(`el email es válido`);
          $("emailValue").focus();
          if (passwordValue != "") {
            passwordField.style.backgroundColor = "inherit";
            $("passwordValue").focus();
            if (nameValue != "") {
                console.log(`el nombre es válido`);
                $("nameValue").focus();
                if(passwordValue != passwordValue2){
                    alert("Las contraseñas no coinciden");
                    $("#passwordValue2").focus();
                }
                
            await sendDataSync(emailValue, passwordValue, passwordValue2, nameValue); 
            console.log(`he llamado al servidor`);
            
            
            }else{
                console.log(`El nombre no es válido`);
            alert("El nombre no es válido");
            nameField.style.border="solid 1px #ff0000"
            }
           
          } else {
            console.log(`la contraseña no es válida`);
            alert("La contraseña no es valida");
            passwordField.style.border="solid 1px #ff0000"
          }
        } else {
          emailField.style.border="solid 1px #ff0000"
          console.log(`el email no es válido`);
          alert("El email no es valido");
        }
  
        console.log(`emailValue`, emailValue);
        console.log(`passwordValue`, passwordValue);
        console.log(`nameValue`, nameValue);
        
      } else {
        alert("alguno de los campos no existe");
      }
    } catch (error) {
      console.log(`se presentó un error inesperado`, error);
      alert("Los datos no son correctos");
    }
  
    console.log(`he sido enviado`);
  }
  
  async function sendDataSync(em, pass, nam) {
    try {
      const url = 'http://158.101.99.133:8080/api/user/new';
      const body = {
      email: em,
      password: pass,
      name: nam,
    };
      const fetchOptions = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };
     
      const response = await fetch(url);
      const convertedJson = await response.json();
      console.log(`convertedJson`, convertedJson);
      if (convertedJson.token) {
        console.log(`Bienvenido`);
        alert("Bienvenido:" + respuesta.name);
      } else {
        console.log(`las credenciales no son válidas`);
        alert("No existe un usuario con estos datos");
      }
    } catch (error) {
      console.log(`se presentó un error: `, error);
      alert("No existe un usuario con estos datos");
    }
  }
