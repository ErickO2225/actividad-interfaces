function guadar_localStorage() {
    var categoria = document.getElementById("categoria").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var info = document.getElementById("info").checked;
    var terminos = document.getElementById("terminos").checked;
  
    const registro_uusario = {
      categoria:categoria,
      name: name,
      lastname: lastname,
      email: email,
      passwd: passwd,
      info: info,
      terminos: terminos,
    };
  
    if (
      window.localStorage.getItem('r-' + email) !== undefined &&
      window.localStorage.getItem('r-' + email)
    ) {
  
      Swal.fire({
        icon: "error",
        title: "Usuario ya registrado",
        showConfirmButton: false,
        timer: 1500,
      });
  
    } else {
  
      if (name == "" || lastname == "" || email == "" || passwd == "" || terminos != true) {
        Swal.fire({
          icon: "error",
          title: "Datos Solicitados",
          showConfirmButton: false,
          timer: 1500,
        }).then((result) => {
          setTimeout(function () {
            if (document.getElementById('name')) {
              document.getElementById('name').focus();
            }
          }, 1);
        });
  
      } else {
        localStorage.setItem('r-' + email, JSON.stringify(registro_uusario));
        categoria = document.getElementById("categoria").tabIndex = 0;
        name = document.getElementById("name").value = "";
        lastname = document.getElementById("lastname").value = "";
        email = document.getElementById("email").value = "";
        passwd = document.getElementById("passwd").value = "";
        info = document.getElementById("info").checked = false;
        terminos = document.getElementById("terminos").checked = false;
  
        Swal.fire({
          icon: "success",
          title: "Almacenado Correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
  
      }
    }
  }
  
  
 
  