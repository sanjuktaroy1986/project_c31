class Plinko{

    constructor(x,y){
        var options={
            isStatic:true
        }
    
        this.body=Bodies.circle(x,y,10,options)
        World.add(myworld,this.body)
        this.r=10
        
    }
    
    display(){
    
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
    
    }