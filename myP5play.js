function detectCollision(object1,object2){
	
	object1BodyPosition=object1.body.position;
	object2BodyPosition=object2.body.position;
    var distance=dist(object1BodyPosition.x,object1BodyPosition.y,object2BodyPosition.x,object1BodyPosition.y)
    if(distance<=object1.r+object2.r){
		Matter.Body.setStatic(object2.body,false)
	}
	

}