function minotaur(){
  var minotaur = new THREE.Object3D();

  //testa
  var testaG = new THREE.BoxGeometry(3,3,3);
  //var testaTex = new new THREE.TextureLoader();
  var testaM = new THREE.MeshPhongMaterial({color: 0x804000});//{map:testaTex});
  var testa = new THREE.Mesh(testaG, testaM);
  testa.position.set(0,16.5,0);

  minotaur.add(testa);

  //corna
  var cornaG = new THREE.BoxGeometry(3,1,1);
  var cornaM = new THREE.MeshPhongMaterial({color: 0xfffff0});

  var cornoDX = new THREE.Mesh(cornaG, cornaM);
  var cornoSX = new THREE.Mesh(cornaG, cornaM);

  cornoDX.position.set(3,1,0);
  cornoSX.position.set(-3,1,0);

  var orG = new THREE.BoxGeometry(1,1.5,0.5);
  var orM = new THREE.MeshPhongMaterial({color: 0x804000});
  var orecchioDX = new THREE.Mesh(orG, orM);
  var orecchioSX = new THREE.Mesh(orG, orM);

  orecchioDX.position.set(2,-0.2,0);
  orecchioSX.position.set(-2,-0.2,0);

  var colloG = new THREE.BoxGeometry(2,1,2);
  var collo = new THREE.Mesh(colloG, orM);

  collo.position.set(0,-2,0);

  testa.add(cornoDX);
  testa.add(cornoSX);
  testa.add(orecchioDX);
  testa.add(orecchioSX);
  testa.add(collo);

  var corpG = new THREE.BoxGeometry(5,6,3.5);
  var corpM = new THREE.MeshPhongMaterial({color: 0xffdfc4});
  var corpo = new THREE.Mesh(corpG, corpM);

  corpo.position.set(0,11,0);

  minotaur.add(corpo);

  var pantG = new THREE.BoxGeometry(5,2,3.5);
  var pantM = new THREE.MeshPhongMaterial({color: 0x555555});
  var pantaloni = new THREE.Mesh(pantG, pantM);

  pantaloni.position.set(0,-4,0);

  corpo.add(pantaloni);

  var bracG = new THREE.BoxGeometry(1.5,6,2.25);

  var braccio = new THREE.Mesh(bracG, corpM);
  braccio.position.set(0,-2,0);

  var braccioSX = new THREE.Object3D();
  var braccioDX = new THREE.Object3D();

  braccioDX.add(braccio);
  braccioSX.add(braccio.clone());

  braccioDX.position.set(3.25,13,0);
  braccioSX.position.set(-3.25,13,0);

  braccioDX.rotation.x = Math.PI/4;
  braccioSX.rotation.x = -Math.PI/4;

  minotaur.add(braccioDX);
  minotaur.add(braccioSX);

  var gambaG = new THREE.BoxGeometry(2,5,3);
  var gambaDX = new THREE.Mesh(gambaG, orM);
  var gambaSX = gambaDX.clone();

  gambaDX.position.set(1.5,3.5,0);
  gambaSX.position.set(-1.5,3.5,0);

  minotaur.add(gambaDX);
  minotaur.add(gambaSX);

  var piedeG = new THREE.BoxGeometry(2,1,3);
  var piedeDX = new THREE.Mesh(piedeG, cornaM);
  var piedeSX = piedeDX.clone();

  piedeDX.position.set(1.5,.5,0);
  piedeSX.position.set(-1.5,.5,0);

  minotaur.add(piedeDX);
  minotaur.add(piedeSX);

  scene.add(minotaur);

}
