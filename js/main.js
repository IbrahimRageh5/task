var counter=0;

function increment(){
    counter++;
    document.getElementById("demo").innerHTML=counter;
}

function Decrement(){
    counter--;
    document.getElementById("demo").innerHTML=counter;
}


function Validit(){
    var TheValue = document.getElementById("input").value;

    var result = document.getElementById("result");

    if(TheValue == ""){
      result.innerHTML = "Please Enter Data";
    }else if(isNaN(TheValue)){
      result.innerHTML = "Please Enter Number";
    }
    else{
      result.innerHTML = TheValue * 30;
    }
    return false;
}