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
    foodtime.innerHTML="10 Minutes"
    foodkcal.innerHTML="254 calories"
    foodtaste.innerHTML="tastes like eggs"
    recipearea.innerHTML="2 eggs, 6 teaspond of cream milk, a knob of butter\n\n Lightly whisk 2 large eggs, 6 tbsp single cream or full cream milk and a pinch of salt together until the mixture has just one consistency. \n Heat a small non-stick frying pan for a minute or so, then add a knob of butter and let it melt. Don’t allow the butter to brown or it will discolour the eggs.\n Pour in the egg mixture and let it sit, without stirring, for 20 seconds. Stir with a wooden spoon, lifting and folding it over from the bottom of the pan. \nLet it sit for another 10 seconds then stir and fold again.\nRepeat until the eggs are softly set and slightly runny in places. Remove from the heat and leave for a moment to finish cooking.\nGive a final stir and serve the velvety scramble without delay."
}
if(value=="w"){
    foodtime.innerHTML="40 minutes"
    foodkcal.innerHTML="317 calories"
    foodtaste.innerHTML="potato"
    recipearea.innerHTML="STEP 1Peel the potatoes and cut into 1cm-thick batons. Put into a bowl of cold water and leave to soak for at least 2 hrs to remove the starch from the potatoes – this will help them crisp while frying.STEP 2Drain the potatoes well and pat dry with kitchen paper. Fill a deep pan no more than a third full with oil and heat to 140C, or until a cube of bread dropped in browns in 60 seconds. Fry the French fries in batches for 6 mins per batch until golden straw-coloured, cooked through and lightly crisp. Drain well on kitchen paper.STEP 3Turn the heat up until the oil reaches 180C, or a cube of bread browns in 30 seconds. Fry the French fries again for 2-3 mins per batch until lightly golden and really crisp. Drain on kitchen paper and immediately season with sea salt."
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
        alert("The start time is later than the end time, this website does not support multiple days for projects, it shouldnt be that hard to plan anyways, its really easy if you think about it, just work on the hardest longest one first, i mean really, what are you struggling with???? its not that hard.")
    }
    else{
        var timeStart = new Date("01/01/2007 " + document.getElementById('STIME').value).getHours();
        var timeEnd = new Date("01/01/2007 " + document.getElementById('ETIME').value).getHours();
        var hourDiff = timeEnd - timeStart; 
        timeStart = new Date("01/01/2007 " + document.getElementById('STIME').value).getMinutes();
        timeEnd = new Date("01/01/2007 " + document.getElementById('ETIME').value).getMinutes();
        var minuteDiff = timeEnd - timeStart
        console.log("troll")
        var subjlist = document.getElementById('subjects').value
        subjlist = subjlist.split('\n')
        subjlist.sort(() => Math.random() - 0.5);
        console.log(subjlist)
        console.log(hourDiff + " " + minuteDiff)
        document.getElementById('schedule').value = "You have " + hourDiff + " Hours and " + minuteDiff + " Minutes to finish your work. \n" + 'The order in which you should complete these tasks is: \n'  + subjlist.join('\n')
}}


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
