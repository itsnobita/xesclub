function my(){

    let x= document.getElementById("city").value;
    if(x==""){
       alert("Please enter valid city name");
    }else{
        
    let txt="Vacancy in "+x;
 
    document.getElementById("citty").innerHTML=txt;
    document.getElementById("citty").style.fontSize = "x-large";
    let vac=Math.floor(Math.random() * 6) + 1;
    document.getElementById("vacancy").innerHTML=vac;
    document.getElementById("vacancy").style.fontSize = "x-large";
    document.getElementById("myy").disabled = true;
    }
    }