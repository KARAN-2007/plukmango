class mangoe{
    constructor(x,y,width,height){
        var options = {
            restitution:0,
            density:0.9,
            gravity:1,
            friction:0.6,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop()
    }
}