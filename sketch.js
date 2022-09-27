function preload() {
  // put preload code here
}

// define the variables for the scale
let a = 0.0;
let s = 0.0;
// define the list colors
const colorList = ['#b9a5c4',
             	'#d3c745',
              '#a21d29',
              '#c5b1d2',
              '#8e3352',
              ];
function setup() {
  createCanvas(1920, 1080);
  angleMode(DEGREES); // Change the mode to DEGREES
  frameRate(10);
}

function draw() {
  background(23, 10, 16);
// draw Wassily Kandinsky's painting, Three Triangles

// draw a red rectangle
  push();
  fill(193, 54, 79);
  noStroke();
  rect (1120, 120, 150, 10);
  pop();

// draw a green rectangle rotating on itself
  push();
  translate (667, 85);
  rotate(frameCount * 10)
  fill (113, 142, 95);
  noStroke();
  rect (-4.5, -75, 10, 150);
  pop();

// draw an orange rectangle that rotates on itself
  push();
  translate (739, 837);
  rotate(frameCount * 10)
  fill (187, 123, 107);
  noStroke();
  rect (-63, -5, 120, 13);
  pop();

// draw a blue rectangle
  push();
  fill (72, 77, 161);
  noStroke();
  rect (1120, 80, 150, 15);
  pop();

// draw a triangle with random colors
  push();
  let colorHex = random(colorList);
  stroke(color(colorHex));
  strokeWeight(3);
  noFill();
  triangle(960, 220, 720, 410, 1010, 542);
  describe('triangle with random color outline in the center of canvas');
  pop();

// draw a triangle with random colors
  push();
  let colorHex1 = random(colorList);
  stroke(color(colorHex1)); 
  strokeWeight(1);
  noFill();
  triangle(950, 440, 1120, 420, 1016, 614);
  describe('triangle with random color outline in the center of canvas');
  pop();

// draw a triangle with random colors
  push();
  let colorHex2 = random(colorList);
  stroke(color(colorHex2)); 
  strokeWeight(3);
  noFill();
  triangle(1028, 476, 835, 685, 1085, 745);
  describe('triangle with random color outline in the center of canvas');
  pop();

// draw a small triangle with orange stroke
  push();
  stroke(168, 123, 111);
  strokeWeight(1);
  noFill();
  triangle(1350, 540, 1385, 549, 1360, 685);
  describe('white triangle with black outline in mid-right of canvas');
  pop();

// draw a small red triangle
  push();
  fill(143, 61, 84);
  noStroke();
  triangle(1334, 569, 1354, 567, 1363, 725);
  describe('white triangle with black outline in mid-right of canvas');
  pop();

// draw an amorphous shape with red stroke in the upper right corner of the canva
  push();
  beginShape();
  stroke(136, 41, 38);
  strokeWeight(4);
  noFill();
  curveVertex(1270,360);
  curveVertex(1320,254);
  curveVertex(1370,175);
  curveVertex(1398,145);
  curveVertex(1435,105);
  curveVertex(1472,81);
  curveVertex(1502,78);
  curveVertex(1529,104);
  curveVertex(1525,118);
  curveVertex(1512,140);
  curveVertex(1520,145);
  curveVertex(1528,142);
  curveVertex(1541,117);
  curveVertex(1552,114);
  curveVertex(1559,120);
  curveVertex(1565,131);
  curveVertex(1553,165);
  curveVertex(1563,170);
  curveVertex(1581,150);
  curveVertex(1590,147);
  curveVertex(1595,153);
  curveVertex(1581,173);
  curveVertex(1588,183);
  curveVertex(1616,173);
  curveVertex(1624,184);
  curveVertex(1605,218);
  curveVertex(1633,229);
  curveVertex(1635,262);
  curveVertex(1590,375);
  curveVertex(1482,428);
  curveVertex(1395,410);
  curveVertex(1352,420);
  curveVertex(1322,432);
  curveVertex(1285,405);
  curveVertex(1270,360);
  endShape(CLOSE);
  pop();
  
// Draw circles of different sizes within the amorphous figure that scale up 
  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  a = a + 7;
  s = cos(a);
  translate(1379, 223);
  scale(s);
  ellipse(-1, -1, 26, 26);
  pop();

  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  translate(1442, 192);
  scale(s);
  ellipse(-1, -2, 65, 65);
  pop();

  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  translate(1540, 217);
  scale(s);
  ellipse(0, 0, 38, 38);
  pop();

  push();
  stroke(170, 155, 180);
  strokeWeight(3);
  noFill();
  translate(1533, 312);
  scale(s);
  ellipse(0, 0, 89, 89);
  pop();

  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  translate(1418, 301);
  scale(s);
  ellipse(0, 0, 54, 54);
  pop();

  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  translate(1461, 371);
  scale(s);
  ellipse(0, 0, 29, 29);
  pop();
  
  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  translate(1340, 370);
  scale(s);
  ellipse(0, 0, 51, 51);
  pop();

  push();
  stroke(170, 155, 180);
  strokeWeight(2);
  noFill();
  translate(1342, 293);
  scale(s);
  ellipse(0, 0, 26, 26);
  pop();

// draw an amorphous lilac line in the lower right corner of the canvas
  push();
  beginShape();
  fill(222, 203, 226);
  noStroke();
  curveVertex(1077,1010);
  curveVertex(1089,993);
  curveVertex(1093,965);
  curveVertex(1102,924);
  curveVertex(1110,906);
  curveVertex(1128,890);
  curveVertex(1190,870);
  curveVertex(1219,859);
  curveVertex(1244,846);
  curveVertex(1293,787);
  curveVertex(1310,765);
  curveVertex(1317,756);
  curveVertex(1330,746);
  curveVertex(1366,734);
  curveVertex(1460,756);
  curveVertex(1510,740);
  curveVertex(1569,672);
  curveVertex(1594,617);
  curveVertex(1603,577);
  curveVertex(1607,566);
  curveVertex(1601,610);
  curveVertex(1576,670);
  curveVertex(1551,704);
  curveVertex(1506,754);
  curveVertex(1462,767);
  curveVertex(1450,766);
  curveVertex(1408,762);
  curveVertex(1375,758);
  curveVertex(1336,770);
  curveVertex(1315,783);
  curveVertex(1286,830);
  curveVertex(1256,858);
  curveVertex(1222,874);
  curveVertex(1165,890);
  curveVertex(1130,900);
  curveVertex(1114,921);
  curveVertex(1101,952);
  curveVertex(1098,977);
  curveVertex(1087,999);
  curveVertex(1081,1006);
  curveVertex(1079,1006);
  curveVertex(1077,1010);
  endShape(CLOSE);
  pop();

  // draw a white organic shape to the left of the canvas
  push();
  beginShape();
  fill(233, 225, 233);
  noStroke();
  curveVertex(430,100);
  curveVertex(480,160);
  curveVertex(470,196);
  curveVertex(466,222);
  curveVertex(467,271);
  curveVertex(467,281);
  curveVertex(467,286);
  curveVertex(479,328);
  curveVertex(480,340);
  curveVertex(489,353);
  curveVertex(511,409);
  curveVertex(514,415);
  curveVertex(516,420);
  curveVertex(521,462);
  curveVertex(518,469);
  curveVertex(519,476);
  curveVertex(514,494);
  curveVertex(513,518);
  curveVertex(512,531);
  curveVertex(514,550);
  curveVertex(518,578);
  curveVertex(522,595);
  curveVertex(523,615);
  curveVertex(525,635);
  curveVertex(519,675);
  curveVertex(515,711);
  curveVertex(512,850);
  curveVertex(506,908);
  curveVertex(511,936);
  curveVertex(515,947);
  curveVertex(520,950);
  curveVertex(522,952);
  curveVertex(521,956);
  curveVertex(517,958);
  curveVertex(506,950);
  curveVertex(503,939);
  curveVertex(500,932);
  curveVertex(499,919);
  curveVertex(503,884);
  curveVertex(507,850);
  curveVertex(507,838);
  curveVertex(505,829);
  curveVertex(510,805);
  curveVertex(507,850);
  curveVertex(510,806);
  curveVertex(510,802);
  curveVertex(510,806);
  curveVertex(507,768);
  curveVertex(510,806);
  curveVertex(510,806);
  curveVertex(507,754);
  curveVertex(503,739);
  curveVertex(499,721);
  curveVertex(507,675);
  curveVertex(508,662);
  curveVertex(511,646);
  curveVertex(512,632);
  curveVertex(509,619);
  curveVertex(509,602);
  curveVertex(508,586);
  curveVertex(505,578);
  curveVertex(506,559);
  curveVertex(504,552);
  curveVertex(496,542);
  curveVertex(470,468);  
  curveVertex(386,396);
  curveVertex(367,340);
  curveVertex(362,271);
  curveVertex(371,178);
  curveVertex(394,137);
  curveVertex(403,122);
  curveVertex(422,102);
  curveVertex(428,100);
  curveVertex(446,112);
  endShape();
  pop();

  // draw an organic orange shape to the left of the canvas
  push();
  beginShape();
  fill(136, 68, 40);
  noStroke();
  curveVertex(467,284);
  curveVertex(472,272);
  curveVertex(513,257);
  curveVertex(551,279);
  curveVertex(555,292);
  curveVertex(558,295);
  curveVertex(559,299);
  curveVertex(560,304);
  curveVertex(562,308);
  curveVertex(564,312);
  curveVertex(565,315);
  curveVertex(574,366);
  curveVertex(565,455);
  curveVertex(562,473);
  curveVertex(555,517);
  curveVertex(553,525);
  curveVertex(549,540);
  curveVertex(544,583);
  curveVertex(547,621);
  curveVertex(534,692);
  curveVertex(531,717);
  curveVertex(529,721);
  curveVertex(520,776);
  curveVertex(524,794);
  curveVertex(518,838);
  curveVertex(520,868);
  curveVertex(513,930);
  curveVertex(510,937);
  curveVertex(505,903);
  curveVertex(512,838);
  curveVertex(511,830);
  curveVertex(514,794);
  curveVertex(512,748);
  curveVertex(525,637);
  curveVertex(514,566);
  curveVertex(513,493);
  curveVertex(521,462);
  curveVertex(511,404);
  curveVertex(508,404);
  curveVertex(493,368);
  curveVertex(486,346);
  curveVertex(480,337);
  curveVertex(466,295);
  endShape(CLOSE);
  pop();

  // draw a red organic shape to the left of the canvas
  push();
  beginShape();
  fill(97, 38, 33);
  noStroke();
  curveVertex(399,131);
  curveVertex(375,163);
  curveVertex(361,317);
  curveVertex(380,390);
  curveVertex(464,462);
  curveVertex(475,473);
  curveVertex(489,524);
  curveVertex(506,554);
  curveVertex(504,578);
  curveVertex(508,594);
  curveVertex(509,602);
  curveVertex(508,619);
  curveVertex(512,636);
  curveVertex(511,646);
  curveVertex(507,675);
  curveVertex(503,697);
  curveVertex(499,726);
  curveVertex(506,757);
  curveVertex(510,806);
  curveVertex(507,835);
  curveVertex(507,859);
  curveVertex(499,922);
  curveVertex(500,933);
  curveVertex(498,930);
  curveVertex(498,914);
  curveVertex(498,897);
  curveVertex(500,858);
  curveVertex(503,806);
  curveVertex(501,782);
  curveVertex(493,728);
  curveVertex(490,697);
  curveVertex(493,646);
  curveVertex(490,599);
  curveVertex(465,546);
  curveVertex(457,524);
  curveVertex(418,481);
  curveVertex(395,456);
  curveVertex(370,438);
  curveVertex(350,408);
  curveVertex(340,392);
  curveVertex(330,359);
  curveVertex(320,284);
  curveVertex(328,248);
  curveVertex(337,178);
  curveVertex(364,148);
  curveVertex(383,131);
  endShape();
  pop();
  
//  Stops the draw function if a certain condition is true
  if (frameCount == 153) {
    noLoop();
  }
}


