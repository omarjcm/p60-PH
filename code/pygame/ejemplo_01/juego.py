import pygame as pg
from rayo import Rayo
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
        self.margen = 20

        self.rayos = []

        self.aliens = []
        self.num_aliens_horizontal = 50
        self.num_aliens_vertical = 30

        self.perdiste = False

        self.ventana = pg.display.set_mode( (self.ancho, self.alto) )
        self.reloj = pg.time.Clock()
        self.jugando = False

    def iniciar(self):
        self.nave = Nave(self.ventana, self.ancho/2, self.alto-20)
        self.generar_aliens()

        while not self.jugando:
            if len(self.aliens) == 0:
                self.mostrar_mensaje('Ganaste!')
                
            self.teclado = pg.key.get_pressed()

            if self.teclado[pg.K_LEFT]:
                self.nave.x -= 2 if self.nave.x > self.margen else 0
            elif self.teclado[pg.K_RIGHT]:
                self.nave.x += 2 if self.nave.x < (self.ancho - self.margen) else 0

            for evento in pg.event.get():
                if evento.type == pg.QUIT:
                    self.jugando = True
                if evento.type == pg.KEYDOWN and evento.key == pg.K_SPACE:
                    if not self.perdiste:
                        self.rayos.append( Rayo(self.ventana, self.nave.x, self.nave.y) )

            pg.display.flip()
            self.reloj.tick(60)
            self.ventana.fill( self.color )

            for rayo in self.rayos:
                rayo.dibujar()

            for alien in self.aliens:
                alien.dibujar()
                alien.verificar_colision()

                if alien.y > self.alto-self.margen:
                    self.perdiste = True
                    self.mostrar_mensaje('Perdiste!')

            if not self.perdiste:
                self.nave.dibujar()


    def mostrar_mensaje(self, mensaje):
        pg.font.init()
        fuente = pg.font.SysFont('Arial', 50)
        texto = fuente.render(mensaje, False, (250, 250, 250))
        self.ventana.blit(texto, (110, 160))

    def generar_aliens(self):
        tamanio_alien = 20
        for x in range(self.margen, self.ancho-self.margen, tamanio_alien+5):
            for y in range(self.margen, int(self.alto/2), tamanio_alien+5):
                self.aliens.append( Alien(self, x, y, tamanio_alien) )
