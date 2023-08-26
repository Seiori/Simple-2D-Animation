// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, rootNode, updateableObjects, OriginMatrix, OriginVector, lastTime, loopCount;
    function initialiseCanvasContext() {
        mainCanvas = document.getElementById('mainCanvas');
        if (!mainCanvas) {
            alert('Error: I cannot find the canvas element!');
            return;
        }      
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }
        updateableObjects = [];

        lastTime = Date.now()
        initialiseSceneGraph()
    }

    function initialiseSceneGraph() {
        OriginVector = new Vector(mainCanvas.width, mainCanvas.height, 1)
        OriginVector = OriginVector.multiply(0.5)
        OriginMatrix = Matrix.createTranslation(OriginVector)

        rootNode = new SceneGraphNode(OriginMatrix)
        
        let vertices = []
        vertices.push(new Vector(0,0,1))
        vertices.push(new Vector(mainCanvas.width, 0 , 1))
        vertices.push(new Vector(mainCanvas.width, mainCanvas.height, 1))
        vertices.push(new Vector(0, mainCanvas.height, 1))
        vertices.push(new Vector(0, 0, 1))
        let background = new Polygon(vertices, '#000000')
        let backgroundVector = OriginVector.multiply(-1)
        let backgroundTranslation = Matrix.createTranslation(backgroundVector)
        let backgroundTranslationNode = new SceneGraphNode(backgroundTranslation)
        backgroundTranslationNode.addChild(background)
        rootNode.addChild(backgroundTranslationNode)

        

        let StarScale = new Vector(0.5,0.5,1);
        let StarRotation = Math.PI / 3;
        let StarPosition = new Vector(0, 0, 1);
        let star = new Star(StarPosition, StarRotation, StarScale);
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())

        StarPosition = new Vector(-300,-600,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-100,-400,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-400,-300,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-350,-50,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-360,-200,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-250,-230,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-200,-80,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(-100,-200,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(0,-250,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(50,-100,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(100,-350,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(200,-200,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(150,-24,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(250,-100,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())
        StarPosition = new Vector(360,-250,1)
        star = new Star(StarPosition, StarRotation, StarScale)
        updateableObjects.push(star)
        rootNode.addChild(star.getSceneGraphRoot())

        let MoonScale = new Vector(1,1,1)
        let MoonRotation = 0;
        let MoonPosition = new Vector(300,-200,0)
        let moon = new Moon(MoonPosition, MoonRotation, MoonScale)
        updateableObjects.push(moon)
        rootNode.addChild(moon.getSceneGraphRoot())

        let landScale = new Vector(6,3,1)
        let landRotation = 0;
        let landPosition = new Vector(-200,200,1)
        let land = new Land(landPosition, landRotation, landScale)
        rootNode.addChild(land.getSceneGraphRoot())

        landPosition = new Vector(200,200,1)
        land = new Land(landPosition, landRotation, landScale)
        rootNode.addChild(land.getSceneGraphRoot())
    }

    function draw() {
        rootNode.draw(mainContext, Matrix.createIdentity());
    }

    function update(pDeltaTime) {
        for (let i = 0; i < updateableObjects.length; i += 1) {
            let updateableObject = updateableObjects[i]
            updateableObject.update(pDeltaTime)
        }
    }

    function animationLoop() {
        let thisTime = Date.now()
        let deltaTime = (thisTime - lastTime) / 1000

        update(deltaTime)
        draw()

        lastTime = thisTime

        requestAnimationFrame(animationLoop)
    }

    initialiseCanvasContext();
    animationLoop();    
}
window.addEventListener('load', onLoad, false);