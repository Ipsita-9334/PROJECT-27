class Bob{
    constructor(x, y){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 2.5,
            density: 1.2
            
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;  
        
        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.radius, this.radius);
        
    }

    
}