function loadMaze(imgSRC, h){

  var maze = new THREE.Object3D();

  var img = new Image();

  //cubi che compongono le pareti del labirinto
  var minGeom = new THREE.BoxGeometry(1,1,1);
  var minText = new THREE.TextureLoader('textures/minotur')

  img.onload = function () {

    //get height data from img
    var data = getHeightData(img,0.05);

    console.log(data);

    maxH = parseInt(Math.max(...data));

    var cubes = new Array();

    var dim = parseInt(Math.sqrt(data.length));

    heights = arrayToMatrix(data,dim);

    var q = 1;

    var geometry = new THREE.BoxGeometry(q,q,q);
    var tBush = THREE.ImageUtils.loadTexture('textures/bushP.jpg');
    var mBush = new THREE.MeshPhongMaterial({map: tBush});

    var material = mBush;

    for (i = 0; i<dim; i+=q){
      cubes[i] = new Array();
      for (j = 0; j<dim; j+=q){
        cubes[i][j] = new Array();

        n = norm(heights[i][j]); //0 se valore 0 altrimenti 1

        for (k = 0; k < n*h ; k++){

          cubes[i][j][k] = new THREE.Mesh( geometry, material);
          cubes[i][j][k].position.set(i,k,j);

          maze.add(cubes[i][j][k]);

          maze.position.set(-dim/2,0,-dim/2);
        }
      }
    }
  }

  img.src = imgSRC;

  scene.add(maze)
}
