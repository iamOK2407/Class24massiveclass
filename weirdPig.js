class Pig{
    constructor(x,y)
{
var prost={restitution:1.0}

this.body=Bodies.rectangle(x,y,50,50,prost);
this.width=50;
this.height=50;

World.add(myWorld,this.body);
}
displayer(){
    push();
    angleMode(RADIANS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("lightgreen")
    stroke("green")
    strokeWeight(3);
    rect(0,0,this.width,this.height);
    pop();
}
}










