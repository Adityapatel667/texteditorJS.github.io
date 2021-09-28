let textArea=document.getElementById("textArea");
let btn=document.getElementById("btn");
let notes=document.getElementById("notes");
let screenValue=document.getElementsByClassName("screen");
let screen=localStorage.getitem;

btn.addEventListener("click",function(){
    //console.log((textArea.value).toUpperCase());
    if (textArea!==null){
        //console.log((textArea.value).toUpperCase());
        
        textArea.value=(textArea.value).toUpperCase();
    }



})
let lower=document.getElementById("lower");
lower.addEventListener("click", function(){

    if(textArea!==null){
        //console.log((textArea.value).toLowerCase());
        textArea.value=(textArea.value).toLowerCase();
    }
})

let clear=document.getElementById("clear")
clear.addEventListener("click", function(){

    if (textArea!==null){
        textArea.value="";
    }
})


/// view the notes