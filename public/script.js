
function RandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}
var matrix = [];
var Mheight = 20;
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
var tokos5 = 1;
var tokos7 = 0;


var qanak1 = Mheight * Mlenght * tokos1 / 100;
var qanak2 = Mheight * Mlenght * tokos2 / 100;
var qanak3 = Mheight * Mlenght * tokos3 / 100;
var qanak4 = Mheight * Mlenght * tokos4 / 100;
var qanak5 = Mheight * Mlenght * tokos5 / 100;
var qanak7 = Mheight * Mlenght * tokos7 / 100;

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
for (var z = 0; z < qanak7; ++z) {
    var rx = RandInt(0, Mlenght);
    var ry = RandInt(0, Mheight);
    matrix[ry][rx] = 7;
}
var time = 0;
var exanak = 0;
var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var emojiArr = [];
var vorsordArr = [];
var bombArr = [];
var cleanerArr = [];
var bdcolor = '#E6DDBD';
var grasscolor

function setup() {

    if (exanak == 1) {
        frameRate(10);
    }
    else if (exanak == 3) {
        frameRate(2);
    }
    else {
        frameRate(4);
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


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
            else if (matrix[y][x] == 7) {
                cleanerArr.push(new Cleaner(x, y));
            }
        }
    }
}
function draw() {
    //----FPS---
    if (exanak == 1) {
        frameRate(10);
    }
    else if (exanak == 3) {
        frameRate(2);
    }
    else {
        frameRate(4);
    }
    //--------COLORS----
    if (exanak == 0) {
        grasscolor = '#28B463';
    }
    else if (exanak == 1) {
        grasscolor = '#2ECC71';

    }
    else if (exanak == 2) {
        grasscolor = '#3A9102';

    }
    else if (exanak == 3) {
        grasscolor = '#7DCEA0';
        bgcolor = '#F2F3F4'; //background


    }
    //----CANVAS----
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#E6DDBD");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill(grasscolor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#C0392B");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#3498DB");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#5D6D7E");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("#17202A");
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
    for (var i in cleanerArr) {
        cleanerArr[i].sharjvel();
    }
    if (xotakerArr.lenght == 0) {
        var x = RandInt(0, m);
        var y = RandInt(0, n);
        if (matrix[y][x] < 2) {
            matrix[y][x] = 2;
            xotakerArr.push(new xotaker(x, y));
            if (matrix[y][x] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
    //exanak
    ++time;
    if (time > 40) {
        ++exanak;
        time = 0;
        if (exanak > 4) { exanak = 0; }
    }

    var h1 = document.getElementById('exanak');
    if (exanak == 0) {
        h1.innerText = "Գարուն";
    }
    else if (exanak == 1) {
        h1.innerText = "Ամառ";
    }
    else if (exanak == 2) {
        h1.innerText = "Աշուն";
    }
    else if (exanak == 3) {
        h1.innerText = "Ձմեռ";
    }

}

