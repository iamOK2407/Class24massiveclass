
class Box{
    constructor(x,y,width,height)
{
var kirti={restitution:1.0}

this.body=Bodies.rectangle(x,y,width,height,kirti);
this.width=width;
this.height=height;
World.add(myWorld,this.body);
}
displayer(){
    push();
    angleMode(RADIANS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("lightblue")
    rect(0,0,this.width,this.height);
    pop();
}
}










