document.addEventListener('DOMContentLoaded', () => {
const gameBackground = document.querySelector('.game-area');
const gameArea = document.querySelector('#my-game');
const myStartGame = document.querySelector('.start-game');
const element = document.createElement('div');
const scoreDiv = document.createElement ('div');
const background = document.createElement('div');
const thisFloor = document.createElement('div');
let timer ;
let downTimer;
let game; 
myStartGame.addEventListener('click', () => {
    refreshGame();
});
function refreshGame () {
    createScore();
    createBackground();
    createFloor();
    createPerson();
    createPlataform();
    jump();
};
function createScore () {
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    gameArea.appendChild(scoreDiv);
    scoreDiv.setAttribute('id','score');
    scoreDiv.appendChild(span1);
    span1.setAttribute('class', 'scores');
    span1.innerHTML = 'Score';
    scoreDiv.appendChild(span2);
    span2.setAttribute('id', 'value');
    span2.innerHTML = 0;
    let scoreValue = document.getElementById('value');
    setInterval(function(){
        scoreValue.innerHTML = totalScore;
    },10);
};

let totalScore = 0
function createBackground (){
    gameArea.appendChild(background);
    background.classList.add('gaming');
    background.style.bottom = 0  + 'px';  
};
const person ={
    atributes : {
        speed: 10,
        personBottom : 15, 
        personLeft : 175,
        width: 50,
        heigth: 50,
    },
    jumps : {
        maxHeigth: 150,
        minHeigth: 15,
    },
    moveRigth () {
        if(person.atributes.personLeft <= 540 - person.atributes.width){
        person.atributes.personLeft += person.atributes.speed;
        element.style.left = person.atributes.personLeft + 'px'
    }},
    moveLeft () {
        
        if(person.atributes.personLeft > 0){
        person.atributes.personLeft -= person.atributes.speed;
        element.style.left = person.atributes.personLeft + 'px'
    }
},
};
const floor = {
    width: 540,
    height: 15,
    bottom:0,
};
document.addEventListener('keydown',(e) => {
    let tecla = e.key;
    switch(tecla){
        case 'd':
        case 'ArrowRight':
            person.moveRigth();
            break;
        case 'a' :
        case 'ArrowLeft' :
            person.moveLeft();
            break;
    };
});
let numberOfPlataforms = 14;
let plataforms = [];
function createPerson () {
    background.appendChild(element);
    element.classList.add('person');
    element.style.left = person.atributes.personLeft + 'px';
    element.style.bottom = person.atributes.personBottom + 'px';
};
function jump () {
    clearInterval(downTimer);
    timer = setInterval(function (){
        person.atributes.personBottom += person.atributes.speed;
        element.style.bottom = person.atributes.personBottom + 'px';
        if(person.atributes.personBottom > person.jumps.maxHeigth ){
            down();
        };
        },30);
};
function down () {
    clearInterval(timer);
    downTimer = setInterval(function () {
        person.atributes.personBottom -= 4;
        element.style.bottom = person.atributes.personBottom + 'px';
        if(person.atributes.personBottom <= person.jumps.minHeigth){
            jump();
        };
        plataforms.forEach((plt) =>{
            if(
                (person.atributes.personBottom >= plt.bottom) &&
                (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
                (person.atributes.personLeft >= plt.left - 45) &&
                (person.atributes.personLeft <= plt.left + plt.width)
            ){
                if(person.atributes.personBottom < 400){
                person.jumps.minHeigth = plt.bottom + plt.heigth ;
                person.jumps.maxHeigth = person.jumps.minHeigth + 150; 
            };
        };
        });
    },30);
};
class Plataform {
    constructor(b){
        this.bottom = b ;
        this.left = Math.floor(Math.random() * 400);
        this.heigth = 10;
        this.width = 100;
        this.element = document.createElement('div');
        this.speed = 15;
        const plataform = this.element;
        plataform.classList.add('plataform');
        plataform.style.left = this.left + 'px';
        plataform.style.bottom = this.bottom + 'px';
        background.appendChild(plataform);
    };
};
function createFloor (){    
    thisFloor.classList.add('floor');
    thisFloor.style.bottom = floor.bottom + 'px';
    background.appendChild(thisFloor);
};
function createPlataform () {
    for ( let i = plataforms.length; i < numberOfPlataforms ; i +=1 ){
        let plataform = new Plataform( 100 + i * 50 );
        plataforms.push(plataform);
    };
};
function deletePlataforms(){
    plataforms.forEach(plt =>{
        if(plt.bottom < 15){
            plt.element.remove();
            plataforms.shift();
            totalScore += 5;
            createPlataform();
        };
    });
    if(floor.bottom < 0){
        thisFloor.remove();
    };
};
function movePlataforms () {
    if(person.atributes.personBottom > 200){
    plataforms.forEach (plt =>{
        if((person.atributes.personBottom >= plt.bottom) &&
        (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
        (person.atributes.personLeft >= plt.left - person.atributes.width) &&
        (person.atributes.personLeft <= plt.left + plt.width)){
            floor.bottom -= 15;
            thisFloor.style.bottom = floor.bottom + 'px';
            for(let i = 0; i < plataforms.length; i += 1){
            plataforms[i].bottom -= 15;
            let estilo = plataforms[i].element;
            estilo.style.bottom = plataforms[i].bottom + 'px';
            };
        };
        if(
            !(person.atributes.personBottom >= plt.bottom) &&
            (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
            (person.atributes.personLeft >= plt.left - 20) &&
            (person.atributes.personLeft <= plt.left + plt.width)){
                person.jumps.minHeigth -= 5 ;
            };
    });
};
};
function youLose (){
    if(person.atributes.personBottom < 15 ){
        return true;
    };
};
function deleteGame () {
    let plataforms = document.querySelectorAll('.plataform');
    let person = document.querySelector('.person');
    gameArea.remove(plataforms);
    gameArea.remove(person);
    clearInterval(game);
};
function loseBackground (){
    console.log('wiii')
    let newGameArea = document.createElement('div');
    let backgroundLose = document.createElement('div');
    let scoreLose = document.createElement('div');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    newGameArea.setAttribute('id', 'my-game');
    gameBackground.appendChild(newGameArea);
    backgroundLose.classList.add('lose-background');
    newGameArea.appendChild(backgroundLose);
    scoreLose . classList . add('game-over-score');
    backgroundLose.appendChild(scoreLose);
    scoreLose.appendChild(span1);
    scoreLose.appendChild(span2);
    span1.classList.add('score-lose');
    span1.innerText = 'Score';
    span2.classList.add('score-lose-value');
    span2.innerHTML = totalScore;
}
game = setInterval(() => {
    if(!youLose()){
    }else{
        deleteGame();
        loseBackground();
    };
    movePlataforms();
    deletePlataforms();
}, 30);
});