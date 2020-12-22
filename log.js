
class Log{
    constructor(x,y,height,angle)
{
var RG={restitution:1.0,friction:0.8}

this.body=Bodies.rectangle(x,y,20,height,RG);
this.width=20;
this.height=height;
Matter.Body.setAngle(this.body,angle);
World.add(myWorld,this.body);
}
displayer(){
    push();
    angleMode(RADIANS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("yellow")
    stroke("purple")
    strokeWeight(3);
    rect(0,0,this.width,this.height);
    pop();
}
}










