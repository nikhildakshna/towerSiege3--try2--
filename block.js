class block{
    constructor(x,y){
    
    var options = {
    'restitution': 0.1,
    'friction': 0.01,
    'density': 0.01
    }

    this.body = Bodies.rectangle(x,y,30,50,options);
    this.width = 30;
    this.height = 50;
    this.Visibility = 255;

    World.add(world, this.body);
    
    }

    display(r,g,b){
    if(this.body.speed < 2){
    var pos = this.body.position;
    push();
    //console.log(this.body.speed);
    translate(pos.x, pos.y);
    fill(rgb(r,g,b));
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    else{
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255, this.Visibility);
    //rect(this.body.position.x,this.body.position.y,30,50);
    pop();
    
    }

    }

    score(){
    if(this.Visibility < 0 && this.Visibility > -150){
    score++;
    }
    }
}