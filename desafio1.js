function imprimir(frase){
      document.write(frase);
  }


function encriptarTexto(){
    let textFromUI= document.getElementById("inputUsuario").value;
    console.log("mi textFromUI es:: " + textFromUI);
    let output = "";

    for(let i=0; i < textFromUI.length; i++)
    {

        let singleCharacter = textFromUI.charAt(i);

        if (singleCharacter === "a"){
            output= output + "ai";
        }
        else if(singleCharacter==="e"){
            output= output + "enter";
        }
        else if(singleCharacter==="i"){
            output= output + "imes";
        }
        else if(singleCharacter==="o"){
            output= output + "ober";
        }
        else if(singleCharacter==="u"){
            output= output + "ufat";
        }
        else {
            output = output + singleCharacter;
        }          
    }

    console.log("mi output es:: " + output);
          
    document.getElementById("inputEncriptado").value = output;

}





