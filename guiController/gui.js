function createGUI(){

  c = new Array();

  var obj = {
    L0: "Tutte le luci",
    Luci: true,
    L1: "Ingresso e garage",
    Portone: true,
    Garage: false,
    Luce_Ingresso: true,
    Luce_Garage: true,
    Luce_Dirimpetto: true,
    Luce_Garage_Interna: true,
    L2: "Cucina e Salotto",
    Luce_Cucina: true,
    Luce_Salotto: true,
    L3: "Bagno e Camera",
    Luce_Corridoio: true,
    Luce_Bagno: true,
    Luce_Camera: true
  };


  gui.add(obj, "L0");
  lc = gui.add(obj, "Luci").onChange(function(val){
    for(i=0;i<luciCasa.length;i++){
      luciCasa[i].visible = val;
    }
    for(i=0;i<c.length;i++){
      c[i].setValue(val);
    }
  });


  gui.add(obj, "L1");
  c[0] = gui.add(obj, "Luce_Garage").onChange(function(val){
    luciCasa[0].visible = val;
  });

  c[1] = gui.add(obj, "Luce_Ingresso").onChange(function(val){
    luciCasa[3].visible = val;
  });

  c[2] = gui.add(obj, "Luce_Dirimpetto").onChange(function(val){
    luciCasa[2].visible = val;
  });

  c[3] = gui.add(obj, "Luce_Garage_Interna").onChange(function(val){
    luciCasa[1].visible = val;
  });

  gui.add(obj, "L2");
  c[4] = gui.add(obj, "Luce_Cucina").onChange(function(val) {
    luciCasa[4].visible = val;
  });

  c[5] = gui.add(obj, "Luce_Salotto").onChange(function(val) {
    luciCasa[5].visible = val;
  });

  gui.add(obj, "L2");
  c[6] = gui.add(obj, "Luce_Corridoio").onChange(function(val){
    luciCasa[6].visible = val;
  });

  c[7] = gui.add(obj, "Luce_Bagno").onChange(function(val){
    luciCasa[7].visible = val;
  });

  c[8] = gui.add(obj, "Luce_Camera").onChange(function(val) {
    luciCasa[8].visible = val;
  });

}
