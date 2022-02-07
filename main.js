//distanza da A a B: rad di (xb - xa)^2 + (yb -ya)^2 
//punto medio fra due punti: xc = (xa+xb)/2,  yc = (ya+yb)/2

const point1 = new Point(3, 5);
const point2 = new Point(6, 1);
const point3 = new Point(14, 7);
const point4 = new Point(-2, 9);
const point5 = new Point(8, 1);

const point6 = new Point(1, 6);
const point7 = new Point(8, 6);
const point8 = new Point(8, 1);
const point9 = new Point(1, 1);

const point10 = new Point(1, 1);
const point11 = new Point(1, 5);
const point12 = new Point(4, 1);

const distance = MathC.calculateDistance(point1, point2);
const median = MathC.medianPoint(point1, point2);

console.log(distance);

console.log(median);

console.log(MathC.distanceFromOrigin(point1));

console.log(MathC.nearestPoint(point3, point1, point2, point4, point5));

console.log(point1.distanceFrom(point2));
console.log(point1.distanceFromOrigin());
console.log(point1.medianPointFromPoint(point2));
console.log(point1.nearestPoint(point3, point2, point4, point5));

const segment1 = new Segment(point1, point2);
console.log(segment1.length());

const tri1 = new Triangle(point10, point11, point12);
console.log(tri1.perimeter());
console.log(tri1.area());

const rec1 = new Rectangle(point6, point7, point8, point9);
console.log(rec1.perimeter());
console.log(rec1.area());

const rec2 = new RectangleV2(point6, 7, 5);
console.log(rec2.perimeter());
console.log(rec2.area());

const rec3 = new RectangleV3(point6, point8);
console.log(rec3.perimeter());
console.log(rec3.area());

//////////////////////////////////////////////////

const mappa = new Map();                //Come gli oggetti, ma le key hanno un ordine

mappa.set(1, "Pippo");
mappa.set(2, "Paperino");
mappa.set(1, "Topolino");               //Sovrascrive la 1 precedente
console.log(mappa);