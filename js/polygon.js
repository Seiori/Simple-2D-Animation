class Polygon {
    constructor(pVertices, pFillColour) {
        this.setVertices(pVertices)
        this.setFillColour(pFillColour)
    }
    getNumberOfVertices() {
        return this.mVertices.length
    }
    setVertices(pVertices) {
        this.mVertices = pVertices
    }
    getVertex(pIndex) {
        return this.mVertices[pIndex]
    }
    getFillColour(pFillColour) {
        return this.mFillColour
    }
    setFillColour(pFillColour) {
        this.mFillColour = pFillColour
    }
    static createRegularPolygon(pRadius, pNumEdges, pColour) {
        let vertices = []
        let anglePerEdge = 2 * Math.PI / pNumEdges
        for (let i = 0; i < pNumEdges; i += 1) {
            let currentAngle = anglePerEdge * i
            let x = pRadius * Math.cos(currentAngle)
            let y = pRadius * Math.sin(currentAngle)
            let vertex = new Vector(x,y,1)
            vertices.push(vertex)
        }
        let polygon = new Polygon(vertices, pColour)
        return polygon
    }
    draw(pContext) {
        pContext.beginPath()
        pContext.fillStyle = this.getFillColour()
        let firstVertex = this.getVertex(0)
        pContext.moveTo(firstVertex.getX(), firstVertex.getY())
        for (let i = 0; i < this.getNumberOfVertices(); i += 1) {
            let vertex = this.getVertex(i)
            pContext.lineTo(vertex.getX(), vertex.getY())
        }
        let lastVertex = this.getVertex(this.getNumberOfVertices()-1)
        if (firstVertex.getX() == lastVertex.getX() && firstVertex.getY() == lastVertex.getY()) {
            pContext.closePath()
        }
        pContext.fill()
    }
}