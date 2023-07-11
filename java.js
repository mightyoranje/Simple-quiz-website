
var all = ['Easy Question 1', 'Easy Question 2', 'Easy Question 3','Hard Question 1', 'Hard Question 2', 'Hard Question 3'
        ,'Easy Question 4', 'Easy Question 5', 'Easy Question 6','Hard Question 4', 'Hard Question 5', 'Hard Question 6'];

function myQuestion(){

    document.getElementById("p2").style.opacity = "1";
    document.getElementById("p2").style.pointerEvents = "auto";
    document.getElementById("p2").style.transform = "translate(-50%, -50%) scale(1)";

   var collection = document.getElementsByClassName("question");
   collection[0].innerHTML = all[Math.floor(Math.random() * all.length)];
}

function exit1(){
    document.getElementById("p2").style.opacity = "0";
    document.getElementById("p2").style.pointerEvents = "none";
    document.getElementById("p2").style.transform = "translate(-50%, -50%) scale(0.9)";
    reset(o1);reset(o2);reset(o3);reset(o4);
}

function selectCat(){
    document.getElementById("cat").style.opacity = "1";
    document.getElementById("cat").style.pointerEvents = "auto";
    document.getElementById("cat").style.transform = "translate(-50%, -50%) scale(1)";
}

function exit2(){
    document.getElementById("cat").style.opacity = "0";
    document.getElementById("cat").style.pointerEvents = "none";
    document.getElementById("cat").style.transform = "translate(-50%, -50%) scale(0.9)";
}

function exit3(){
    document.getElementById("diff").style.opacity = "0";
    document.getElementById("diff").style.pointerEvents = "none";
    document.getElementById("diff").style.transform = "translate(-50%, -50%) scale(0.9)";
}

var i = 0;

function inc(){
    i++;
}

function correct(something){
    something.style.color = "white";
    something.style.background = "green";
    something.style.border = "1px solid white";
    something.style.cursor = "not-allowed";
}

function wrong(something){
    something.style.color = "white";
    something.style.background = "red";
    something.style.border = "1px solid white";
    something.style.cursor = "not-allowed";
}

function reset(something){
    something.style.color = "#FFE06F";
    something.style.background = "black";
    something.style.border = "1px solid white";
    something.style.cursor = "pointer";
}

function answer(){
    if(document.getElementById("q").innerHTML == "Easy Question 1"){
        correct(o1);
        wrong(o2);
        wrong(o3);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Easy Question 2"){
        correct(o3);
        wrong(o1);
        wrong(o2);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Easy Question 3"){
        correct(o4);
        wrong(o2);
        wrong(o1);
        wrong(o3);
    }
    else if(document.getElementById("q").innerHTML == "Easy Question 4"){
        correct(o2);
        wrong(o1);
        wrong(o3);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Easy Question 5"){
        correct(o4);
        wrong(o1);
        wrong(o2);
        wrong(o3);
    }
    else if(document.getElementById("q").innerHTML == "Easy Question 6"){
        correct(o1);
        wrong(o2);
        wrong(o3);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Hard Question 1"){
        correct(o3);
        wrong(o1);
        wrong(o2);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Hard Question 2"){
        correct(o4);
        wrong(o3);
        wrong(o2);
        wrong(o1);
    }
    else if(document.getElementById("q").innerHTML == "Hard Question 3"){
        correct(o2);
        wrong(o1);
        wrong(o3);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Hard Question 4"){
        correct(o3);
        wrong(o1);
        wrong(o2);
        wrong(o4);
    }
    else if(document.getElementById("q").innerHTML == "Hard Question 5"){
        correct(o1);
        wrong(o4);
        wrong(o3);
        wrong(o2);
    }
    else if(document.getElementById("q").innerHTML == "Hard Question 6"){
        correct(o4);
        wrong(o1);
        wrong(o2);
        wrong(o3);
    }
}

i = 0;

function op(x){
    answer1();
    if(x.style.background == "green"){
        i++;
    }
}

function answer1(){
    if(document.getElementById("g").innerHTML == "Easy Question 1"){
        correct(k1);
        wrong(k2);
        wrong(k3);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Easy Question 2"){
        var button = document.getElementById("k3").innerHTML ;
        correct(k3);
        wrong(k1);
        wrong(k2);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Easy Question 3"){
        var button = document.getElementById("k4").innerHTML ;
        correct(k4);
        wrong(k2);
        wrong(k1);
        wrong(k3);
    }
    else if(document.getElementById("g").innerHTML == "Easy Question 4"){
        correct(k2);
        wrong(k1);
        wrong(k3);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Easy Question 5"){
        correct(k4);
        wrong(k1);
        wrong(k2);
        wrong(k3);
    }
    else if(document.getElementById("g").innerHTML == "Easy Question 6"){
        correct(k1);
        wrong(k2);
        wrong(k3);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Hard Question 1"){
        correct(k3);
        wrong(k1);
        wrong(k2);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Hard Question 2"){
        correct(k4);
        wrong(k3);
        wrong(k2);
        wrong(k1);
    }
    else if(document.getElementById("g").innerHTML == "Hard Question 3"){
        correct(k2);
        wrong(k1);
        wrong(k3);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Hard Question 4"){
        correct(k3);
        wrong(k1);
        wrong(k2);
        wrong(k4);
    }
    else if(document.getElementById("g").innerHTML == "Hard Question 5"){
        correct(k1);
        wrong(k4);
        wrong(k3);
        wrong(k2);
    }
    else if(document.getElementById("g").innerHTML == "Hard Question 6"){
        correct(k4);
        wrong(k1);
        wrong(k2);
        wrong(k3);
    }
}

function sub1(){
    document.getElementById("cat").style.opacity = "0";
    document.getElementById("cat").style.pointerEvents = "none";
    document.getElementById("cat").style.transform = "translate(-50%, -50%) scale(0.9)";
    document.getElementById("diff").style.opacity = "1";
    document.getElementById("diff").style.pointerEvents = "auto";
    document.getElementById("diff").style.transform = "translate(-50%, -50%) scale(1)";
    x = 1;
}

function sub2(){
    document.getElementById("cat").style.opacity = "0";
    document.getElementById("cat").style.pointerEvents = "none";
    document.getElementById("cat").style.transform = "translate(-50%, -50%) scale(0.9)";
    document.getElementById("diff").style.opacity = "1";
    document.getElementById("diff").style.pointerEvents = "auto";
    document.getElementById("diff").style.transform = "translate(-50%, -50%) scale(1)";
    x = 2;
}

function easy(){
    document.getElementById("diff").style.opacity = "0";
    document.getElementById("diff").style.pointerEvents = "none";
    document.getElementById("diff").style.transform = "translate(-50%, -50%) scale(0.9)";
    document.getElementById("frame").style.opacity = "1";
    document.getElementById("frame").style.pointerEvents = "auto";
    document.getElementById("frame").style.transform = "translate(-50%, -50%) scale(1)";
    y = 1;
    start();
}

function hard(){
    document.getElementById("diff").style.opacity = "0";
    document.getElementById("diff").style.pointerEvents = "none";
    document.getElementById("diff").style.transform = "translate(-50%, -50%) scale(0.9)";
    document.getElementById("frame").style.opacity = "1";
    document.getElementById("frame").style.pointerEvents = "auto";
    document.getElementById("frame").style.transform = "translate(-50%, -50%) scale(1)";
    y = 2;
    start();
}

function exit4(){
    document.getElementById("frame").style.opacity = "0";
    document.getElementById("frame").style.pointerEvents = "none";
    document.getElementById("frame").style.transform = "translate(-50%, -50%) scale(0.9)";
    document.getElementById("res").style.opacity = "1";
    document.getElementById("res").style.pointerEvents = "auto";
    document.getElementById("res").style.transform = "translate(-50%, -50%) scale(1)";
    document.getElementById("lm").innerHTML = "Next";
    reset(k1);reset(k2);reset(k3);reset(k4);
    counter = 0;
}

var counter = 0;

function ct(){
    counter++;
}

function start(){
    ct();
    if(counter == 1){
        if(x == 1 && y == 1){
            document.getElementById("g").innerHTML = all[0];
        }
        else if(x == 1 && y == 2){
            document.getElementById("g").innerHTML = all[3];
        }
        else if(x == 2 && y == 1){
            document.getElementById("g").innerHTML = all[6];
        }
        else if(x == 2 && y == 2){
            document.getElementById("g").innerHTML = all[9];
        }
    }
    else if(counter == 2){
        reset(k1);reset(k2);reset(k3);reset(k4);
        if(x == 1 && y == 1){
            document.getElementById("g").innerHTML = all[1];
        }
        else if(x == 1 && y == 2){
            document.getElementById("g").innerHTML = all[4];
        }
        else if(x == 2 && y == 1){
            document.getElementById("g").innerHTML = all[7];
        }
        else if(x == 2 && y == 2){
            document.getElementById("g").innerHTML = all[10];
        }
    }
    else if(counter == 3){
        reset(k1);reset(k2);reset(k3);reset(k4);
        if(x == 1 && y == 1){
            document.getElementById("g").innerHTML = all[2];
            document.getElementById("lm").innerHTML = "Show Result";
        }
        else if(x == 1 && y == 2){
            document.getElementById("g").innerHTML = all[5];
            document.getElementById("lm").innerHTML = "Show Result";
        }
        else if(x == 2 && y == 1){
            document.getElementById("g").innerHTML = all[8];
            document.getElementById("lm").innerHTML = "Show Result";
        }
        else if(x == 2 && y == 2){
            document.getElementById("g").innerHTML = all[11];
            document.getElementById("lm").innerHTML = "Show Result";
        }
    }
    else if(counter == 4){
        exit4();
        marks();
    }
}

function exit5(){
    document.getElementById("res").style.opacity = "0";
    document.getElementById("res").style.pointerEvents = "none";
    document.getElementById("res").style.transform = "translate(-50%, -50%) scale(0.9)";
    counter = 0;
    i = 0;
}

function marks(){
    document.getElementById("result").innerHTML = i;
}