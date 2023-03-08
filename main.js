//1 for the names 2 for the values
var Income1 = ""
var Income2= ""
var UnIncome1 = ""
var UnIncome2 = ""
//0 for income 1 for unincome
var budgetselect = 0






function ChangeType(){
    if(budgetselect == 0){
        alert("wored1")
        Income1 = document.getElementById("lefttext").value;
        Income2 = document.getElementById("righttext").value;
        document.getElementById('lefttext').textContent = UnIncome1;
        document.getElementById('righttext').textContent = UnIncome2;
        alert("wored2")
    }
}