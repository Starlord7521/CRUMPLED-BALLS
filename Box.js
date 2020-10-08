class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("dustbin.png");
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
}