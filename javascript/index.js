 window.onload = () => { 
    const canvas = {
        element: document.getElementById('my-game'),
        width: 400,
        height: 800,
    } 
    const ctx = canvas.element.getContext('2d');

    let Start = setInterval(() => {
       updateCanvas(); 
    }, 200);
    updateCanvas= () => {
        clearCanvas();
        background();
        person.draw();
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
            this.speed = 10 ;
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
            }, 100);
            setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
             }, 200);
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
             }, 400);
             setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 500);
              setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 600);
              setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
             }, 700);
             setTimeout(() => {
                this.y -= this.speed;
                clearCanvas();
                background();
                this.draw(); 
             }, 800);
             setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 900);
              setTimeout(() => {
                 this.y -= this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 1000);
              setTimeout(() => {
                this.y += this.speed;
                clearCanvas();
                background();
                this.draw(); 
             }, 1100);
             setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 1200);
              setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 1300);
              setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 1400);
              setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
               }, 1500);
               setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
               }, 1600);
               setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 1700);
              setTimeout(() => {
                 this.y += this.speed;
                 clearCanvas();
                 background();
                 this.draw(); 
              }, 1800);
              setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
               }, 1900);
               setTimeout(() => {
                  this.y += this.speed;
                  clearCanvas();
                  background();
                  this.draw(); 
               }, 2000);
              
        }
    };
    const person = new Person
    setInterval(() => {
        person.jump();
    }, 2100);  
    updateCanvas();
 }