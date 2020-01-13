function hero2 () {
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 . 5 . 5 . 5 . 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 8 8 1 1 1 8 8 . . . . . 
. . . . d d d d d d d . . . . . 
. . . . d 8 d d d 8 d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . d d d d d d d . . . . . 
. 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
. 4 4 4 4 8 4 4 4 8 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. d d 4 4 4 4 4 4 4 4 4 d d . . 
. d d 4 4 4 4 4 4 4 4 4 d d . . 
1 9 9 4 4 4 4 4 4 4 4 4 9 9 1 . 
1 1 1 8 8 8 4 4 4 8 8 8 1 1 1 . 
`, SpriteKind.Player)
    hero.setPosition(125, 90)
}
function ball2 () {
    ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 2 2 2 2 2 2 2 2 1 . . . 
. . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
. 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
. 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
. 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
. 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
. 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
. . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
}
function cloud2 () {
    cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . 
. . . . . . . b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . . 
. . . . . c b b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . 
. . . . c b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 b b 1 1 d b . . . . 
. . . c b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 d b . . . 
. . c b b 1 1 1 b b b b b b 1 b b b 1 1 1 1 1 1 1 1 1 d d c . . 
. c b b d 1 1 1 1 1 1 1 1 1 1 b b 1 1 b b b b 1 1 1 1 d d b c . 
c b b b d d 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 d d b b b c 
c b b b d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b c 
c c b b b d d d d b b b 1 1 1 1 1 1 1 1 d b b b b b b b b b c c 
. c c b b b b b b b b b b b b b b d d d b b b b b b b b b c c . 
. . c c c b b b b b b b b b b b b b b b b b b b b b b c c c . . 
. . . . . c c c c c c c c c c c c c c c c c c c c c c . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, 50, 0)
}
function score () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 9 9 9 9 9 9 9 1 1 . . . 
. 1 1 9 9 1 1 1 1 9 9 9 1 1 . . 
. 1 9 1 1 9 9 9 9 1 9 1 9 1 . . 
. 1 9 9 1 9 9 9 9 9 1 1 9 1 . . 
. 1 9 9 9 9 9 9 9 9 9 9 9 1 . . 
. 1 9 9 9 9 9 9 1 1 9 9 9 1 . . 
. 1 9 1 1 9 9 1 9 9 1 9 9 1 . . 
. 1 9 1 9 1 1 9 9 9 1 1 9 1 . . 
. 1 1 9 9 9 9 9 9 9 9 9 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, -100)
    controller.moveSprite(hero)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
function raindrop () {
    Rain = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . 8 8 . . . . . . . . . . . 
. . 8 8 1 8 . . . . . . . . . . 
. . 8 1 8 8 . . . . . . . . . . 
. . 8 8 1 8 . . . . . . . . . . 
. . . 8 8 . . . . . . . . . . . 
. . . . . . . . . 8 8 . . . . . 
. . . . . . . . 8 8 1 8 . . . . 
. . . . . . . . 8 1 8 8 . . . . 
. . 8 8 . . . . 8 8 1 8 . . . . 
. 8 8 1 8 . . . . 8 8 . . . . . 
. 8 1 8 8 . . . . . . . . . . . 
. 8 8 1 8 . . . . . . . . . . . 
. . 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud, 50, 100)
    Rain.x += Math.randomRange(0, 10)
    Rain.y += 3
}
let Rain: Sprite = null
let projectile: Sprite = null
let cloud: Sprite = null
let ball: Sprite = null
let hero: Sprite = null
hero()
cloud()
raindrop()
game.onUpdateInterval(500, function () {
    raindrop()
})
