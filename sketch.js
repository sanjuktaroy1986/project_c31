const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var grnd;
var div=[];
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(480,700);

  myengine=Engine.create();
  myworld=myengine.world;

  Engine.run(myengine);

  grnd=new Ground(240,690,480,20);

  for(i=0;i<7;i++){
        div[i]=new Ground(i*80,530,10,300)
    }

   for(i=0;i<10;i++){
     // plinkos[i]=new Plinko(i*50+40,50)
      plinkos.push(new Plinko(i*50+40,50))
      
     }

  for(i=0;i<10;i++){
      //plinkos[10+i]=new Plinko(i*50+15,130)
      plinkos.push(new Plinko(i*50+15,130))
     }

  for(i=0;i<9;i++){
      //plinkos[20+i]=new Plinko(i*50+40,210)
      plinkos.push(new Plinko(i*50+40,210))     
    }  
     
  for(i=0;i<10;i++){
     // plinkos[29+i]=new Plinko(i*50+15,290)
     plinkos.push(new Plinko(i*50+15,290))
    }
    
  
  
}

function draw() {
  background(0);  
  grnd.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(220,260),0) )
    
  }

  for(i=0;i<div.length;i++){
    div[i].display();
}

for(i=0;i<plinkos.length;i++){
  plinkos[i].display()
 }
 
 for(i=0;i<particles.length;i++){
  particles[i].display()
 }

 
}