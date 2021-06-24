 window.onload = () => {
    document.addEventListener('keydown',e =>{
        let tecla = e.key
        switch(tecla){
            case 'd':
            case 'ArrowRight':
                person.rigth();
                break;
            case 'a' :
            case 'ArrowLeft' :
                person.left();
                break;
        }
    })
    const canvas = {
        element: document.getElementById('my-game'),
        width: 400,
        height: 800,
    } 
    const ctx = canvas.element.getContext('2d');

    let Start = setInterval(() => {
       updateCanvas(); 
    }, 10);
    updateCanvas= () => {
        clearCanvas();
        background();
        person.draw();
       // refreshPlataform();
    }
    clearCanvas = () => {
        ctx.clearRect(0 , 0 , canvas.width, canvas.height)
    }
    background = () => {
       ctx.fillStyle = 'blue';
       ctx.fillRect(0, 0 , canvas.width, canvas.height);
    }
    class Person  {
        constructor () {
            this.x = 198 ;
            this.y = 790 ;
            this.w = 8 ;
            this.h = 8 ;
            this.speed = 15 ;
        };
        draw = () => {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, this.w, this.h);       
        };
        jump = () => {
            setTimeout(() => {
               this.y -= this.speed;
               clearCanvas();
               background();
               this.draw(); 
            }, 60);
            setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
            }, 120);
            setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
            }, 180);
            setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
            }, 240);
            setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 300);
            setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 360);
            setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
            }, 420);
            setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
            }, 480);
            setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 540);
            setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 600);
            setTimeout(() => {
                this.y += this.speed;
                clearCanvas();
                background();
                this.draw(); 
            }, 660);
            setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 720);
            setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 780);
            setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 840);
            setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
            }, 900);
            setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
            }, 960);
            setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 1020);
            setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
            }, 1080);
            setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
            }, 1140);
            setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
            }, 1200);   
        }
        left = () => {
            this.x -= this.speed
        }
        rigth = () => {
            this.x += this.speed
        }
    };
    const person = new Person
    setInterval(() => {
        person.jump();
    }, 1250);  
    class Plataform {
        constructor(x){
            this.x = x;
            this.y = 720;
            this.width = 80;
            this.height = 20;
            this.speed = 15;
        };
        draw = () => {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        move = () => {
            if(person.y < 690){
                this.y -= 690 - person.y
            }
        }
    }
   // createPlataform = () => {
   //     let aleatoryX = Math.floor(Math.random() * 400) + 1;
   //     let distanceOfPlataforms = Math.floor(Math.random() * 400)+ 80 + 1
   //     const plataform = new Plataform(aleatoryX, this.y)
   //     plataforms.push(plataform)
   //     const plataformBrother = new Plataform(aleatoryX + distanceOfPlataforms, this.y);
   //     plataforms.push(plataformBrother);
   //     this.y -= 50;
   // }
   // let plataforms = [];
   // refreshPlataform = () => {
   //     if (plataforms.length === 0){
   //     createPlataform();
   //     }
   // }    
//
    updateCanvas();
 }