class Minotaur{

  constructor(){
    this.minotaur = new THREE.Object3D();

    //testa
    var testaG = new THREE.BoxGeometry(3,3,3);
    //var testaTex = new THREE.TextureLoader().load('textures/minotaur/head.png');
    var faceTex = new THREE.TextureLoader().load('textures/minotaur/muso.jpg');
    var headTex = new THREE.TextureLoader().load('textures/minotaur/testa.jpg');

    var headMats = [
      new THREE.MeshPhongMaterial({map: headTex}), //dx
      new THREE.MeshPhongMaterial({map: headTex}), //sx
      new THREE.MeshPhongMaterial({map: headTex}), //top
      new THREE.MeshPhongMaterial({map: headTex}), //bottom
      new THREE.MeshPhongMaterial({map: faceTex}), //front
      new THREE.MeshPhongMaterial({map: headTex}) //back
    ];

    var testaM = new THREE.MeshFaceMaterial(headMats);

    var peloM = new THREE.MeshPhongMaterial({map: headTex});

    var testa = new THREE.Mesh(testaG, testaM);
    testa.receiveShadow = true;
    testa.castShadow = true;

    testa.position.set(0,16.5,0);

    this.minotaur.add(testa);

    //corna
    var cornaG = new THREE.BoxGeometry(3,1,1);
    var cornoT = new THREE.TextureLoader().load('textures/minotaur/corno.jpg');
    var cornaM = new THREE.MeshPhongMaterial({map: cornoT});

    var cornoDX = new THREE.Mesh(cornaG, cornaM);
    cornoDX.castShadow = true;
    cornoDX.receiveShadow = true;

    var cornoSX = cornoDX.clone();

    cornoDX.position.set(3,1,0);
    cornoSX.position.set(-3,1,0);

    var orG = new THREE.BoxGeometry(1,1.5,0.5);
    var orecchioDX = new THREE.Mesh(orG, peloM);
    orecchioDX.castShadow = true;
    orecchioDX.receiveShadow = true;
    var orecchioSX = orecchioDX.clone();

    orecchioDX.position.set(2,-0.2,0);
    orecchioSX.position.set(-2,-0.2,0);

    var colloG = new THREE.BoxGeometry(2,1,2);
    var collo = new THREE.Mesh(colloG, peloM);
    collo.castShadow = true;
    collo.receiveShadow = true;
    collo.position.set(0,-2,0);

    testa.add(cornoDX);
    testa.add(cornoSX);
    testa.add(orecchioDX);
    testa.add(orecchioSX);
    testa.add(collo);

    var corpG = new THREE.BoxGeometry(5,6,3.5);
    var corpT = new THREE.TextureLoader().load('textures/minotaur/skin.jpg');
    var corpM = new THREE.MeshPhongMaterial({map: corpT});
    var corpo = new THREE.Mesh(corpG, corpM);

    corpo.castShadow = true;
    corpo.receiveShadow = true;
    corpo.position.set(0,11,0);

    this.minotaur.add(corpo);

    var pantG = new THREE.BoxGeometry(5,2,3.5);
    var pantT = new THREE.TextureLoader().load('textures/minotaur/pantaloni.jpg');
    var pantM = new THREE.MeshPhongMaterial({map: pantT});
    var pantalone = new THREE.Mesh(pantG, pantM);
    pantalone.castShadow = true;
    pantalone.receiveShadow = true;
    pantalone.position.set(0,-4,0);

    corpo.add(pantalone);

    var bracG = new THREE.BoxGeometry(1.5,6,2.25);

    var braccio = new THREE.Mesh(bracG, corpM);
    braccio.castShadow = true;
    braccio.receiveShadow = true;
    braccio.position.set(0,-2,0);

    var braccioSX = new THREE.Object3D();
    var braccioDX = new THREE.Object3D();

    braccioDX.add(braccio);
    braccioSX.add(braccio.clone());

    braccioDX.position.set(3.25,13,0);
    braccioSX.position.set(-3.25,13,0);

    braccioDX.rotation.x = Math.PI/4;
    braccioSX.rotation.x = -Math.PI/4;

    this.minotaur.add(braccioDX);
    this.minotaur.add(braccioSX);

    var gambaG = new THREE.BoxGeometry(2,5,3);
    var gambaDX = new THREE.Mesh(gambaG, peloM);
    gambaDX.castShadow = true;
    gambaDX.receiveShadow = true;
    var gambaSX = gambaDX.clone();

    gambaDX.position.set(1.5,3.5,0);
    gambaSX.position.set(-1.5,3.5,0);

    this.minotaur.add(gambaDX);
    this.minotaur.add(gambaSX);

    var piedeG = new THREE.BoxGeometry(2,1,3);
    var piedeDX = new THREE.Mesh(piedeG, cornaM);
    piedeDX.castShadow = true;
    piedeDX.receiveShadow = true;
    var piedeSX = piedeDX.clone();

    piedeDX.position.set(1.5,0.5,0);
    piedeSX.position.set(-1.5,0.5,0);

    this.minotaur.add(piedeDX);
    this.minotaur.add(piedeSX);

  }

  getMinotaur(){
    return this.minotaur;
  }
}
