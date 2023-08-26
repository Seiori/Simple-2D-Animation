class Matrix {
    constructor(pX1, pX2, pX3, pY1, pY2, pY3, pZ1, pZ2, pZ3) {
        this.Matrix = [
            [pX1, pX2, pX3],
            [pY1, pY2, pY3],
            [pZ1, pZ2, pZ3]
        ]
    }
    getElement(pRow, pColumn) {
        return this.Matrix[pRow][pColumn];
    }
    setElement(pRow, pColumn, i) {
        this.Matrix[pRow][pColumn] = i;
    }
    static createIdentity() {
        return new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    static createTranslation(pVector) {
        return new Matrix(1, 0, pVector.getX(), 0, 1, pVector.getY(), 0, 0, 1);
    }
    static createScale(pVector) {
        return new Matrix(pVector.getX(), 0, 0, 0, pVector.getY(), 0, 0, 0, 1);
    }
    static createRotation(pScalar) {
        return new Matrix(Math.cos(pScalar), -Math.sin(pScalar), 0, Math.sin(pScalar), Math.cos(pScalar), 0, 0, 0, 1);
    }
    multiply(pMatrix) {
        return new Matrix(
            this.Matrix[0][0] * pMatrix.getElement(0,0) + this.Matrix[0][1] * pMatrix.getElement(1,0) + this.Matrix[0][2] * pMatrix.getElement(2,0),
            this.Matrix[0][0] * pMatrix.getElement(0,1) + this.Matrix[0][1] * pMatrix.getElement(1,1) + this.Matrix[0][2] * pMatrix.getElement(2,1),
            this.Matrix[0][0] * pMatrix.getElement(0,2) + this.Matrix[0][1] * pMatrix.getElement(1,2) + this.Matrix[0][2] * pMatrix.getElement(2,2),

            this.Matrix[1][0] * pMatrix.getElement(0,0) + this.Matrix[1][1] * pMatrix.getElement(1,0) + this.Matrix[1][2] * pMatrix.getElement(2,0),
            this.Matrix[1][0] * pMatrix.getElement(0,1) + this.Matrix[1][1] * pMatrix.getElement(1,1) + this.Matrix[1][2] * pMatrix.getElement(2,1),
            this.Matrix[1][0] * pMatrix.getElement(0,2) + this.Matrix[1][1] * pMatrix.getElement(1,2) + this.Matrix[1][2] * pMatrix.getElement(2,2),

            this.Matrix[2][0] * pMatrix.getElement(0,0) + this.Matrix[2][1] * pMatrix.getElement(1,0) + this.Matrix[2][2] * pMatrix.getElement(2,0),
            this.Matrix[2][0] * pMatrix.getElement(0,1) + this.Matrix[2][1] * pMatrix.getElement(1,1) + this.Matrix[2][2] * pMatrix.getElement(2,1),
            this.Matrix[2][0] * pMatrix.getElement(0,2) + this.Matrix[2][1] * pMatrix.getElement(1,2) + this.Matrix[2][2] * pMatrix.getElement(2,2),
        )
    }
    multiplyVector(pVector) {
        return new Vector(
            this.Matrix[0][0] * pVector.getX() + this.Matrix[0][1] * pVector.getY() + this.Matrix[0][2] * pVector.getZ(),
            this.Matrix[1][0] * pVector.getX() + this.Matrix[1][1] * pVector.getY() + this.Matrix[1][2] * pVector.getZ(),
            this.Matrix[2][0] * pVector.getX() + this.Matrix[2][1] * pVector.getY() + this.Matrix[2][2] * pVector.getZ()
        )
    }
    setTransform(pContext) {
        pContext.setTransform(this.Matrix[0][0], this.Matrix[1][0], this.Matrix[0][1], this.Matrix[1][1], this.Matrix[0][2], this.Matrix[1][2])
    }
    transform(pContext) {
        pContext.transform(this.Matrix[0][0], this.Matrix[1][0], this.Matrix[0][1], this.Matrix[1][1], this.Matrix[0][2], this.Matrix[1][2])
    }
}