sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemigo.say(":(", 500)
    Sprite_2.setKind(mySprite.kind())
})
let Sprite_2: Sprite = null
let Enemigo: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a 1 1 1 a a a 1 1 1 a a a a 
    a a a 1 1 1 a a a 1 1 1 a a a a 
    a a a f 1 1 a a a f 1 1 a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a 2 2 2 2 2 a a a a a a a 
    a a a a 2 2 2 2 2 a a a a a a a 
    a a a a 2 2 2 2 2 a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
Enemigo = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 5 5 5 1 1 1 5 5 5 1 1 1 1 
    1 1 1 5 5 5 1 1 1 5 5 5 1 1 1 1 
    1 1 1 f 5 5 1 1 1 f 5 5 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 4 4 4 4 1 1 1 1 1 1 1 
    1 1 1 1 1 4 4 4 4 1 1 1 1 1 1 1 
    1 1 1 1 1 4 4 4 4 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Enemy)
Sprite_2 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 1 1 1 3 3 3 1 1 1 3 3 3 3 
    3 3 3 1 1 1 3 3 3 1 1 1 3 3 3 3 
    3 3 3 f 1 1 3 3 3 f 1 1 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 3 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Enemy)
Enemigo.setPosition(15, 15)
Sprite_2.setPosition(125, 25)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
