
function RandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}
var matrix = [];
var Mheight = 30;
var Mlenght = 30;

for (var i = 0; i <= Mheight; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= Mheight; y++) {
    for (var x = 0; x <= Mlenght; x++) {
        matrix[y][x] = 0;
    }
}
var tokos1 = 50;
var tokos2 = 1;
var tokos3 = 1;
var tokos4 = 0.1;
var tokos5 = 1 ;


var qanak1 = Mheight * Mlenght * tokos1 / 100;
var qanak2 = Mheight * Mlenght * tokos2 / 100;
var qanak3 = Mheight * Mlenght * tokos3 / 100;
var qanak4 = Mheight * Mlenght * tokos4 / 100;
var qanak5 = Mheight * Mlenght * tokos5 / 100;

for (var z = 0; z < qanak1; ++z) {
    var rx = RandInt(0, Mlenght);
    var ry = RandInt(0, Mheight);
    matrix[ry][rx] = 1;
}
for (var z = 0; z < qanak2; ++z) {
    var rx = RandInt(0, Mlenght);
    var ry = RandInt(0, Mheight);
    matrix[ry][rx] = 2;
}
for (var z = 0; z < qanak3; ++z) {
    var rx = RandInt(0, Mlenght);
    var ry = RandInt(0, Mheight);
    matrix[ry][rx] = 3;
}
for (var z = 0; z < qanak4; ++z) {
    var rx = RandInt(0, Mlenght);
    var ry = RandInt(0, Mheight);
    matrix[ry][rx] = 4;
}
for (var z = 0; z < qanak5; ++z) {
    var rx = RandInt(0, Mlenght);
    var ry = RandInt(0, Mheight);
    matrix[ry][rx] = 5;
}


var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var emojiArr = [];
var vorsordArr = [];
var bombArr = [];
function setup() {

    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    noStroke();

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                emojiArr.push(new Emoji(x, y));
            }
            else if (matrix[y][x] == 5) {
                vorsordArr.push(new Vorsord(x, y));
            }
            else if (matrix[y][x] == 6) {
                bombArr.push(new Bomb(x, y));
            }            
        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }            

        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }
    for (var i in emojiArr) {
        emojiArr[i].sharjvel();
    }
    for (var i in vorsordArr) {
        vorsordArr[i].sharjvel();
    }
    for (var i in bombArr) {
        bombArr[i].mnal();
    }
    if(xotakerArr.lenght == 0){
        var x = RandInt(0,m);
        var y = RandInt(0,n);
        if(matrix[y][x]<2){
            matrix[y][x]=2;
            xotakerArr.push(new xotaker(x,y));
            if(matrix[y][x]==1){
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1);
                    }
                }               
            }
        }
    }
}
