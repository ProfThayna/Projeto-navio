var matriz = [30, 35, 40, 45, 55];

function media(){
  var sum = matriz[0] +  matriz[1] + matriz[2] + matriz[3] + matriz[4];
  var avg = sum/matriz.length;
  console.log(avg);
}

function setup() {
  createCanvas(400, 400);
 media();
}

function draw() {
  background(220);
}