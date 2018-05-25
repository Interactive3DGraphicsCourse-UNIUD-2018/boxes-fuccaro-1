class Character {
  constructor() {
    this.character = new THREE.Object3D();

    var testaG = new THREE.BoxGeometry(1,1,1);
    var pelleM = new THREE.MeshPhongMaterial({color: 0xffcfdc});
    var testa = new THREE.Mesh(testaG, pelleM);
    testa.castShadow = true;
    testa.receiveShadow = true;

    testa.position.set(0,4.7,0);

    var colloG = new THREE.BoxGeometry(.4,.2,.4);
    var collo = new THREE.Mesh(colloG, pelleM)

    collo.castShadow = true;
    collo.receiveShadow = true;

    collo.position.set(0,-0.6,0);
    testa.add(collo);

    this.character.add(testa);

    var bustoG = new THREE.BoxGeometry(1.4,1.8,0.8);
    var bustoM = new THREE.MeshPhongMaterial({color: 0x996600});
    var busto = new THREE.Mesh(bustoG,bustoM);
    busto.castShadow = true;
    busto.receiveShadow = true;

    busto.position.set(0,3.1,0);

    this.character.add(busto);

    var pantG = new THREE.BoxGeometry(1.4,0.4,0.8);
    var pantM = new THREE.MeshPhongMaterial({color: 0x3e6a93});
    var pantalone = new THREE.Mesh(pantG, pantM);
    pantalone.castShadow = true;
    pantalone.receiveShadow = true;

    pantalone.position.set(0,2,0);

    this.character.add(pantalone);

    var gambaG = new THREE.BoxGeometry(0.5,1.6,0.8);
    var gambaDX = new THREE.Mesh(gambaG, pelleM);
    gambaDX.castShadow = true;
    gambaDX.receiveShadow = true;

    var scarpeG = new THREE.BoxGeometry(0.5,0.2,0.8);
    var scarpa = new THREE.Mesh(scarpeG, pantM);

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

    var braccioDX = new THREE.Object3D();
    braccioDX.position.set(0.85,0.8,0);
    braccioDX.add(braccio);

    var braccioSX = braccioDX.clone();
    braccioSX.position.set(-0.85,0.8,0);

    busto.add(braccioDX);
    busto.add(braccioSX);

    braccioDX.rotation.x = -Math.PI/2;
    braccioSX.rotation.x = -Math.PI/3;

    this.character.scale.set(1.5,1.5,1.5);
  }

  getCharacter(){
    return this.character;
  }



}