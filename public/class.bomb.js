


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