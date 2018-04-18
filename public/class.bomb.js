




class Dinamit extends KendaniEak{
    constructor(x, y) {
        super(x,y);
        this.energy = 5;
        this.index = 2;
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
        return super.yntrelVandak(ch);
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

            if(matrix[y][x]!=4 && matrix[y][x]!=5){
            matrix[y][x]=0;
            }
        }
         matrix[this.y][this.x]=0;
                for (var i in bombArr) {
                    if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
                        bombArr.splice(i, 1);
                        break;
                    }
                }        
    }

}