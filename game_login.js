score=0;
function updateScore()
{
    score=score+1;
    document.getElementById("score") .innerHTML="score:"+score;
}
function addUser(){
    x = document.getElementById("player1_name_input").value;
    x1 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player_1",x);
    localStorage.setItem("Player_2",x1);
    window.location="index1.html";
 }