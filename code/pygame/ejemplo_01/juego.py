import pygame as pg
from nave import Nave

'''
Basado en: https://github.com/janjilecek/pygame-invaders/blob/master/main.py
'''

class Juego:
    def __init__(self, ancho, alto, color):
        self.ancho = ancho
        self.alto = alto
        self.color = color
        self.ventana = pg.display.set_mode( (self.ancho, self.alto) )
        self.reloj = pg.time.Clock()
        self.jugando = False

    def iniciar(self):
        self.nave = Nave(self.ventana, self.ancho/2, self.alto/20)

        while not self.jugando:

            self.teclado = pg.key.get_pressed()

            if self.teclado[pg.K_LEFT]:
                self.nave.x -= 2
            elif self.teclado[pg.K_RIGHT]:
                self.nave.x += 2
            elif self.teclado[pg.K_UP]:
                self.nave.y -= 2
            elif self.teclado[pg.K_DOWN]:
                self.nave.y += 2

            for evento in pg.event.get():
                if evento.type == pg.QUIT:
                    self.jugando = True

            pg.display.flip()
            self.reloj.tick(60)
            self.ventana.fill( self.color )

            self.nave.dibujar()

