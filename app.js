function change(){
    document.getElementById("para").style.color = "green";
    
    var textContent = document.getElementById("light-dark").innerHTML;

    if(textContent == "Dark"){
        document.body.style.backgroundColor = "black";
        document.getElementById("para").style.color = "Green"
        document.getElementById("light-dark").innerHTML = "Light";
    }

    if(textContent == "Light"){
        document.body.style.backgroundColor = "White";
        document.getElementById("para").style.color = "black";
        document.getElementById("light-dark").innerHTML = "Dark";
    }
}