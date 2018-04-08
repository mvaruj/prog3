

class Grass {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 4 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}

//-----------------------------------------------------XOTAKER-------------------------------------------

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    utel() {
        if (this.energy > 10) {
            this.bazmanal();
        }
        if (8 * xotakerArr.length > grassArr.length) {
            this.energy -= 2;
        }
        var vandak1 = random(this.yntrelVandak(1));

        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.x = vandak1[0]
            this.y = vandak1[1]
            matrix[this.y][this.x] = 2;
            this.energy++;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }

        }
        else {
            this.sharjvel();
        }

    }
    sharjvel() {


        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 2;
            this.energy--;
            if (this.energy <= 0 && xotakerArr.length>1) {
                this.mahanal();
            }
        }
    }
     mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
            }
        }
     }
    bazmanal() {
        this.energy = 8;
        this.stanalNorKordinatner();
        var dir = random(this.yntrelVandak(0));
        if (dir) {
            var norXotaker = new Xotaker(dir[0], dir[1]);
            xotakerArr.push(norXotaker);
            matrix[dir[1]][dir[0]] = 2;
        }
        else {
            var dir = random(this.yntrelVandak(1));
            if (dir) {
                for (var i in grassArr) {
                    if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                        grassArr.splice(i, 1);
                    }
                }
                var norXotaker = new Xotaker(dir[0], dir[1]);
                xotakerArr.push(norXotaker);
                matrix[dir[1]][dir[0]] = 2;
            }
        }
    }

}

//---------------------------GISHATICH-------------------------------------


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    utel() {
        if (this.energy > 18 && xotakerArr.length > 2 * gishatichArr.length) {
            this.bazmanal();
        }
        var vandak2 = random(this.yntrelVandak(2));
        if (vandak2) {
            matrix[this.y][this.x] = 0;
            this.x = vandak2[0]
            this.y = vandak2[1]
            matrix[this.y][this.x] = 3;
            this.energy += 2;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }

        }
        else if (!vandak2) {
            var vandak1 = random(this.yntrelVandak(1));
            if (vandak1) {
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0]
                this.y = vandak1[1]
                matrix[this.y][this.x] = 3;
                this.energy++;
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                    }
                }

            }
            else {
                this.sharjvel();
            }
        }
    }
    sharjvel() {


        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 3;
            this.energy--;
            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1);
            }
        }
    }
    bazmanal() {
        this.energy = 5;
        var dir = random(this.yntrelVandak(0));
        if (dir) {
            var norGishatich = new Gishatich(dir[0], dir[1]);
            gishatichArr.push(norGishatich);
            matrix[dir[1]][dir[0]] = 3;
        }
        else {
            var dir = random(this.yntrelVandak(1));
            if (dir) {
                if (matrix[dir[1]][dir[0]] == 1) {
                    for (var i in grassArr) {
                        if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                var norGishatich = new Gishatich(dir[0], dir[1]);
                gishatichArr.push(norGishatich);
                matrix[dir[1]][dir[0]] = 3;
            }
        }
    }

}



//--------------------------EMOJI-----------------------



class Emoji {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    // yntrelVandak(ch) {
    //     this.stanalNorKordinatner();
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == ch) {
    //                 found.push(this.directions[i]);
    //             }
    //             if (ch == "all") {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }
    universalDir(n){
        var found = [];
        for(var y in matrix){
            for(var x in matrix[y]){
                if(x >= this.x-n && x <= this.x+n && y >= this.y-n && y <= this.y+n && (x != this.x || y != this.y) ){
                    found.push([parseInt(x),parseInt(y)]);
                }
            }
        }
        return found;
    }
    sharjvel() {

        var vandak = random(this.universalDir(1));

        if (vandak == 1) {
            for (var i in grassArr) {
                if (grassArr[i].x == vandak[0] && grassArr[i].y == vandak[1]) {
                    grassArr.splice(i, 1);
                }
            }
        }
        if (vandak == 2) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == vandak[0] && xotakerArr[i].y == vandak[1]) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        if (vandak == 3) {
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == vandak[0] && gishatichArr[i].y == vandak[1]) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
        if (vandak==5) {
            if (vorsordArr[i].x == vandak[0] && vorsordArr[i].y == vandak[1]) {
                vorsordArr.splice(i, 1);
            }
        }  
        matrix[this.y][this.x] = 0;
        this.x = vandak[0];
        this.y = vandak[1];
        matrix[this.y][this.x] = 4;
        var dir = this.universalDir(2);

        for (var i in dir) {
            var d0 = dir[i][0];
            var d1 = dir[i][1];


                if (matrix[d1][d0] != 1) {

                    var norXot = new Grass(d0, d1);
                    grassArr.push(norXot);
                    if (matrix[d1][d0] == 2) {
                        for (var i in xotakerArr) {
                            if (xotakerArr[i].x == d0 && xotakerArr[i].y == d1) {
                                xotakerArr.splice(i, 1);
                            }
                        }
                    }
                    if (matrix[d1][d0] == 3) {
                        for (var i in gishatichArr) {
                            if (gishatichArr[i].x == d0 && gishatichArr[i].y == d1) {
                                gishatichArr.splice(i, 1);
                            }
                        }
                    }
                    if (matrix[d1][d0] == 5) {
                        for (var i in vorsordArr) {
                            if (vorsordArr[i].x == d0 && vorsordArr[i].y == d1) {
                                vorsordArr.splice(i, 1);
                            }
                        }
                    }
                    if (matrix[d1][d0] == 6) {
                        for (var i in bombArr) {
                            if (bombArr[i].x == d0 && bombArr[i].y == d1) {
                                bombArr.splice(i, 1);
                            }
                        }
                    }
                    if(matrix[d1][d0] != 4){
                    matrix[d1][d0] = 1;
                    }
                }
            }
        
    }

}




//--------------------------------VORSORD------------------------



class Vorsord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        if (this.energy > 30) {
            this.getbomb();
        }

        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 5;
            this.energy++;
        }
        else {
            var vandak1 = random(this.yntrelVandak(1));
            if (vandak1) {
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0]
                this.y = vandak1[1]
                matrix[this.y][this.x] = 5;
                this.energy++;
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
        }
    }
    getbomb() {
        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[vandak0[1]][vandak0[0]] = 6;
            bombArr.push(new Dinamit(vandak0[0],vandak0[1]));
        }
        else {
            var vandak1 = random(this.yntrelVandak(1));
            if (vandak1) {
            bombArr.push(new Dinamit(vandak1[0],vandak1[1]));
                matrix[vandak1[1]][vandak1[0]] = 6;

                for (var i in grassArr) {
                    if (grassArr[i].x == vandak1[0] && grassArr[i].y == vandak1[1]) {
                        grassArr.splice(i, 1);
                    }
                }
            }
        }

        this.energy = 0;

    }
}


//----------------------------------------BOMB----------------------------------------------------




class Dinamit{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    universalDir(n){
        var found = [];
        for(var y in matrix){
            for(var x in matrix[y]){
                if(x >= this.x-n && x <= this.x+n && y >= this.y-n && y <= this.y+n && (x != this.x || y != this.y) ){
                    found.push([parseInt(x),parseInt(y)]);
                }
            }
        }
        return found;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
                if (ch == "all") {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mnal() {
        if(this.energy>10){
            this.paytel();
        }
    this.energy++;
    }
    paytel(){
        var dir = this.universalDir(3);

        for(i in dir){
            var y = dir[i][1];
            var x = dir[i][0];
            if(matrix[y][x]==1){
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
            if(matrix[y][x]==2){
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
                        xotakerArr.splice(i, 1);
                    }
                }
            }
            if(matrix[y][x]==3){
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }

            if(matrix[y][x]!=4){
            matrix[y][x]=0;
            }
        }
         matrix[this.y][this.x]=0;
                for (var i in bombArr) {
                    if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
                        bombArr.splice(i, 1);
                    }
                }        
    }

}