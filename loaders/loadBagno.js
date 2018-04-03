function loadBagno(){

  var loader = new THREE.ObjectLoader();
  url = "models/bagno e camera.json";


  loader.load(
    url,
    function ( obj ){

      //aggiunge le pointlight alle "luci"
      luceCorridoio = obj.children[0];
      luceBagno = obj.children[1];
      luceCamera = obj.children[2];

      luceCorridoio.add(luciCasa[6]);
      luceBagno.add(luciCasa[7]);
      luceCamera.add(luciCasa[8]);

      scene.add(obj);
    });


  }
