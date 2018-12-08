function hoverButton(){
    document.getElementById("btn").style.backgroundColor = "#080";
}


 
function hover(){
    document.getElementById("btn").style.backgroundColor = "#00bc8a";
}



  function show(){
      document.getElementById("btn2").style.visibility = "visible";
  }


 function hide(){
      document.getElementById("btn2").style.visibility = "hidden";
  }



var n = 0;

function hoverd(){
    n = n+1;
    document.getElementById("img1").innerHTML =n;
}




function point(){
    document.getElementById("clicks").style.color = "#5d5";
      document.getElementById("clicks").style.textDecoration = "underLine";
}


function valed(){
    var t = prompt("What is your name ?");
    if(t == "ahmed"){
        window.location = "index.html";
    }
    else{
        alert("wrong name");
    }
}




