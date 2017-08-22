var sum=0;
var highs=300;
var lows=430;
var count1=0;
var count2=0;
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

	this.speed = Math.floor(Math.random() * (highs - lows + 1) + lows);
	this.x=x;
	this.y=y;
	
    this.sprite = 'images/enemy-bug.png';
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	Enemy.prototype.update = function(dt) {

    if (this.x < 500) {
        this.x += this.speed * dt;

    } else {
        this.x = -100;
        this.speed = Math.floor(Math.random() * (highs - lows + 1) + lows);
    } 
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Player = function(x, y) {
 
    this.sprite = 'images/char-boy.png';
	this.x = x;
    this.y = y;
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.





Player.prototype.update = function() {
    for (var i = 0; i < 3; i++) {
          if ((this.x  > allEnemies[i].x - 67) && (this.x <allEnemies[i].x + 67) && (this.y + 67 > allEnemies[i].y) && (this.y < allEnemies[i].y + 67)) {
            this.reset();
          
            count1 = 0;
            document.getElementById("score").innerHTML = count1;
        }
    }
};

Player.prototype.handleInput = function(key) {
    if (key == 'up') {
        if (this.y > 40)
            this.y -= 100;
        else {
            this.reset();
            count1++;
            document.getElementById("score").innerHTML = count1;
        }
    } else if (key == 'down') {
        if (this.y < 430) {
            this.y += 100;
        } else {
            this.reset();
        }
    } else if (key == 'left') {
        if (this.x > 0)
            this.x -= 100;
    } else if (key == 'right') {
        if (this.x < 400)
            this.x += 100;
    }
};





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

Player.prototype.reset =function(){
	this.x=200;
	this.y=430;
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var allEnemies=[
	new Enemy(0,60),
	new Enemy(0,145),
	new Enemy(0,225)
];
var player=new Player(200,430);
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
