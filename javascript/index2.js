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
    jumps : {
        maxHeigth: 190,
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

let numberOfPlataforms = 15;
let plataforms = []

function refreshGame () {
    createPerson();
    createPlataform();
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
        if(person.atributes.personBottom > person.jumps.maxHeigth ){
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
        //
        if(person.atributes.personBottom <= person.jumps.minHeigth){
            jump()
        }
        plataforms.forEach((plt) =>{
            if(
                (person.atributes.personBottom >= plt.bottom) &&
                (person.atributes.personBottom <= plt.bottom + plt.heigth) &&
                (person.atributes.personLeft >= plt.left ) &&
                (person.atributes.personLeft <= plt.left + plt.width)
            ){
                if(person.atributes.personBottom < 400){
                person.jumps.minHeigth = plt.bottom + plt.heigth
                person.jumps.maxHeigth = person.jumps.minHeigth + 140 
            }else{
                movePlataforms()               
            }
        }
        })
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
        //
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
    if(person.atributes.personBottom > 300){
        plataforms.forEach (plt =>{
            plt.bottom -= 20;
            let estilo = plt.element;
            estilo.style.bottom = plt.bottom + 'px';
            
        });
    }
};
function checkContact (){
    plataforms.forEach(plt => {
        if (plt.bottom <= person.atributes.personBottom && person.atributes.left >= plt.left){
            console.log('bati')
        }
    })
}
setInterval(function(){
    checkContact();
},10)
refreshGame();
})