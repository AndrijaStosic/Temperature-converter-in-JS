
document.getElementById("dugme1").onclick = function() {
    let vrednost = document.getElementById("input1").value;


    vrednost = (vrednost * 9 / 5) + 32;


    document.getElementById("prikazivac1").innerHTML = "Fahrenheit: " + vrednost.toFixed(2);
};


document.getElementById("dugme2").onclick = function() {
    vrednost2 = document.getElementById("input2").value;

 
    vrednost2 = (vrednost2 - 32) * 5 / 9;


    document.getElementById("prikazivac2").innerHTML = "Celsius: " + vrednost2.toFixed(2);
};
