class SceneGraphNode {
    constructor(pMatrix) {
        this.setLocalTransformation(pMatrix)
        this.mChildren = []
    }
    setLocalTransformation(pMatrix) {
        this.mLocalTransformation = pMatrix
    }
    getLocalTransformation() {
        return this.mLocalTransformation
    }
    getNumberOfChildren() {
        return this.mChildren.length
    }
    getChild(pIndex) {
        return this.mChildren[pIndex]
    }
    addChild(pChild) {
        this.mChildren.push(pChild)
    }
    draw(pContext, pWorldMatrix) {
        let transform = pWorldMatrix.multiply(this.getLocalTransformation())
        transform.setTransform(pContext)

        for(let i = 0; i < this.getNumberOfChildren(); i += 1) {
            let child = this.getChild(i)
            child.draw(pContext, transform)
        }
        pWorldMatrix.setTransform(pContext)
    }
}