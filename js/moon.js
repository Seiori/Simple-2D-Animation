class Moon {
    constructor(pPosition, pRotation, pScale) {
        this.setPosition(pPosition)
        this.setRotation(pRotation)
        this.setScale(pScale)
        this.setVelocity(new Vector(-15, 0,1))
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
    getVelocity() {
        return this.mVelocity
    }
    setVelocity(pVelocity) {
        this.mVelocity = pVelocity
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

        let moonBody = Polygon.createRegularPolygon(50,30, '#FFFFFF')
        localScaleNode.addChild(moonBody)

        this.setSceneGraphRoot(localTranslationNode)
    }
    update(pDeltaTime) {
        let currentVelocity = this.getVelocity().multiply(pDeltaTime)
        let newPosition = this.getPosition().add(currentVelocity)
        this.setPosition(newPosition)

        let translationNode = this.getSceneGraphRoot()
        let newTranslationMatrix = Matrix.createTranslation(newPosition)
        translationNode.setLocalTransformation(newTranslationMatrix)
    }
}