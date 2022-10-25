var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 1500);
}

function showPage(){
    document.getElementById("Loader").style.display = "none";
    document.getElementById("bg-loader").style.display = "none";
}

const d = new Date();
    let year = d.getFullYear();
    document.getElementById('date').innerHTML = year;