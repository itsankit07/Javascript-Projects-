let timer = 60;
let scores = 0;
let randomhit;

function makebubble(){
    let bubbles = "";

    for(let i=1;i<=150;i++)
    {
        let random = Math.ceil(Math.random()*10);
        bubbles += `<div class="bubble">${random}</div>`
    }
    
    document.querySelector("#bottom").innerHTML = bubbles;
}


function setTimer() {
    var time_st = setInterval(function(){
        if(timer>0){
      timer--;
      document.querySelector("#timer").textContent = timer;
        }
        else
        {
            clearInterval(time_st);
            document.querySelector("#bottom").innerHTML= 
            `<div id = "game_end">
            <h2>GAME OVER !!</h2><h3> Your Total score is ${scores} </h3> 
            <button id = "play_again" type="button" onClick="window.location.reload();">Play Again</button>
            </div>
            `
        }
    },1000)
}

function gethit()
{
    randomhit = Math.ceil(Math.random()*10);
    document.getElementById("get_hit").textContent = randomhit;

}

function score(){
    scores+=10;
    document.getElementById("get_score").textContent = scores;
}

document.querySelector("#bottom").addEventListener("click",function(details){
    let selected = parseInt(details.target.textContent);

    if(selected == randomhit){
    score();
    gethit();
    makebubble();
    }
})



makebubble();
setTimer();
gethit();
