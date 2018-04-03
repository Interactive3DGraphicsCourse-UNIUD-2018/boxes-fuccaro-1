function loadGarage(url){
  var loader = new THREE.ObjectLoader();
  garage = "models/garage.json";

  loader.load(
    garage,
    function ( obj ) {
        //aggiunge il portone alla parete del garage
        pareteGarage = obj.children[1];
        pareteGarage.add(portoneGarage);

        //aggiunge le pointlight alle "luci"
        luceGarage = pareteGarage.children[4];
        luceInterna = obj.children[6];
        luceDirimpetto = obj.children[7];
        ingresso = obj.children[8];
        luceIngresso = ingresso.children[3];


        luceGarage.add(luciCasa[0]);
        luciCasa[0].distance = 4;
        luciCasa[0].position.set(0,0,0.1);
        luciCasa[3].position.set(0,0,0.1);
        luceInterna.add(luciCasa[1]);
        luceDirimpetto.add(luciCasa[2]);
        luceIngresso.add(luciCasa[3]);

        scene.add(obj);
    }
  );


}
