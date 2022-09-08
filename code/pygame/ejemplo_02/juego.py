import pygame as pg
from jugador import Nave, Rayo

class Juego:
    def __init__(self, ancho, alto):
        pg.init()

        self.rayos = []

        self.ventana_ancho = ancho
        self.ventana_alto = alto
        self.tiempo = pg.time.Clock()

        self.ventana = pg.display.set_mode( (self.ventana_ancho, self.ventana_alto) )
        pg.display.set_caption( 'Invasores del Espacio' )

        self.fondo = pg.image.load('./images/background.jpg')

        self.jugador_grupo = pg.sprite.Group()
        self.jugador = Nave(self, int(self.ventana_ancho/2), self.ventana_alto-100)
        self.jugador_grupo.add( self.jugador )

        self.rayos = pg.sprite.Group()

        self.finaliza_juego = False
        while not self.finaliza_juego:
            self.ventana.blit( self.fondo, (0,0) )

            self.jugador.update()
            self.rayos.update()

            self.jugador_grupo.draw( self.ventana )
            self.rayos.draw( self.ventana )

            for event in pg.event.get():
                if event.type == pg.QUIT:
                    self.finaliza_juego = True
                if event.type == pg.KEYDOWN and event.key == pg.K_SPACE:
                    rayo = Rayo(self.jugador.rect.centerx, self.jugador.rect.top)
                    self.rayos.add( rayo )
               
            pg.display.update()
            self.tiempo.tick(60)


if __name__ == "__main__":
    juego = Juego(800, 600)

