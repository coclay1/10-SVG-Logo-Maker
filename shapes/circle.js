const Shapes = require('./shape')

class Circle extends Shapes {
    constructor(circle, fill, height, width) {
        super(fill, height, width)
        this.cir = circle
    }
}