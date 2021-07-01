document.addEventListener('DOMContentLoaded', () => {
const gameArea = document.querySelector('.game');
const element = document.createElement('div');
let timer 
let downTimer
let game 
const person ={
    atributes : {
        speed: 10,
        personBottom : 50, 
        personLeft : 175,
        width: 50,
        heigth: 50,
    },
    jumps : {
        maxHeigth: 150,
        minHeigth: 50,
    },
    moveRigth () {
        person.atributes.personLeft += person.atributes.speed;
        element.style.left = person.atributes.personLeft + 'px'
    },
    moveLeft () {
        person.atributes.personLeft -= person.atributes.speed;
        element.style.left = person.atributes.personLeft + 'px'
    },
}
document.addEventListener('keydown',(e) => {
    let tecla = e.key
    switch(tecla){
        case 'd':
        case 'ArrowRight':
            person.moveRigth();
            break;
        case 'a' :
        case 'ArrowLeft' :
            person.moveLeft();
            break;
    }
})

let numberOfPlataforms = 14;
let plataforms = []

function refreshGame () {
    createPerson();
    createPlataform();
    jump();
};

function createPerson () {
    
    gameArea.appendChild(element);
    element.classList.add('person');
    element.style.left = person.atributes.personLeft + 'px';
    element.style.bottom = person.atributes.personBottom + 'px';
};
function jump () {
    clearInterval(downTimer)
    timer = setInterval(function (){
        person.atributes.personBottom += person.atributes.speed;
        element.style.bottom = person.atributes.personBottom + 'px';
        if(person.atributes.personBottom > person.jumps.maxHeigth ){
            down();
        };
        },30);
};
function down () {
    clearInterval(timer)
    downTimer = setInterval(function () {
        person.atributes.personBottom -= 5;
        element.style.bottom = person.atributes.personBottom + 'px'
        //
        if(person.atributes.personBottom <= person.jumps.minHeigth){
            jump()
        }
        plataforms.forEach((plt) =>{
            if(
                (person.atributes.personBottom >= plt.bottom) &&
                (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
                (person.atributes.personLeft >= plt.left - 30) &&
                (person.atributes.personLeft <= plt.left + plt.width)
            ){
                if(person.atributes.personBottom < 400){
                person.jumps.minHeigth = plt.bottom + plt.heigth 
                person.jumps.maxHeigth = person.jumps.minHeigth + 150 
            }
        }
        })
    },30)
}
class Plataform {
    constructor(b){
        this.bottom = b ;
        this.left = Math.floor(Math.random() * 400);
        this.heigth = 10;
        this.width = 100;
        this.element = document.createElement('div');
        this.speed = 15;
        //
        const plataform = this.element;
        plataform.classList.add('plataform');
        plataform.style.left = this.left + 'px';
        plataform.style.bottom = this.bottom + 'px';
        gameArea.appendChild(plataform)
    };
};
function createPlataform () {
    for ( let i = plataforms.length; i < numberOfPlataforms ; i +=1 ){
        let plataform = new Plataform( 100 + i * 50 );
        plataforms.push(plataform);
    }
};
function deletePlataforms(){
    plataforms.forEach(plt =>{
        if(plt.bottom < 50){
            plt.element.remove()
            plataforms.shift();
            createPlataform();
        }
    })
}
function movePlataforms () {
    if(person.atributes.personBottom > 200){
    plataforms.forEach (plt =>{
        if((person.atributes.personBottom >= plt.bottom) &&
        (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
        (person.atributes.personLeft >= plt.left - 30) &&
        (person.atributes.personLeft <= plt.left + plt.width)){
            for(let i = 0; i < plataforms.length; i += 1){
            plataforms[i].bottom -= 15;
            let estilo = plataforms[i].element;
            estilo.style.bottom = plataforms[i].bottom + 'px';
            }

        };
        if(
            !(person.atributes.personBottom >= plt.bottom) &&
            (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
            (person.atributes.personLeft >= plt.left - 20) &&
            (person.atributes.personLeft <= plt.left + plt.width)){
                person.jumps.minHeigth -= 5 ;
            }
    })
}
};
function youLose (){
    if(person.atributes.personBottom < 50 ){
        return true
    }
}
function deleteGame () {
    let plataforms = document.querySelectorAll('.plataform');
    let person = document.querySelector('.person')
    gameArea.remove(plataforms);
    gameArea.remove(person);
    clearInterval(game)
}

game = setInterval(() => {
    if(!youLose()){
    }else{
        deleteGame();
    }
    
    movePlataforms()
    deletePlataforms()
}, 50);
refreshGame();
})