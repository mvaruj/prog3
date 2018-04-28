

class Gishatich extends KendaniEak{
    constructor(x, y) {
        super(x,y);
        this.energy = 5;
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);

    }
    utel() {
        if (this.energy > 18 && xotakerArr.length > 2 * gishatichArr.length) {
            this.bazmanal();
        }
        var vandak2 = random(this.yntrelVandak(2));
        if (vandak2 && (vandak2[0] < (Mlenght-1) && vandak2[1] > 1)) {
            matrix[this.y][this.x] = 0;
            this.x = vandak2[0]
            this.y = vandak2[1]
            matrix[this.y][this.x] = 3;
            this.energy += 2;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
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
                        break;
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
                
                break;
            }
        }
    }
    bazmanal() {
        ++gishatichner;
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
                            break;
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