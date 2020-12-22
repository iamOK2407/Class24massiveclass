class Crird{
    constructor(x,y)
{
var crost={restitution:1.0}

this.body=Bodies.rectangle(x,y,50,50,crost);
this.width=50;
this.height=50;

World.add(myWorld,this.body);
}
displayer(){
    push();
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    angleMode(RADIANS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("red")
    stroke("black")
    strokeWeight(3);
    rect(0,0,this.width,this.height);
    pop();
}
}










