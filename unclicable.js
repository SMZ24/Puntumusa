const buttonHeigth = 36;
const buttonWidth = 102; 

const maxWidth = window.innerWidth - buttonWidth;
const maxHeigth = window.innerHeight - buttonHeigth;

var clicked = 1;
var Ycli = 1;

window.addEventListener('DOMContentLoaded',() => {
    const  button = document.getElementById("UnclicableButton");

    button.addEventListener('mouseover', () =>{
        if(clicked > 3 && Ycli != 0){
            console.log('You hovered me');
            button.style.left = Math.floor(Math.random()* (  maxWidth +1)) + "px";
            button.style.top = Math.floor(window.innerHeight + (Math.random()* ( maxHeigth +1))) + "px";
        }
})  


    button.addEventListener('click',() => {
    
    if(clicked > 3 && Ycli != 0 ){
        button.style.left = Math.floor(Math.random()* (  maxWidth +1)) + "px";
        button.style.top = Math.floor(window.innerHeight + (Math.random()* ( maxHeigth +1))) + "px";
    }
    clicked +=1;
    })
});

function GetImageNO(ImgName){
    let img = document.querySelector("#YesButton");
    var result = document.getElementById("yes"); 


   

    if (clicked == 1 && Ycli != 0){
        img.setAttribute("src", ImgName);
        console.log('Image change');
        result.innerHTML = "🤧Hmm.. Please think one more time babe🥺"
    

    }
    if (clicked == 2 && Ycli != 0){
        img.setAttribute("src", "gif/goma-peach.gif");
        console.log('Image change');
        result.innerHTML = "Nahi yesa nahi ho sakta😭😭 Firse soch looo"

    }
    if (clicked == 3  && Ycli != 0){
        img.setAttribute("src", "gif/tears-cute.gif");
        console.log('Image change');
        result.innerHTML = "😭Ma jasto kta feri bhettau dai nau ni. Last chance🥺"
    }
    if ( Ycli == 0){
        img.setAttribute("src", "gif/dubu.gif");
        console.log('Image change');
        result.innerHTML = "😁Aba no click gare ra k faida!! Timle Yes vani sakau😁"
    }
}

function GetImageYes(ImgName){
    let img = document.querySelector("#YesButton");
    img.setAttribute("src", ImgName);
    var result = document.getElementById("yes"); 
    result.innerHTML = "😁😁Yes I knew itt I also love you soo much babee❤️😘😘";
    Ycli = 0;



function ChangePara(Para){
   

}

}

