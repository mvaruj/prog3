


class Xotaker extends KendaniEak {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 5;
        this.index = 2;
        if (ser == 0) {
            this.ser = ' arakan';
        }
        else {
            this.ser = 'igakan';
        }
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
        //     if (exanak == 'dzmer') {//dzmer
        //         if (this.x == Mlenght && this.y == 0) {
        //             this.mahanal();
        //             ++xotaker1;
        //         }
        //         else {
        //             var norvandak = [this.x + 1, this.y - 1];
        //             if (matrix[norvandak[1]] && matrix[norvandak[1]][norvandak[0]] && matrix[norvandak[1]][norvandak[0]] < 2) {
        //                 matrix[this.y][this.x] = 0;
        //                 this.x = norvandak[0];
        //                 this.y = norvandak[1];
        //             }
        //             else {
        //                 norvandak = [this.x + 1, this.y];
        //                 if (matrix[norvandak[1]] && matrix[norvandak[1]][norvandak[0]] && matrix[norvandak[1]][norvandak[0]] < 2) {
        //                     matrix[this.y][this.x] = 0;
        //                     this.x = norvandak[0];
        //                     this.y = norvandak[1];
        //                 }
        //                 else {
        //                     norvandak = [this.x, this.y - 1];
        //                     if (matrix[norvandak[1]] && matrix[norvandak[1]][norvandak[0]] && matrix[norvandak[1]][norvandak[0]] < 2) {
        //                         matrix[this.y][this.x] = 0;
        //                         this.x = norvandak[0];
        //                         this.y = norvandak[1];
        //                     }
        //                 }
        //             }
        //         }
        //         if (matrix[this.y][this.x] == 1) {
        //             for (var i in grassArr) {
        //                 if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
        //                     grassArr.splice(i, 1);
        //                     break;
        //                 }
        //             }
        //         }
        //         matrix[this.y][this.x] = 2;

        //     }
        //  //-----exanak(0,1,2)--------
        // else {
        if (this.ser == 'arakan') {
            var vandak25 = this.yntrelVandak(2.5);
            if (vandak25) {
                this.bazmanal();

            }
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
                    break;
                }
            }

        }
        else {
            this.sharjvel();
        }
    }

    //}
    sharjvel() {


        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 2;
            this.energy--;
            if (this.energy <= 0 && xotakerArr.length > 1) {
                // this.mahanal();
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
                break;
            }
        }
    }
    bazmanal() {
        if (random(1) >= 0.5) {
            var s = 'eg';
        }
        else { var s = 'aru' }
        ++xotakerner;
        this.energy = 8;
        this.stanalNorKordinatner();
        var dir = random(this.yntrelVandak(0));
        if (dir) {
            var norXotaker = new Xotaker(dir[0], dir[1], s);
            xotakerArr.push(norXotaker);
            matrix[dir[1]][dir[0]] = 2;
        }
        else {
            var dir = random(this.yntrelVandak(1));
            if (dir) {
                for (var i in grassArr) {
                    if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                xotakerArr.push(new Xotaker(dir[0], dir[1]));
                matrix[dir[1]][dir[0]] = 2;
            }
        }
    }

}

