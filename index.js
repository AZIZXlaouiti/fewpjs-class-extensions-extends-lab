class Polygon{
    constructor(array){
        this.sides = array
    }
    get countSides(){
        return this.sides.length
    }
   get perimeter(){ return this.sides.reduce((ac,cv)=>ac+cv)}
}
class Triangle extends Polygon{
    get isValid(){
        if (this.countSides===3){
            return this.sides[0]+this.sides[1] <= this.sides[2]||this.sides[1]+this.sides[2] <= this.sides[0] ||this.sides[0]+this.sides[2] <= this.sides[1]?false:true
        }
        else{
            return false
        }
        
    }
}
class Square extends Polygon{
    get isValid(){
        if (this.countSides===4){
            return this.sides.filter((side)=>side=== this.sides[0]).length!==this.countSides?false:true
        }
        else{
            return false
        }    
    }
    get area(){
        return this.sides[0]**2
    }
}