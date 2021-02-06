class ground{
    constructor(x,y,width){
    
    var options = {
    isStatic: true,
    
    }

    this.body = Bodies.rectangle(x,y,width,20,options);
    this.width = width;
    this.height = 20;

    World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("brown");
    strokeWeight(3);
    stroke(200,75,50);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }

};