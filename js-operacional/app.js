//zona segura
//version nativa
document.addEventListener("DOMContentLoaded", function(){
    // recuperar id
    const nombre = $("#txtNombre").val();
    debugger;
    const cedula = $("txtCedula").val();
    
    //cambiar / asignar
    $("#txtNombre").val("Otro fulano");
    alert($("#txtNombre").val());
    $("#txtNombre").val("Dario");
    });
    
    // version jquery
    // zona segura
    $(function(){
    // recuperar id
    const nombre = $("#txtNombre").val();
    debugger;
    const cedula = $("txtCedula").val();
    
    //cambiar / asignar
    $("#txtNombre").val("Otro fulano");
    alert($("#txtNombre").val());
    $("#txtNombre").val("Dario");
    
    // añadir evento al boton
    $("#btnEnviar").on("click",function(){
        // cuando hiciste click se ejecuta aqui
        alert("Hiciste Click");
        $("#btnEnviar").removeClass("btn-warning");
        //recuperar los valores del formulario
        const nombre= $("txtNombre").val();
        const apellido= $("txtApellido").val();
        const cedula= $("txtCedula").val();
    if(nombre.trim()){
        alert("Complete este!!");
        $("#txtNombre").css("border-color","red").focus();
        return;
    }
    if(apellido.trim()){
        alert("Complete este!!");
        $("#txtApellido").css("border-color","red").focus();
        return;
     }
     if(Cedula.trim()){
        alert("Complete este!!");
        $("#txtCedula").css("border-color","red").focus();
        return;
    }
    });
    });