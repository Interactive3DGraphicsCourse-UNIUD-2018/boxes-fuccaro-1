class Character {

  constructor() {
    this.character = new THREE.Object3D();

    var headT = new THREE.TextureLoader().load('textures/character/testa.jpg');
    var faceT = new THREE.TextureLoader().load('textures/character/faccia.jpg');
    var edgeT = new THREE.TextureLoader().load('textures/character/lati.jpg');
    var skinT = new THREE.TextureLoader().load('textures/character/pelle.jpg');

    var headM = [
      new THREE.MeshPhongMaterial({map: edgeT}), //dx
      new THREE.MeshPhongMaterial({map: edgeT}), //sx
      new THREE.MeshPhongMaterial({map: headT}), //top
      new THREE.MeshPhongMaterial({map: skinT}), //bottom
      new THREE.MeshPhongMaterial({map: faceT}), //front
      new THREE.MeshPhongMaterial({map: edgeT}) //back
    ];

    var testaG = new THREE.BoxGeometry(1,1,1);

    var testaM = new THREE.MeshFaceMaterial(headM);

    var testa = new THREE.Mesh(testaG, testaM);
    testa.castShadow = true;
    testa.receiveShadow = true;

    testa.position.set(0,4.7,0);

    var pelleM = new THREE.MeshPhongMaterial({map: skinT});

    var colloG = new THREE.BoxGeometry(.4,.2,.4);
    var collo = new THREE.Mesh(colloG, pelleM)

    collo.castShadow = true;
    collo.receiveShadow = true;

    collo.position.set(0,-0.6,0);
    testa.add(collo);

    this.character.add(testa);

    var bustoG = new THREE.BoxGeometry(1.4,1.8,0.8);
    var bustoT = new THREE.TextureLoader().load('textures/character/maglia.jpg');
    var bustoM = new THREE.MeshPhongMaterial({map: bustoT});
    var busto = new THREE.Mesh(bustoG,bustoM);
    busto.castShadow = true;
    busto.receiveShadow = true;

    busto.position.set(0,3.1,0);

    this.character.add(busto);

    var pantG = new THREE.BoxGeometry(1.4,0.4,0.8);
    var pantT = new THREE.TextureLoader().load('textures/character/pantaloni.jpg');
    var pantM = new THREE.MeshPhongMaterial({map: pantT});
    var pantalone = new THREE.Mesh(pantG, pantM);
    pantalone.castShadow = true;
    pantalone.receiveShadow = true;

    pantalone.position.set(0,2,0);

    this.character.add(pantalone);

    var gambaG = new THREE.BoxGeometry(0.5,1.6,0.8);
    var gambaDX = new THREE.Mesh(gambaG, pantM);
    gambaDX.castShadow = true;
    gambaDX.receiveShadow = true;

    var scarpaG = new THREE.BoxGeometry(0.5,0.2,0.8);

    var scarpaT = new THREE.TextureLoader().load('textures/character/scarpa.jpg');
    var scarpaM = new THREE.MeshPhongMaterial({map: scarpaT});
    var scarpa = new THREE.Mesh(scarpaG, scarpaM);

    scarpa.position.set(0,-0.9,0);

    gambaDX.add(scarpa);

    var gambaSX = gambaDX.clone();

    gambaDX.position.set(0.45,1,0);
    gambaSX.position.set(-0.45,1,0);

    this.character.add(gambaDX);
    this.character.add(gambaSX);

    var braccioG = new THREE.BoxGeometry(0.3,2,0.6);
    var braccio = new THREE.Mesh(braccioG, pelleM);
    braccio.position.set(0,-0.9,0);

    this.braccioDX = new THREE.Object3D();
    this.braccioDX.position.set(0.85,0.8,0);
    this.braccioDX.add(braccio);

    this.braccioSX = this.braccioDX.clone();
    this.braccioSX.position.set(-0.85,0.8,0);

    busto.add(this.braccioDX);
    busto.add(this.braccioSX);


    this.character.scale.set(1.5,1.5,1.5);
  }

  scaleUniformCharacter(n){
    this.character.scale.set(1.5,1.5,1.5);
  }

  getCharacter(){
    return this.character;
  }

  ruotaBraccioDX(angolo){
    this.braccioDX.rotation.x = angolo;
  }

  ruotaBraccioSX(angolo){
    this.braccioSX.rotation.x = angolo;
  }

  ruotaCharacter(angolo){
    this.character.rotation.y = angolo;
  }

}
