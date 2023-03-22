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

var choise = document.getElementById("Meals");
var value = choise.options[choise.selectedIndex].value;
var text = choise.options[choise.selectedIndex].text;
