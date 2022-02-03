class MathC{
    static calculateDistance(a, b){
        const xDif = b.x - a.x;
        const xDif2 = xDif * xDif;
        const yDif = b.y - a.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const res = Math.sqrt(sumDif2);
        return res;
    }

    static distanceFromOrigin(a){
        const b = {x: 0, y:0}; 
        const xDif = b.x - a.x;
        const xDif2 = xDif * xDif;
        const yDif = b.y - a.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const res = Math.sqrt(sumDif2);
        return res;
    }

    static medianPoint(a, b){
        const sumX = a.x + b.x;
        const cX = sumX / 2;
        const sumY = a.y + b.y;
        const cY = sumY / 2; 
        return "x=" + cX + " y=" + cY;
    }

    static nearestPoint(startingPoint, ...args){
        let nearest = args[0];
        for (let i = 0; i < args.length; i++) {
            const element = args[i];
            if (MathC.calculateDistance(startingPoint, nearest) > MathC.calculateDistance(startingPoint, element)) {
                nearest = element;
            }
        }
        return nearest;
    }
}