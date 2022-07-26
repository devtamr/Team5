//this is alll for movement // willmhave to change variable names to match sprites 
class Example extends Phaser.Scene { constructor () { super(); }



class()


preload () 
{
    
}

create () 
{
    this.cameras.main.setBounds(0, 0, 1024, 2048);

    this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.image(400.5, 301.3, 'player');
    // player = this.add.image(400.5, 301.3, 'player');

    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    // this.cameras.main.roundPixels = true;

    this.cameras.main.setZoom(4);
}

updateDirect ()
{
    if (this.cursors.left.isDown)
    {
        //have the sprite play its down animation
        this.player.x -= 2.5;
    }
    else if (this.cursors.right.isDown)
    {
        
        this.player.x += 2.5;
    }

    if (this.cursors.up.isDown)
    {
        
        this.player.y -= 2.5;
    }
    else if (this.cursors.down.isDown)
    {
        
        this.player.y += 2.5;
    }
}

update () 
{
    this.player.setVelocity(0);

    if (this.cursors.left.isDown)
    {
        this.player.setAngle(-90).setVelocityX(-200);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setAngle(90).setVelocityX(200);
    }

    if (this.cursors.up.isDown)
    {
        this.player.setAngle(0).setVelocityY(-200);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setAngle(-180).setVelocityY(200);
    }
this.player.setGravityY(500)  //will change depending on map layout
}

}