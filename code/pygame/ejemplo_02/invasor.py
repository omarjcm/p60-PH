import pygame as pg

class Invasor(pg.sprite.Sprite):
    def __init__(self, juego, x, y):
        pg.sprite.Sprite.__init__(self)
        self.juego = juego

        self.image = pg.image.load('./images/spaceInvaders.png')
        self.rect = self.image.get_rect()
        self.rect.center = [x, y]

        self.direccion_mov = 1
        self.contador = 0

    def update(self):
        self.rect.x = self.direccion_mov
        self.contador += 1
        
