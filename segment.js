class Segment{
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }

    length(){
        let length;
        length = MathC.calculateDistance(this.pointA, this.pointB);
        return length;
    }

    median(){
        let median;
        median = MathC.medianPoint(this.pointA, this.pointB);
        return median;
    }
}
