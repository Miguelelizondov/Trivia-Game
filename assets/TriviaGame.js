var intervalId;
var time = 0;
var losses = 0;
var wins = 0;
var i = 0;
var j = 0;
var c = 0;
var timeoutId;
var timeoutId2;
var questions = [
    ["What is the speed of light?", "30,000,000 Km/h","1,000 Km/h" ,"300,000 Km/s" ,"343 m/s"],
    ["What is the fifth planet on the solar system?", "Earth","Jupiter","Saturn","Neptune"],
    ["When was the electron discovered", "1956", "1937" ,"1879"  ,"1897" ],
    ["What is the lowest temperature exisiting" , "-220 Cº","-20,056 Cº" , "-400,073 Cº","-273 ºC" ],
    ["When did the Nobel Prize started?", "1945", "1938", "1901", "1972"]
]
function initialize(){
    $("#Start").show();
    
    wins = 0;
    losses = 0;
    i = 0;
    j = 0;
    time= 0;
    $("#Wins").hide();
    $("#Losses").hide();
    $("#Time-remaining").hide();
    $(".Ans").hide();
    $("#Start-Over").hide()
}


function Start(){
    time = 30;
    Show();
    $("#Time-remaining").text("Time Remaining: " + time + " Seconds");
    ShowQuestion();
    ShowAnswers();
    Interval();
}

function Show(){
    $("#Start").hide();
    $(".Ans").show();
    $("#Time-remaining").show();
    $("#Trivia-question").show();
}
function Hide(){
    $("#Start").hide();
    $(".Ans").hide();
    $("#Time-remaining").hide();
    $("#Trivia-question").show();

}
function Interval(){
    intervalId = setInterval(Timer,1000)
}

function Timer(){
    time--;
    $("#Time-remaining").text("Time Remaining: " + time + " Seconds");

    if (time == 0){
        clearInterval(intervalId);
        OutOfTime();
    }
    
}

function OutOfTime(){
    
    $("#Trivia-question").text("Out Of Time!");
    losses++;
    i++
    Hide();
    setTimeout(Start,3000);
    
}
function ShowQuestion(){
    $("#Trivia-question").text(questions[i][c]);
}
function ShowAnswers(){
    j++
    $("#FirstA").text(questions[i][j]);
    j++
    $("#SecondA").text(questions[i][j]);
    j++
    $("#ThirdA").text(questions[i][j]);
    j++
    $("#FourthA").text(questions[i][j]);
    j=0;

}

function Correct(){
    clearInterval(intervalId);
    Hide();
    $("#Trivia-question").text("Correct!");
    timeoutId = setTimeout(Start,3000);
 
}

function Lose(){
    clearInterval(intervalId);
    Hide();
    $("#Trivia-question").text("Incorrect!");
     timeoutId2 =  setTimeout(Start,3000);

}

function lastPage(){
   
    clearTimeout(timeoutId);
    clearTimeout(timeoutId2);
    $("#Trivia-question").hide();
    $("#Wins").show();
    $("#Losses").show();
    $("#Wins").text("Wins: " + wins );
    $("#Losses").text("Losses: " + losses);
    $("#Start-Over").show();
    $("#Start-Over").text("Start Over?");
    
}



function CheckAnswer(){
    switch (i) {
        case 0:
        console.log($(this).text());
            if ($(this).text() == "300,000 Km/s"){
                wins++;
                i++;
                Correct();
               
            }
            else {
                losses++;
                i++
                Lose();
            }
            break;
        case 1:
        console.log($(this).text());
        if ($(this).text() == "Jupiter"){
            wins++;
            i++;
            Correct();
           
        }
        else {
            losses++;
            i++
            Lose();
        }
            
            break;
        case 2:

        console.log($(this).text());
        if ($(this).text() == "1897"){
            wins++;
            i++;
            Correct();
           
        }
        else {
            losses++;
            i++
            Lose();
        }

            break; 
        case 3:

        console.log($(this).text());
        if ($(this).text() == "-273 ºC"){
            wins++;
            i++;
            Correct();
           
        }
        else {
            losses++;
            i++
            Lose();
        }
            
            break;

        case 4:
        console.log($(this).text());
        if ($(this).text() == "1901"){
            wins++;
            i++;
            Correct();
           
        }
        else {
            losses++;
            i++
            Lose();
        }
        lastPage();

            break;

    }
}

$(".Ans").on("click",CheckAnswer);
$("#Start-Over").on("click",initialize);



$("#Start").on("click",Start);

initialize();
