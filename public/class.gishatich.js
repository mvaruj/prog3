


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