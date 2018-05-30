function createGUI(){


  var par = {
    Mostra_Percorso: false,
    velocita_Personaggio: mps
  };


  gui.add(par, "Mostra_Percorso").onChange(function(val) {
    solPath.visible = val;
  });

  var vel = gui.add(par, "velocita_Personaggio").min(1).max(10).step(0.5).listen();
  vel.onChange(function(val){
    mps = val;
  });
}
