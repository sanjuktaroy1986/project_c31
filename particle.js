class Particle{

    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3
        }
    
        this.body=Bodies.circle(x,y,8,options)
        World.add(myworld,this.body)
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.r=8
        
    }
    
    display(){
        push()
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop()
    }
    
    }