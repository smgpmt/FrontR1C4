async function loginProcess(event) {
    event.preventDefault();
    try {
      
      const emailField = document.getElementById("email");
      const passwordField = document.querySelector("#password");
      if (emailField && passwordField) {
        const emailValue = emailField.value.trim();
        const passwordValue = passwordField.value.trim();
        if (emailValue != "") {
          console.log(`el email es válido`);
          if (passwordValue != "") {
            passwordField.style.backgroundColor = "inherit";
            
            await sendDataSync(emailValue, passwordValue); 
            console.log(`he llamado al servidor`);
           
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
        
      } else {
        alert("alguno de los campos no existe");
      }
    } catch (error) {
      console.log(`se presentó un error inesperado`, error);
      alert("No existe un usuario con estos datos");
    }
  
    console.log(`he sido enviado`);
  }
  
  async function sendDataSync(em, pass) {
    try {
      const url = `http://158.101.99.133/api/user/${em}/${pass}`;
      const body = {
      email: em,
      password: pass,
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
  
  