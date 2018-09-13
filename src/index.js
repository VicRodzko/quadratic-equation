module.exports = function solveEquation(equation) {
	var arr = equation.split(" ");
	var a = +arr[0];
	var b = +(arr[3] + arr[4]);
	var c = +(arr[7] + arr[8]);

	var D = b*b - 4*a*c;

	var x1 = Math.round((-b + Math.sqrt(D))/(2*a));
	var x2 = Math.round((-b - Math.sqrt(D))/(2*a));

	var result = ([x1, x2].sort((a,b)=>(a-b)));
  return result;
}
