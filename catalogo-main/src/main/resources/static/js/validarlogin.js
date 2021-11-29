function validar(){
    const email=document.getElementById('email');
    const clave=document.getElementById('password');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (email.value.length==0) {
        alert("Tiene que escribir su email")
        usuario.focus()
        return 0;        
    }

    if (expReg.test(email.value)==false) {
        alert("Tiene que escribir un email valido")
        email.focus()
        return 0;
    }

    if (clave.value.length==0) {
        alert("Tiene que escribir una contraseña")
        clave.focus()
        return 0;
        
    }

        if(email !="" && password !=""){
            $.ajax({
                url:'http://localhost:8080/api/user/'+email+'/'+password,
                type:'GET',
                contentType: 'application/json',
                dataType: 'JSON',
                error : function(result){
                    alert("Usuario no existe"),
                    console.log(result);
                },
                success : function(respuesta){
                    console.log(respuesta)
                        if(respuesta.id==null){
                            alert("No existe usuario");
                        }else{
                            alert("Bienvenido"+respuesta.name);
                        }
                        $(':input').val('');    
                        $('#name').focus();
                    }
            }); 
            return false;
        }
    
    
    
    


}