var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 3000);
}

function showPage(){
    document.getElementById("Loader").style.display = "none";
}

const d = new Date();
    let year = d.getFullYear();
    document.getElementById('date').innerHTML = year;