function imprimir(frase){
      document.write(frase);
  }


let encriptedText = "";

function encriptarTexto(){
    let textFromUI= document.getElementById("inputUsuario").value;
    console.log("mi textFromUI es: " + textFromUI);
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

    console.log("mi output es: " + output);
          
    document.getElementById("inputEncriptado").value = output;

    encriptedText = output;
    return output;

}
let encriptarButton =document.getElementById("encriptarButton");
encriptarButton.addEventListener("click", encriptarTexto);

function textToClipboard() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = encriptedText;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
let copyButton =document.getElementById("copyButton");
copyButton.addEventListener("click", textToClipboard);


function desencriptarTexto(){
    let wordInput= document.getElementById("inputUsuario").value;
    function replaceAll(string, search, replace) {
        return string.split(search).join(replace);
        }
        let changeA= replaceAll(wordInput, 'ai', 'a') ;
        let changeI= replaceAll(changeA, 'imes', 'i') ;
        let changeE= replaceAll(changeI, 'enter', 'e') ;
         let changeO=replaceAll(changeE, 'ober', 'o') ; 
        let finalWord= replaceAll(changeO, 'ufat', 'u') ;
        
        document.getElementById("inputUsuario").value= finalWord ;
        console.log(finalWord);
        
       
    return finalWord ;

}
let desencriptarButton =document.getElementById("desencriptarButton");
desencriptarButton.addEventListener("click", desencriptarTexto);

    
    
   




