var mySong, mySong2, myImg, myImg2, analyzer;

function preload() {
  mySong = loadSound('assets/sounds/Ryan_Little_-_West_Coast.mp3');
  mySong2 = loadSound('assets/sounds/Big Bomb.mp3');
  myImg = loadImage('assets/images/big_bomb.png');
  myImg2 = loadImage('assets/images/explosion.png');
  myImg3 = loadImage('assets/images/dyna.jpg');

}

function setup() {
  createCanvas(500,500);
  mySong.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mySong);
}

function draw() {
  background(8,152,72);
  
   
  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();

    image(myImg, mouseX, mouseY, 50+rms*300, 50+rms*300);

    if ( mySong2.isPlaying() ) { 
    image(myImg2,-150,-170,1000,1000);
    }

  }

function mousePressed() {
  if ( mySong.isPlaying() ) {
    mySong.stop();
  } else {
    mySong.play();
  }
  if ( mySong.isPlaying() ) { 
    mySong2.stop();
  } else {
    mySong2.play();
   
}
}





