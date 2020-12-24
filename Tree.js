class Tree{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,1,1,options);
        
        this.image = loadImage("tree.png");
        World.add(myWorld,this.body);
        }
        display(){
            var pos = this.body.position
            push()
            translate(pos.x,pos.y);
            rectMode(CENTER)
            rect(0,0,1,1);
            imageMode(CENTER);
            image(this.image,0,0,200,400);
            pop()
        }
}