//silly
var imageopt = ["1200px-Trollface.svg.png", "plann-co. logo no bg.png", "pete-gtk-rabczuk-peter-g-front-small.jpg", "RxsMcJV4qWp-sZer8hgqALhexTIiUaNX_7wYGM2PgMc.webp", "86kHtd.png"]
document.addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key == 'ArrowDown') {
        var num = Math.floor( Math.random() * 6);
        var img = imageopt[num];
        document.getElementById("logo").src = img
        
    }
 });

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
var LsnLst = ""
var BrTime = 0

//budget calc.
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
    SaveThing()
    inc = CombArray(Income2.split('\n'))
    spend = CombArray(UnIncome2.split('\n'))
    NAT = inc - spend
    document.getElementById("nonbutton").innerHTML = NAT
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


//food plan.
function meals(){
    var select = document.getElementById('Meals');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
if(value=="x"){
    foodtime.innerHTML="No Food Selected"
    foodkcal.innerHTML="No Food Selected"
    foodtaste.innerHTML="No Food Selected"
    recipearea.innerHTML="No Food Selected"
}
if(value=="q"){
    foodtime.innerHTML="x1"
    foodkcal.innerHTML="y1"
    foodtaste.innerHTML="z1"
    recipearea.innerHTML="meal 1 recipe"
}
if(value=="w"){
    foodtime.innerHTML="x2"
    foodkcal.innerHTML="y2"
    foodtaste.innerHTML="z2"
    recipearea.innerHTML="meal 2 recipe"
}
if(value=="e"){
    foodtime.innerHTML="x3"
    foodkcal.innerHTML="y3"
    foodtaste.innerHTML="z3"
    recipearea.innerHTML="meal 3 recipe"
}
if(value=="r"){
    foodtime.innerHTML="x4"
    foodkcal.innerHTML="y4"
    foodtaste.innerHTML="z4"
    recipearea.innerHTML="meal 4 recipe"
}
if(value=="t"){
    foodtime.innerHTML="x5"
    foodkcal.innerHTML="y5"
    foodtaste.innerHTML="z5"
    recipearea.innerHTML="meal 5 recipe"
}
if(value=="s"){
    foodtime.innerHTML="x6"
    foodkcal.innerHTML="y6"
    foodtaste.innerHTML="z6"
    recipearea.innerHTML="meal 6 recipe"
}
if(value=="z"){
    foodtime.innerHTML="x7"
    foodkcal.innerHTML="y7"
    foodtaste.innerHTML="z7"
    recipearea.innerHTML="meal 7 recipe"
}

}


//school plan.
function MakeSchedule(){
    if(document.getElementById('STIME').value >= document.getElementById('ETIME').value){
        alert("The start time is later than the end time, dumbass")}
    else{
        var timeStart = new Date("01/01/2007 " + document.getElementById('STIME').value).getHours();
        var timeEnd = new Date("01/01/2007 " + document.getElementById('ETIME').value).getHours();
        var hourDiff = timeEnd - timeStart; 
        console.log(hourDiff)
        LsnLst = document.getElementById('subjects').value
        console.log(LsnLst)
        LsnLst.split('\n')
        console.log(LsnLst)
        BrTime = document.getElementById("BTIME").value
        console.log(BrTime )
        let thing = (hourDiff - BrTime * LsnLst.length)/LsnLst.length + 1
        console.log(thing)
    }
}


//testing
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
c71f670ed3ee9efb5440e6c0dde50b6321eaaed7

