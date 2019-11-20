var Colors = {
	red:0xf25346,
	white:0xd8d0d1,
	brown:0x59332e,
	pink:0xF5986E,
	brownDark:0x23190f,
	blue:0x68c3c0,
};

var scene,
		camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
        renderer, container, frame;

function createScene() {
	// Get the width and the height of the screen,
	// use them to set up the aspect ratio of the camera 
	// and the size of the renderer.
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;

	// Create the scene
    scene = new THREE.Scene();
	// scene.background = new THREE.Color( 0xf7d9aa);
	scene.background = new THREE.Texture( generateTexture() );

	// Add a fog effect to the scene; same color as the
	// background color used in the style sheet
	scene.fog = new THREE.Fog(0x69DDFF, 100, 950);
	
	// Create the camera
	aspectRatio = WIDTH / HEIGHT;
	fieldOfView = 60;
	nearPlane = 1;
	farPlane = 10000;
	camera = new THREE.PerspectiveCamera(
		fieldOfView,
		aspectRatio,
		nearPlane,
		farPlane
		);
	
	// Set the position of the camera
	camera.position.x = 0;
	camera.position.z = 200;
	camera.position.y = 100;
	
	// Create the renderer
	renderer = new THREE.WebGLRenderer({ 
		// Allow transparency to show the gradient background
		// we defined in the CSS
		alpha: true, 

		// Activate the anti-aliasing; this is less performant,
		// but, as our project is low-poly based, it should be fine :)
		antialias: true 
	});

	// Define the size of the renderer; in this case,
	// it will fill the entire screen
	renderer.setSize(WIDTH, HEIGHT);
	
	// Enable shadow rendering
	renderer.shadowMap.enabled = true;
	
	// Add the DOM element of the renderer to the 
    // container we created in the HTML
	container = document.getElementById('world-barba');
	container.appendChild(renderer.domElement);
	
	// Listen to the screen: if the user resizes it
	// we have to update the camera and the renderer size
	window.addEventListener('resize', handleWindowResize, false);
}

function handleWindowResize() {
	// update height and width of the renderer and the camera
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
}

function generateTexture() {

	var size = 512;

	// create canvas
	canvas = document.createElement( 'canvas' );
	canvas.width = size;
	canvas.height = size;

	// get context
	var context = canvas.getContext( '2d' );

	// draw gradient
	context.rect( 0, 0, size, size );
	var gradient = context.createLinearGradient( 0, 0, size, size );
	gradient.addColorStop(0, '#99ddff'); // light blue 
	gradient.addColorStop(1, '#ffff00'); // dark blue
	context.fillStyle = gradient;
	context.fill();

	return canvas;

}

var hemisphereLight, shadowLight, ambientLight;

function createLights() {
	// A hemisphere light is a gradient colored light; 
	// the first parameter is the sky color, the second parameter is the ground color, 
	// the third parameter is the intensity of the light
	hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
	
	// A directional light shines from a specific direction. 
	// It acts like the sun, that means that all the rays produced are parallel. 
	shadowLight = new THREE.DirectionalLight(0xffffff, .9);

	// Set the direction of the light  
	shadowLight.position.set(150, 350, 350);
	
	// Allow shadow casting 
	shadowLight.castShadow = true;

	// define the visible area of the projected shadow
	shadowLight.shadow.camera.left = -400;
	shadowLight.shadow.camera.right = 400;
	shadowLight.shadow.camera.top = 400;
	shadowLight.shadow.camera.bottom = -400;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;

	// define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performant
	shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;
    

    // an ambient light modifies the global color of a scene and makes the shadows softer
    ambientLight = new THREE.AmbientLight(0xdc8874, .5);
    scene.add(ambientLight);
	
	// to activate the lights, just add them to the scene
	scene.add(hemisphereLight);  
	scene.add(shadowLight);
}

Sea = function(){
	var geom = new THREE.CylinderGeometry(600,600,800,40,10);
	geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

	// important: by merging vertices we ensure the continuity of the waves
	geom.mergeVertices();

	// get the vertices
	var l = geom.vertices.length;

	// create an array to store new data associated to each vertex
	this.waves = [];

	for (var i=0; i<l; i++){
		// get each vertex
		var v = geom.vertices[i];

		// store some data associated to it
		this.waves.push({y:v.y,
            x:v.x,
            z:v.z,
            // a random angle
            ang:Math.random()*Math.PI*2,
            // a random distance
            amp:5 + Math.random()*15,
            // a random speed between 0.016 and 0.048 radians / frame
            speed:0.016 + Math.random()*0.032
        });
	};
	var mat = new THREE.MeshPhongMaterial({
		color: new THREE.Color( 0x96CDFF ),
		transparent: true,
		opacity: .8,
		FlatShading: true,
	});

	this.mesh = new THREE.Mesh(geom, mat);
	this.mesh.receiveShadow = true;

}

// now we create the function that will be called in each frame 
// to update the position of the vertices to simulate the waves

Sea.prototype.moveWaves = function (){
	
	// get the vertices
	var verts = this.mesh.geometry.vertices;
	var l = verts.length;
	
	for (var i=0; i<l; i++){
		var v = verts[i];
		
		// get the data associated to it
		var vprops = this.waves[i];
		
		// update the position of the vertex
		v.x = vprops.x + Math.cos(vprops.ang)*vprops.amp;
		v.y = vprops.y + Math.sin(vprops.ang)*vprops.amp;

		// increment the angle for the next frame
		vprops.ang += vprops.speed;

	}

	// Tell the renderer that the geometry of the sea has changed.
	// In fact, in order to maintain the best level of performance, 
	// three.js caches the geometries and ignores any changes
	// unless we add this line
	this.mesh.geometry.verticesNeedUpdate=true;

	sea.mesh.rotation.z += .005;
}

// Instantiate the sea and add it to the scene:

var sea;

function createSea(){
	sea = new Sea();

	// push it a little bit at the bottom of the scene
	sea.mesh.position.y = -1000;

	// add the mesh of the sea to the scene
	scene.add(sea.mesh);
}

function updateSea() {
    if (sea.mesh.position.y < -600) {
        sea.mesh.position.y++;
    }
}

var BackgroundBalloons = function() {
        
    this.mesh = new THREE.Object3D();

    // create the mesh by cloning the geometry
    var balloon = new Balloon; 
    var m = balloon.mesh;
    
    // set the position and the rotation of each cube randomly
    m.position.x = 0;
    m.position.y = Math.random()*10;
    m.position.z = Math.random()*10;

    // set the size of the cube randomly
    var s = .1 + Math.random()*.3;
    m.scale.set(s,s,s);
    
    // allow each cube to cast and to receive shadows
    m.castShadow = true;
    m.receiveShadow = true;
    
    // add the cube to the container we first created
    this.mesh.add(m);
}

Cloud = function(){
	// Create an empty container that will hold the different parts of the cloud
	this.mesh = new THREE.Object3D();
	
	// create a cube geometry;
	// this shape will be duplicated to create the cloud
	var geom = new THREE.BoxGeometry(20,20,20);
	
	// create a material; a simple white material will do the trick
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.white,  
	});
	
	// duplicate the geometry a random number of times
	var nBlocs = 3+Math.floor(Math.random()*3);
	for (var i=0; i<nBlocs; i++ ){
		
		// create the mesh by cloning the geometry
		var m = new THREE.Mesh(geom, mat); 
		
		// set the position and the rotation of each cube randomly
		m.position.x = i*15;
		m.position.y = Math.random()*10;
		m.position.z = Math.random()*10;
		m.rotation.z = Math.random()*Math.PI*2;
		m.rotation.y = Math.random()*Math.PI*2;
		
		// set the size of the cube randomly
		var s = .1 + Math.random()*.9;
		m.scale.set(s,s,s);
		
		// allow each cube to cast and to receive shadows
		m.castShadow = true;
		m.receiveShadow = true;
		
		// add the cube to the container we first created
		this.mesh.add(m);
	} 
}

// Define a Sky Object
Sky = function(){
	// Create an empty container
	this.mesh = new THREE.Object3D();
	
	// choose a number of clouds to be scattered in the sky
	this.nClouds = 20;
	
	// To distribute the clouds consistently,
	// we need to place them according to a uniform angle
	var stepAngle = Math.PI*2 / this.nClouds;
	
	// create the clouds
	for(var i=0; i<this.nClouds; i++){
        var c = new Cloud();
        var b = new BackgroundBalloons();
	 
		// set the rotation and the position of each cloud;
		// for that we use a bit of trigonometry
		var a = stepAngle*i; // this is the final angle of the cloud
		var h = 750 + Math.random()*200; // this is the distance between the center of the axis and the cloud itself

		// Trigonometry!!! I hope you remember what you've learned in Math :)
		// in case you don't: 
		// we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
		c.mesh.position.y = Math.sin(a)*h;
        c.mesh.position.x = Math.cos(a)*h;
        
        b.mesh.position.y = Math.sin(a)*h;
        b.mesh.position.x = Math.cos(a)*h;

		// rotate the cloud according to its position
        c.mesh.rotation.z = a + Math.PI/2;
        b.mesh.rotation.z = a - Math.PI/2;

		// for a better result, we position the clouds 
		// at random depths inside of the scene
        c.mesh.position.z = -400-Math.random()*400;
        b.mesh.position.z = -400-Math.random()*1400;
		
		// we also set a random scale for each cloud
		var s = 1+Math.random()*2;
        c.mesh.scale.set(s,s,s);
        b.mesh.scale.set(s,s,s);

		// do not forget to add the mesh of each cloud in the scene
        this.mesh.add(c.mesh);
        this.mesh.add(b.mesh);    
	}  
}

// Now we instantiate the sky and push its center a bit
// towards the bottom of the screen

var sky;

function createSky(){
	sky = new Sky();
	sky.mesh.position.y = -1000;
	scene.add(sky.mesh);
}

function updateClouds() {
    if (sky.mesh.position.y < -600) {
        sky.mesh.position.y++;
    }
}

var Balloon = function() {

	this.mesh = new THREE.Object3D();
    var geometry = new THREE.SphereGeometry( 50, 12, 12 );
    var material = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var sphere = new THREE.Mesh( geometry, material );
    this.mesh.add( sphere );

    var points = [];
    for ( var i = 0; i < 10; i ++ ) {
        points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 44 + 5, ( i + 4 ) * 8 - 100 ) );
    }
    var latheGeometry = new THREE.LatheGeometry( points );
    var latheMaterial = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var lathe = new THREE.Mesh( latheGeometry, latheMaterial );
    this.mesh.add( lathe );

    var cubeGeometry = new THREE.BoxGeometry( 12, 12, 12 );
    var cubeMaterial = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    cube.position.set(0, -80, 0);
    this.mesh.add( cube );
};

var airplane, balloon;
var airplaneFirstPosition = -500, airplaneLastPosition = 0;

var mousePos={x:0, y:0};

// now handle the mousemove event

function handleMouseMove(event) {

	// here we are converting the mouse position value received 
	// to a normalized value varying between -1 and 1;
	// this is the formula for the horizontal axis:
	
	var tx = -1 + (event.clientX / WIDTH)*2;

	// for the vertical axis, we need to inverse the formula 
	// because the 2D y-axis goes the opposite direction of the 3D y-axis
	
	var ty = 1 - (event.clientY / HEIGHT)*2;
	mousePos = {x:tx, y:ty};

}

function normalize(v,vmin,vmax,tmin, tmax){
	var nv = Math.max(Math.min(v,vmax), vmin);
	var dv = vmax-vmin;
	var pc = (nv-vmin)/dv;
	var dt = tmax-tmin;
	var tv = tmin + (pc*dt);
	return tv;
}

function createBalloon() {
    balloon = new Balloon();
    balloon.mesh.scale.set(.35,.35,.35);
    balloon.mesh.position.y = 100;
    scene.add(balloon.mesh);
}

function updateBalloon() {
    var targetY = normalize(mousePos.y,-.75,.75,25, 175);
	var targetX = normalize(mousePos.x,-.75,.75,-100, 100);
	
	// Move the plane at each frame by adding a fraction of the remaining distance
	balloon.mesh.position.y += (targetY-balloon.mesh.position.y)*0.01;
    balloon.mesh.position.x += (targetX-balloon.mesh.position.x)*0.01;
}

function loopB(){
	    sea.mesh.rotation.z += .001;
        sky.mesh.rotation.z += .001;
    
        // update the plane on each frame
        // updatePlane();
        updateBalloon();
        updateSea();
        updateClouds();
        sea.moveWaves();
	//}
	// console.log("loop");

	// render the scene
	renderer.render(scene, camera);

	// call the loop function again
	requestAnimationFrame(loopB);
}

function initb() {
	// set up the scene, the camera and the renderer
	createScene();

	// add the lights
    createLights();
    
    frame = 1;

    if (frame == 1) {
        createBalloon();
        createSea();
        createSky();
        sea.moveWaves();
    }

    document.addEventListener('mousemove', handleMouseMove, false);
	// start a loop that will update the objects' positions 
	// and render the scene on each frame
	loopB();
}

$('document').ready(function(){
    initb();
  });