class Food {
	
	private PVector location;
	private PVector velocity;
	
	private int age;
	private int ageSpan;
	private int color;
	private int[] colours = new int();
	
	private int numSides	= 8;
	private float[][] verts = new float[numSides][2];
	
	private boolean isDead;
	private boolean isDummy;

	//constructor used to create your personal local food
	public Food(PVector location) {
		velocity 	= new PVector( random( -.5, .5 ), random( -.5, .5 ) );
		
		age 		= 0;
		
		colors 		= [#C96164, #E8C64D, #9EB53F, #5D966C];
		int c 		= int(random( 4 ));

		createFood(location, colors[c], false);
	}

    private void createFood(PVector location, int color, boolean isDead) {
		this.location 	= location;
		ageSpan 	= 300; //random( 100, 200 );
		this.color = color;
		this.isDead = isDead;
		this.isDummy = false;

		float k = TWO_PI / (float) numSides;
		for ( int i = 0; i < numSides; i++ ) {
			verts[i][0] = cos( k * i ) * random( 3, 15 );
			verts[i][1] = sin( k * i ) * random( 3, 15 );
		}
    }
	
	public void update() {
		location.add( velocity );
		
		age++;
		if ( age >= ageSpan  ) {
			isDead = true;
		}
	}
		
	public void render() {
		noStroke();
		fill( color );
		pushMatrix();
		translate( location.x, location.y );
		scale(1 - age / ageSpan);
		beginShape( TRIANGLE_FAN );
		for ( int i = 0; i < numSides; i++ ) {
			vertex( verts[i][0], verts[i][1] );
		}
		endShape();
		popMatrix();
	}

	public boolean getIsDead() {
		return isDead;
	}

	public void setIsDead(boolean isDead) {
		this.isDead = isDead;
	}

	public PVector getVelocity() {
		return velocity;
	}

	public PVector getLocation() {
		return location;
	}

	public void setLocation(PVector location){
		this.location = location;
	}

	public int getColor() {
		return this.color;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setIsDummy(boolean isDummy) {
		this.isDummy = isDummy;
	}

	public boolean getIsDummy() {
		return this.isDummy;
	}
}