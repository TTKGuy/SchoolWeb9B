//1 for the names 2 for the values
var Income1 = ""
var Income2= ""
var UnIncome1 = ""
var UnIncome2 = ""
//0 for income 1 for unincome
var budgetselect = 0
var inc = 0
var spend = 0
var nineplusten = "9\n10"

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
function setNat(){
    SaveThing()
    inc = CombArray(Income2.split('\n'))
    spend = CombArray(UnIncome2.split('\n'))
    NAT = inc - spend
    document.getElementById("nonbutton").innerHTML = NAT
    console.log(NAT)
}
function CombArray(array){
    let comboutput = 0
    array.forEach(item => {
        comboutput += Number(item)
    
    });
    if(comboutput == 19){
        return 21
    }
    else{
    return comboutput
}}
function SaveThing(){
    if(budgetselect == 0){
        Income1 = document.getElementById("lefttext").value;
        Income2 = document.getElementById("righttext").value;
    }
    else if(budgetselect == 1){
        UnIncome1 = document.getElementById("lefttext").value;
        UnIncome2 = document.getElementById("righttext").value;
    }
}

function MakeSchedule(){
    if(document.getElementById('STIME').value >= document.getElementById('ETIME').value){
        alert("The start time is later than the end time, dumbass")}
    else{
        var timeStart = new Date("01/01/2007 " + document.getElementById('STIME').value).getHours();
        var timeEnd = new Date("01/01/2007 " + document.getElementById('ETIME').value).getHours();
        var hourDiff = timeEnd - timeStart; 
        alert(hourDiff)
    }
}

function TestFunc(){
    console.log(document.getElementById('STIME').value)
    console.log(document.getElementById('ETIME').value)
    var timeStart = new Date("01/01/2007 " + document.getElementById('STIME').value).getHours();
    var timeEnd = new Date("01/01/2007 " + document.getElementById('ETIME').value).getHours();
    var hourDiff = timeEnd - timeStart; 
    alert(hourDiff)
    if(document.getElementById('STIME').value >= document.getElementById('ETIME').value){
        alert("die")
    }

}
var choise = document.getElementById("Meals");
var value = choise.options[choise.selectedIndex].value;
var text = choise.options[choise.selectedIndex].text;
