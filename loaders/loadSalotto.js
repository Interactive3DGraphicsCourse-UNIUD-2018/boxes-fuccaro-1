function loadSalotto(){

  var loader = new THREE.ObjectLoader();
  url = "models/cucina sala da pranzo.json";

  loader.load(
    url,
    function ( obj ){

      //aggiunge le pointlight alle "luci"
      luceCucina = obj.children[0];
      luceSalotto = obj.children[1];

      luceCucina.add(luciCasa[4]);
      luceSalotto.add(luciCasa[5]);

      scene.add(obj);
    });


  }
