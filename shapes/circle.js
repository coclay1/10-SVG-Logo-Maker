Shapes = require('./shape')

class Circle extends Shapes {
    constructor(x, y, r) {
        super(x, y)
        this.x = x;
        this.y = y;
        this.r = r
    };
}
