class Star {
    constructor(pPosition, pRotationRate, pScale) {
        this.setPosition(pPosition)
        this.setRotation(10)
        this.setScale(pScale)
        this.setRotationRate(pRotationRate)
        this.initialiseSceneGraph()
    }
    getPosition() {
        return this.mPosition
    }
    setPosition(pPosition) {
        this.mPosition = pPosition
    }
    getRotation() {
        return this.mRotation
    }
    setRotation(pRotation) {
        this.mRotation = pRotation
    }
    getRotationRate() {
        return this.mRotationRate
    }
    setRotationRate(pRotationRate) {
        this.mRotationRate = pRotationRate
    }
    getScale() {
        return this.mScale
    }
    setScale(pScale) {
        this.mScale = pScale
    }
    getSceneGraphRoot() {
        return this.mRootNode
    }
    setSceneGraphRoot(pSceneGraphNode) {
        this.mRootNode = pSceneGraphNode
    }
    getSceneGraphRotationNode() {
        return this.mRotationNode
    }
    setSceneGraphRotationNode(pRotationNode) {
        this.mRotationNode = pRotationNode
    }
    initialiseSceneGraph() {
        let localTranslation = Matrix.createTranslation(this.getPosition())
        let localRotation = Matrix.createRotation(this.getRotation())
        let localScale = Matrix.createScale(this.getScale())
        let localTranslationNode = new SceneGraphNode(localTranslation)
        let localRotationNode = new SceneGraphNode(localRotation)
        let localScaleNode = new SceneGraphNode(localScale)

        this.setSceneGraphRotationNode(localRotationNode)

        localTranslationNode.addChild(localRotationNode)
        localRotationNode.addChild(localScaleNode)

        let vertices = []
        vertices.push(new Vector(-15, 11.5, 1));
        vertices.push(new Vector(0, -18.5, 1));
        vertices.push(new Vector(15, 11.5, 1));
        let starUp = new Polygon(vertices, '#FFFFFF')
        localScaleNode.addChild(starUp)

        vertices = []
        vertices.push(new Vector(-15, -11.5));
        vertices.push(new Vector(0, 18.5));
        vertices.push(new Vector(15, -11.5));
        let starDown = new Polygon(vertices, '#FFFFFF')
        localScaleNode.addChild(starDown)

        this.setSceneGraphRoot(localTranslationNode)
    }
    update(pDeltaTime) {
        let currentRotationDelta = this.getRotationRate() * pDeltaTime
        let newRotation = this.getRotation() + currentRotationDelta
        this.setRotation(newRotation)
        let rotationNode = this.getSceneGraphRotationNode()
        let newRotationMatrix = Matrix.createRotation(newRotation)
        rotationNode.setLocalTransformation(newRotationMatrix)
    }
}