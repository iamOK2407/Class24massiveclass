
class Ground{
    constructor(x,y,width,height)
{
var karan={isStatic:true}

this.body=Bodies.rectangle(x,y,width,height,karan);
this.width=width;
this.height=height;
World.add(myWorld,this.body);
}
displayer(){
    push();
    rectMode(CENTER)
    //angleMode(RADIANS)
    //translate(this.body.position.x,this.body.position.y)
    //rotate(this.body.angle)
    fill("brown")
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
}
}










