function validar(){
    var txtCorreo = document.getElementById("txtCorreo"),
        txtNom = document.getElementById("txtNom"),
        numEdad = document.getElementById("numEdad"),
        txtDate = document.getElementById("txtDate"),
        numAltura = document.getElementById("numAltura"),
        frmData = document.getElementById("frmData"),
        validated = true,
        errors = new Array();

    var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        numericoPattern = /^\d+$/,
        notEmptyPattern = /\S+/;

    if(!emailPattern.test(txtCorreo.value)){
        validated = false;
        errors.push("Correo Electrónico Mal Formado");
    }
    if(!notEmptyPattern.test(txtNom.value)){
        validated = false;
        errors.push("Nombre Completo no puede ir Vacío");
    }
    if(!notEmptyPattern.test(txtDate.value)){
        validated = false;
        errors.push("La Fecha no Puede Venir Vacía");
    }
    var tmpDate = Date.parse(txtDate.value);
    if(isNaN(tmpDate)){
        validated = false;
        errors.push("La Fecha no tiene el formato adecuado");
    }

    if(!validated){
        var errorMsgs = errors.toString().replace(",","\n");
        alert(errorMsgs);
    }else {
        frmData.submit();
    }

}
