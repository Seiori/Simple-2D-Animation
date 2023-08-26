class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    add(pVector) {
        return new Vector(this.getX() + pVector.getX(), this.getY() + pVector.getY(), this.getZ() + pVector.getZ())
    }
    subtract(pVector) {
        return new Vector(this.getX() - pVector.getX(), this.getY() - pVector.getY(), this.getZ() - pVector.getZ())
    }
    multiply(pVector) {
        return new Vector(this.getX() * pVector, this.getY() * pVector, this.getZ() * pVector)
    }
    divide(pVector) {
        return new Vector(this.getX() / pVector, this.getY() / pVector, this.getZ() / pVector)
    }
    magnitude() {
        return Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY() + this.getZ() * this.getZ())
    }
    normalise() {
        var mag = this.magnitude();
        return new Vector(this.getX() / mag, this.getY() / mag, this.getZ() / mag)
    }
    limitTo(pScalar) {
        var mag = this.magnitude();
        var tempvec1, tempvec2 = new Vector;
        if (mag > pScalar) {
            tempvec1 = this.normalise();
            tempvec2 = tempvec1.multiply(pScalar);
            return new Vector(tempvec2.getX(), tempvec2.getY(), tempvec2.getZ())
        }
        return new Vector(this.getX(), this.getY(), this.getZ())
    }
    dotProduct(pVector) {
        return (this.getX() * pVector.getX() + this.getY() * pVector.getY() + this.getZ() * pVector.getZ())
    }
    interpolate(pVector, intP) {
        return pVector.subtract(this).multiply(intP).add(this)
    }
    rotate(pRotation) {
        var cos = Math.cos(pRotation)
        var sin = Math.sin(pRotation)
        return new Vector(this.getX() * cos - this.getY() * sin, this.getX() * sin + this.getY() * cos)
    }
    angleBetween(pVector) {
        return this.angleTo(pVector)
    }
    length() {
        return Math.sqrt(this.dotProduct(this))
    }
    angleTo(pVector) {
        return Math.acos(this.dotProduct(pVector) / (this.length() * pVector.length()))
    }
}