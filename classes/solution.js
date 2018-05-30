class Solution{

  constructor(image){
    this.image = image;
  }

  createSolution(){
    this.solution = getHeightData(this.image, 1/255);
  }

  drawSolution(height, quote, solP){

    if(this.solution!=null){

      var cubes = new Array();
      var geometry = new THREE.BoxGeometry(1,height,1);
      var material = new THREE.MeshPhongMaterial({color: 0xff0000});

      var dim = this.solution[0].length;

      for (var i = 0; i<dim; i+=1){
        cubes[i] = new Array();
        for (var j = 0; j<dim; j+=1){

          var n = this.solution[i][j];

          if (n == 1){

            cubes[i][j] = new THREE.Mesh( geometry, material);
            cubes[i][j].position.set(i-dim/2,quote+height/2,j-dim/2);

            solP.add(cubes[i][j]);
            scene.add(solP);
          }
        }
      }
    }else{
      console.log("richiamare prima la funzione createSolution");
    }

  }

  getSolution(){
    if(this.solution == null)
      console.log("richiamare prima la funzione createSolution");
    return this.solution;
  }

}
