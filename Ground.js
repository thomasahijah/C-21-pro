class Ground{

constructor(x,y,w,h){
    var ground1 = {
        isStatic:true

    }
    this.body=Bodies.rectangle(x,y,w,h,ground1)
    World.add (world,this.body)
    this.w=w
    this.h=h


}

show(){
fill("blue")
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}

}