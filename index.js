
let a=0,b=0,c=0, d=0 ,e=0;
function moveToWho(){
    ++a;
    if(a%2==0){
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
    else{
        document.getElementById("who1").style.visibility = "visible";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
}
function moveToEducation(){
    ++b;
    if(b%2==0){
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
    else{
        document.getElementById("education1").style.visibility = "visible";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
}
function moveToHistory(){
    ++c;
    if(c%2==0){
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
    else{
        document.getElementById("history1").style.visibility = "visible";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
}
function moveToSkill(){
    ++d;
    if(d%2==0){
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
    else{
        document.getElementById("skill1").style.visibility = "visible";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("hobby1").style.visibility = "hidden";
    }
}
function moveToHobby(){
    ++e;
    if(e%2==0){
        document.getElementById("hobby1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("who1").style.visibility = "hidden";
    }
    else{
        document.getElementById("hobby1").style.visibility = "visible";
        document.getElementById("who1").style.visibility = "hidden";
        document.getElementById("education1").style.visibility = "hidden";
        document.getElementById("history1").style.visibility = "hidden";
        document.getElementById("skill1").style.visibility = "hidden";
    }
}