const lamp = document.getElementById("lamp");
const buttonAction = document.getElementById("status");

var statusButton = "Ligar";
document.getElementById("status").textContent = statusButton


    function islampbroken(){
        return lamp.src.indexOf( 'quebrada') >-1
    }


     function lampBroke (){
     lamp.src ="./IMG/quebrada.jpg"
     statusButton = "Quebrada"
     document.getElementById("status").textContent = statusButton
     }


     function lampOn(){
     if (!islampbroken () && statusButton =="Ligar") {
        lamp.src ="./IMG/ligada.jpg";
    
        statusButton = "Desligar"
        document.getElementById("status").textContent = statusButton
     } else if(!islampbroken () && statusButton =="Desligar") {
        lamp.src ="./IMG/desligada.jpg"

        statusButton = "Ligar"
        document.getElementById("status").textContent = statusButton
     }      
     }
    



buttonAction.addEventListener("click",lampOn)
lamp.addEventListener("mouseover",lampOn)
lamp.addEventListener("mouseleave",lampOn)
lamp.addEventListener("dblclick", lampBroke)