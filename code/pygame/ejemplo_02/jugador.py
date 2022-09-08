import pygame as pg

class Nave(pg.sprite.Sprite):
    def __init__(self, juego, x, y):
        pg.sprite.Sprite.__init__(self)
        self.juego = juego

        self.image = pg.image.load('./images/user.png')
        self.rect = self.image.get_rect()
        self.rect.center = [x, y]

    def update(self):
        self.velocidad = 3
        self.teclado = pg.key.get_pressed()

        if self.teclado[pg.K_LEFT] and self.rect.left > 0:
            self.rect.x -= self.velocidad
        if self.teclado[pg.K_RIGHT] and self.rect.right < self.juego.ventana_ancho:
            self.rect.x += self.velocidad


class Rayo(pg.sprite.Sprite):
    def __init__(self, x, y):
        pg.sprite.Sprite.__init__(self)

        self.image = pg.image.load('./images/user_bullet.png')
        self.rect = self.image.get_rect()
        self.rect.center = [x, y]

        self.sonido = pg.mixer.Sound('./sounds/shoot.wav')
        self.sonido.play()
    
    def update(self):
        self.rect.y -= 5
