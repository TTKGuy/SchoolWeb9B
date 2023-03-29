//1 for the names 2 for the values
var Income1 = ""
var Income2= ""
var UnIncome1 = ""
var UnIncome2 = ""
//0 for income 1 for unincome
var budgetselect = 0
var intervalID = window.setInterval(setNat, 500);
var inc = 0
var spend = 0




function ChangeType(choice){
    if(budgetselect == 0 && choice == 1){
        document.getElementById('lefttext').placeholder = "Spending Title"
        document.getElementById('righttext').placeholder = "Spending Number (per month)"
        Income1 = document.getElementById("lefttext").value;
        Income2 = document.getElementById("righttext").value;
        document.getElementById('lefttext').value = UnIncome1;
        document.getElementById('righttext').value = UnIncome2;
        budgetselect = 1
    }
    else if(budgetselect == 1 && choice == 0){
        document.getElementById('lefttext').placeholder = "Job Title"
        document.getElementById('righttext').placeholder = "Income Number"
        UnIncome1 = document.getElementById("lefttext").value;
        UnIncome2 = document.getElementById("righttext").value;
        document.getElementById('lefttext').value = Income1;
        document.getElementById('righttext').value = Income2;
        budgetselect = 0
    }

}

function checkInput(ob) {
    var invalidChars = /[^0-9]/gi
    if(invalidChars.test(ob.value)) {
              ob.value = ob.value.replace(invalidChars,"");
        }
}

function setNat(){
    CombArray(Income2.split(' '), inc)
    CombArray(UnIncome2.split(' '), spend)
    var NAT = 0
    console.log(NAT)
}

function CombArray(array, comboutput){
    array.forEach(item => {
        comboutput += item;
    });
}


function meals(){
    var select = document.getElementById('Meals');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
if(value=="q"){
    foodtime.innerHTML="x1"
    foodkcal.innerHTML="y1"
    foodtaste.innerHTML="z1"
}
if(value=="w"){
    foodtime.innerHTML="x2"
    foodkcal.innerHTML="y2"
    foodtaste.innerHTML="z2"
}
if(value=="e"){
    foodtime.innerHTML="x3"
    foodkcal.innerHTML="y3"
    foodtaste.innerHTML="z3"
}
if(value=="r"){
    foodtime.innerHTML="x4"
    foodkcal.innerHTML="x1"
    foodtaste.innerHTML="x1"
}
if(value=="t"){
    foodtime.innerHTML="x5"
    foodkcal.innerHTML="x1"
    foodtaste.innerHTML="x1"
}
if(value=="s"){
    foodtime.innerHTML="x6"
    foodkcal.innerHTML="x1"
    foodtaste.innerHTML="x1"
}
if(value=="z"){
    foodtime.innerHTML="x7"
    foodkcal.innerHTML="x1"
    foodtaste.innerHTML="x1"
}

}
