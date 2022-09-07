import pygame as pg
from nave import Nave
from alien import Alien

'''
Basado en: https://github.com/janjilecek/pygame-invaders/blob/master/main.py
'''

class Juego:
    def __init__(self, ancho, alto, color):
        self.ancho = ancho
        self.alto = alto
        self.color = color

        self.aliens = []
        self.num_aliens_horizontal = 50
        self.num_aliens_vertical = 30

        self.ventana = pg.display.set_mode( (self.ancho, self.alto) )
        self.reloj = pg.time.Clock()
        self.jugando = False

    def iniciar(self):
        self.nave = Nave(self.ventana, self.ancho/2, self.alto-20)
        self.generar_aliens()

        while not self.jugando:

            self.teclado = pg.key.get_pressed()

            if self.teclado[pg.K_LEFT]:
                self.nave.x -= 2
            elif self.teclado[pg.K_RIGHT]:
                self.nave.x += 2

            for evento in pg.event.get():
                if evento.type == pg.QUIT:
                    self.jugando = True

            pg.display.flip()
            self.reloj.tick(60)
            self.ventana.fill( self.color )

            for alien in self.aliens:
                alien.dibujar()

            self.nave.dibujar()


    def generar_aliens(self):
        margen = 20
        tamanio_alien = 20
        for x in range(margen, self.ancho-margen, tamanio_alien+5):
            for y in range(margen, int(self.alto/2), tamanio_alien+5):
                self.aliens.append( Alien(self.ventana, x, y, tamanio_alien) )
