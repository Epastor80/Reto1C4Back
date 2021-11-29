function validar2(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(name.value.length =="" || email.value.length =="" || password.value.length =="" || password2.value.length ==""){
        alert("Ingrese la informacion solicitada");
    }else if (expReg.test(email.value)==false){
        alert("Ingrese un correo valido");
        }else{
        if(password.value != password2.value){
            alert("Claves no coinciden"),
            $('#password2').focus();
        }
        else{
            let var1 = {
                name:$("#name").val(),
                email:$("#email").val(),
                password:$("#password").val(),                
                };
                $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var1),
                url:"http://localhost:8080/api/user/new",
                
                success:function(response) {
                    console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Cuenta creada de Forma Correcta");
                    window.location.reload()
                },
                
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("No fue posible crear la cuenta");
                }
            });
    }
    return false;
}
}


