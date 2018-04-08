

class Vorsord extends KendaniEak{
    constructor(x, y) {
        super(x,y);
        this.energy = 0;
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
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
