window.onload = function () {
    localStorage.clear();
}

var max_score = 20;

var age_1 = Number(document.getElementById("radio_below_20").value);
var age_2 = Number(document.getElementById("radio21-40").value);
var age_3 = Number(document.getElementById("radio41-60").value);
var age_4 = Number(document.getElementById("radio60-plus").value);
var age_5 = Number(document.getElementById("radio60-comorbid").value);

var symptom_1 = Number(document.getElementById("symptom1").value);
var symptom_2 = Number(document.getElementById("symptom2").value);
var symptom_3 = Number(document.getElementById("symptom3").value);
var symptom_4 = Number(document.getElementById("symptom4").value);
var symptom_5 = Number(document.getElementById("symptom5").value);

var travel_no = Number(document.getElementById("travel_no").value);
var travel_yes = Number(document.getElementById("travel_yes").value);

var no_contact = Number(document.getElementById("no_contact").value);
var short_contact = Number(document.getElementById("short_contact").value);
var with_contact = Number(document.getElementById("with_contact").value);

//age functions
function score_age_1() {
    var total = age_1;
    localStorage.setItem('age', total);

    console.log(total);
}

function score_age_2() {
    var total = age_2;
    localStorage.setItem('age', total);

    console.log(total);
}

function score_age_3() {
    var total = age_3;
    localStorage.setItem('age', total);

    console.log(total);
}

function score_age_4() {
    var total = age_4;
    localStorage.setItem('age', total);

    console.log(total);
}

function score_age_5() {
    var total = age_5;
    localStorage.setItem('age', total);

    console.log(total);
}



//symptom functions
function score_symptom_1() {
    var total = symptom_1;
    localStorage.setItem('symptom', total);
    console.log(total);
}

function score_symptom_2() {
    var total = symptom_2;
    localStorage.setItem('symptom', total);
    console.log(total);
}

function score_symptom_3() {
    var total = symptom_3;
    localStorage.setItem('symptom', total);
    console.log(total);
}

function score_symptom_4() {
    var total = symptom_4;
    localStorage.setItem('symptom', total);
    console.log(total);
}

function score_symptom_5() {
    var total = symptom_5;
    localStorage.setItem('symptom', total);
    console.log(total);
}

//travelling functions
function score_travelling_0() {
    var total = travel_no;
    localStorage.setItem('travel', total);
    console.log(total);
}

function score_travelling_5() {
    var total = travel_yes;
    localStorage.setItem('travel', total);
    console.log(total);
}

//contact functions
function score_contact_0() {
    var total = no_contact;
    localStorage.setItem('contact', total);
    console.log(total);
}

function score_contact_2() {
    var total = short_contact;
    localStorage.setItem('contact', total);
    console.log(total);
}

function score_contact_5() {
    var total = with_contact;
    localStorage.setItem('contact', total);
    console.log(total);
}

function display_result() {
    //display score
    var age = Number(localStorage.getItem("age"));
    var symptom = Number(localStorage.getItem("symptom"));
    var travel = Number(localStorage.getItem("travel"));
    var contact = Number(localStorage.getItem("contact"));
    var total = age + symptom + travel + contact;
    document.getElementById('score').innerHTML = total;


    document.getElementById("results").className = "animate__animated animate__rubberBand";

    //display_results
    if (total == 1) {
        document.getElementById("results").innerHTML = "Mild";
        document.getElementById("results").style.boxShadow = "15px 15px 30px greenyellow";
        document.getElementById("results").style.backgroundColor = "greenyellow";
    }
    if (total == 2) {
        document.getElementById("results").innerHTML = "Mild";
        document.getElementById("results").style.boxShadow = "15px 15px 30px greenyellow";
        document.getElementById("results").style.backgroundColor = "greenyellow";
    }


    if (total == 3) {
        document.getElementById("results").innerHTML = "Mild";
        document.getElementById("results").style.boxShadow = "15px 15px 30px greenyellow";
        document.getElementById("results").style.backgroundColor = "greenyellow";
    }


    if (total == 4) {
        document.getElementById("results").innerHTML = "Mild";
        document.getElementById("results").style.boxShadow = "15px 15px 30px greenyellow";
        document.getElementById("results").style.backgroundColor = "greenyellow";
    }


    if (total == 5) {
        document.getElementById("results").innerHTML = "Mild";
        document.getElementById("results").style.boxShadow = "15px 15px 30px greenyellow";
        document.getElementById("results").style.backgroundColor = "greenyellow";
    }


    if (total == 6) {
        document.getElementById("results").innerHTML = "Moderate";
        document.getElementById("results").style.boxShadow = "15px 15px 30px yellow";
        document.getElementById("results").style.backgroundColor = "yellow";
    }


    if (total == 7) {
        document.getElementById("results").innerHTML = "Moderate";
        document.getElementById("results").style.boxShadow = "15px 15px 30px yellow";
        document.getElementById("results").style.backgroundColor = "yellow";
    }


    if (total == 8) {
        document.getElementById("results").innerHTML = "Moderate";
        document.getElementById("results").style.boxShadow = "15px 15px 30px yellow";
        document.getElementById("results").style.backgroundColor = "yellow";
    }


    if (total == 9) {
        document.getElementById("results").innerHTML = "Moderate";
        document.getElementById("results").style.boxShadow = "15px 15px 30px yellow";
        document.getElementById("results").style.backgroundColor = "yellow";
    }


    if (total == 10) {
        document.getElementById("results").innerHTML = "Moderate";
        document.getElementById("results").style.boxShadow = "15px 15px 30px yellow";
        document.getElementById("results").style.backgroundColor = "yellow";
    }


    if (total == 11) {
        document.getElementById("results").innerHTML = "Moderate To Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px orange";
        document.getElementById("results").style.backgroundColor = "orange";
    }


    if (total == 12) {
        document.getElementById("results").innerHTML = "Moderate To Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px orange";
        document.getElementById("results").style.backgroundColor = "orange";
    }


    if (total == 13) {
        document.getElementById("results").innerHTML = "Moderate To Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px orange";
        document.getElementById("results").style.backgroundColor = "orange";
    }


    if (total == 14) {
        document.getElementById("results").innerHTML = "Moderate To Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px orange";
        document.getElementById("results").style.backgroundColor = "orange";
    }


    if (total == 15) {
        document.getElementById("results").innerHTML = "Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 50px red";
        document.getElementById("results").style.backgroundColor = "red";
    }


    if (total == 16) {
        document.getElementById("results").innerHTML = "Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px red";
        document.getElementById("results").style.backgroundColor = "red";
    }

    if (total == 17) {
        document.getElementById("results").innerHTML = "Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px red";
        document.getElementById("results").style.backgroundColor = "red";
    }

    if (total == 18) {
        document.getElementById("results").innerHTML = "Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px red";
        document.getElementById("results").style.backgroundColor = "red";
    }

    if (total == 19) {
        document.getElementById("results").innerHTML = "Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px red";
        document.getElementById("results").style.backgroundColor = "red";
    }

    if (total == 20) {
        document.getElementById("results").innerHTML = "Severe";
        document.getElementById("results").style.boxShadow = "15px 15px 30px red";
        document.getElementById("results").style.backgroundColor = "red";
    }
}