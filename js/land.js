class Land {
    constructor(pPosition, pRotation, pScale) {
        this.setPosition(pPosition)
        this.setRotation(pRotation)
        this.setScale(pScale)
        this.initialiseSceneGraph()
    }
    getPosition() {
        return this.mPosition
    }
    setPosition(pPosition) {
        this.mPosition = pPosition
    }
    getVelocity() {
        return this.mVelocity
    }
    setVelocity(pVelocity) {
        this.mVelocity = pVelocity
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
    getSceneGraphRotation() {
        return this.mRotationNode
    }
    setSceneGraphRotation(pRotationNode) {
        this.mRotationNode = pRotationNode
    }
    initialiseSceneGraph() {
        let localTranslation = Matrix.createTranslation(this.getPosition())
        let localRotation = Matrix.createRotation(this.getRotation())
        let localScale = Matrix.createScale(this.getScale())
        let localTranslationNode = new SceneGraphNode(localTranslation)
        let localRotationNode = new SceneGraphNode(localRotation)
        let localScaleNode = new SceneGraphNode(localScale)

        localTranslationNode.addChild(localRotationNode)
        localRotationNode.addChild(localScaleNode)

        let landBody = Polygon.createRegularPolygon(50,30, '#071c07')
        localScaleNode.addChild(landBody)

        this.setSceneGraphRoot(localTranslationNode)
    }
}