document.addEventListener('DOMContentLoaded', () => {
const gameArea = document.querySelector('.game');
const element = document.createElement('div');
let timer 
let downTimer
const person ={
    atributes : {
        speed: 10,
        personBottom : 50, 
        personLeft : 195,
        width: 10,
        heigth: 10,
    },
    moveRigth () {
        person.atributes.personLeft += person.atributes.speed;
    },
    moveLeft () {
        person.atributes.personLeft -= person.atributes.speed;
    },
    left(){
        return person.atributes.personLeft
    },
    rigth (){
        return this.left + person.atributes.width
    },
    bottom(){
        return person.atributes.personBottom
    },

}
function control (e) {
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
}


let numberOfPlataforms = 15;
let plataforms = []

function refreshGame () {
    createPerson();
    createPlataform();
    setInterval(movePlataforms,30);
    jump();
    checkContact()
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
        if(person.atributes.personBottom > 190 ){
            down();
            console.log(plataforms)
        };
        },30);
};
function down () {
    clearInterval(timer)
    downTimer = setInterval(function () {
        person.atributes.personBottom -= 5;
        element.style.bottom = person.atributes.personBottom + 'px'
        if(person.atributes.personBottom <= 50){
            jump()

        }
    },30)
}
class Plataform {
    constructor(b){
        this.bottom = b ;
        this.left = Math.floor(Math.random() * 330);
        this.heigth = 15;
        this.width = 70;
        this.element = document.createElement('div');
        this.speed = 15;
        const plataform = this.element;
        plataform.classList.add('plataform');
        plataform.style.left = this.left + 'px';
        plataform.style.bottom = this.bottom + 'px';
        gameArea.appendChild(plataform)
    };
};
function createPlataform () {
    for ( let i = 0; i < numberOfPlataforms ; i +=1 ){
        let plataform = new Plataform( 100 + i * 50 );
        plataforms.push(plataform);
    }
};
function movePlataforms () {
    if(person.atributes.personBottom > 200){
        plataforms.forEach (plt =>{
            plt.bottom -= plt.speed;
            let estilo = plt.element;
            estilo.style.bottom = plt.bottom + 'px'
            
        })
    }
};
function checkContact (){
    plataforms.forEach(plt => {
        if (plt.bottom === person.atributes.personBottom){
            
        }
    })
}
setInterval(function(){
    checkContact();
},10)
refreshGame();
console.log(plataforms)
})