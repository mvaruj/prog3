



class Cleaner extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
        this.index = 2;
    }

    universalDir(n) {
        var found = [];
        for (var y in matrix) {
            for (var x in matrix[y]) {
                if (x >= this.x - n && x <= this.x + n && y >= this.y - n && y <= this.y + n && (x != this.x || y != this.y)) {
                    found.push([parseInt(x), parseInt(y)]);
                }
            }
        }
        return found;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {

        var vandak = random(this.yntrelVandak(0));
        if (!vandak) {
            var vandak = random(this.yntrelVandak(1));
            if (vandak) {
                for (var i in grassArr) {
                    if (grassArr[i].x == vandak[0] && grassArr[i].y == vandak[1]) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                var vandak = random(this.yntrelVandak(2));
                if (vandak) {
                    for (var i in xotakerArr) {
                        if (xotakerArr[i].x == vandak[0] && xotakerArr[i].y == vandak[1]) {
                            xotakerArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else {
                    var vandak = random(this.yntrelVandak(3));
                    if (vandak) {
                        for (var i in gishatichArr) {
                            if (gishatichArr[i].x == vandak[0] && gishatichArr[i].y == vandak[1]) {
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        var vandak = random(this.yntrelVandak(5));
                        if (vandak) {
                            if (vorsordArr[i].x == vandak[0] && vorsordArr[i].y == vandak[1]) {
                                vorsordArr.splice(i, 1);
                                // break;
                            }
                        }
                    }
                }
            }
        }
        matrix[this.y][this.x] = 0;
        this.x = vandak[0];
        this.y = vandak[1];
        matrix[this.y][this.x] = 7;
        var dir = this.universalDir(2);

        for (var i in dir) {
            var d0 = dir[i][0];
            var d1 = dir[i][1];


            if (matrix[d1][d0] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == vandak[0] && grassArr[i].y == vandak[1]) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            if (matrix[d1][d0] == 2) {
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == d0 && xotakerArr[i].y == d1) {
                        xotakerArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[d1][d0] == 3) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == d0 && gishatichArr[i].y == d1) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[d1][d0] == 5) {
                for (var i in vorsordArr) {
                    if (vorsordArr[i].x == d0 && vorsordArr[i].y == d1) {
                        vorsordArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[d1][d0] == 6) {
                for (var i in bombArr) {
                    if (bombArr[i].x == d0 && bombArr[i].y == d1) {
                        bombArr.splice(i, 1);
                        break;
                    }
                }
            }
            if (matrix[d1][d0] != 4 && matrix[d1][d0] != 7) {
                matrix[d1][d0] = 0;
            }

        }

    }

}

