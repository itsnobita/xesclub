function my(){

    let x= document.getElementById("city").value;
    if(x==""){
       alert("Please enter valid city name");
    }else{
        if(localStorage.getItem("xesclub")!==null){
            let txt="Vacancy in "+x;
 
    document.getElementById("citty").innerHTML=txt;
    document.getElementById("citty").style.fontSize = "x-large";
    document.getElementById("vacancy").innerHTML=localStorage.getItem("xesclub");
    document.getElementById("vacancy").style.fontSize = "x-large";
    document.getElementById("myy").disabled = true;
        }
        else{
    let txt="Vacancy in "+x;
 
    document.getElementById("citty").innerHTML=txt;
    document.getElementById("citty").style.fontSize = "x-large";
    let vac=Math.floor(Math.random() * 6) + 1;
            localStorage.setItem("xesclub",vac);
    document.getElementById("vacancy").innerHTML=vac;
    document.getElementById("vacancy").style.fontSize = "x-large";
    document.getElementById("myy").disabled = true;
        }
    }
    }
