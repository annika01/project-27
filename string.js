 class Rope {
        constructor(bodyA,bodyB, xOffset, yOffset){
            this.xOffset= xOffset
            this.yOffset= yOffset
            var options= {
                bodyA: bodyA, 
               bodyB: bodyB,
                pointB:{x:this.xOffset, y:this.yOffset} 
            }
            this.string= Constraint.create (options)
            World.add(world, this.string)
        }
         
            
        
        
        display(){
            
        
            
            var pointA= this.string.bodyA.position
            var pointB= this.string.bodyB.position
            
            strokeWeight(3)
            stroke("blue")
            var anchor1x= pointA.x
            var anchor1y= pointA.y 
            var anchor2x= pointB.x+this.xOffset
            var anchor2y= pointB.y+this.yOffset
            line (anchor1x, anchor1y, anchor2x,anchor2y )
            
            
        }
    }
        
