class Maze{

  constructor(imgSRC, h){

    var img = new Image();

    //cubi che compongono le pareti del labirinto
    var minGeom = new THREE.BoxGeometry(1,h,1);

    this.maze = new THREE.Object3D();

    img.maze = this.maze;

    img.onload = function () {
      //get height data from img

      var heights = getHeightData(img,1/255,false); //valori tra 0 e 1

      var cubes = new Array();

      var dim = heights[0].length;

      var q = 1;

      var geometry = new THREE.BoxGeometry(q,h,q);
      var tBush = new THREE.TextureLoader().load('textures/bush.jpg');
      var mBush = new THREE.MeshPhongMaterial({map: tBush});

      for (var i = 0; i<dim; i+=q){
        cubes[i] = new Array();
        for (var j = 0; j<dim; j+=q){

          var n = heights[i][j];

          if (n > 0){

            cubes[i][j] = new THREE.Mesh( geometry, mBush);
            cubes[i][j].castShadow = true;
            cubes[i][j].receiveShadow = true;
            cubes[i][j].position.set(i-dim/2,h/2,j-dim/2);

            img.maze.add(cubes[i][j]);
          }

        }
      }

    }

    img.src = imgSRC;
  }


  getMaze(obj){
    return this.maze;
  }

}
