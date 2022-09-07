import pygame as pg

class Juego:
    def __init__(self, ancho, alto):
        pg.init()

        self.ventana_ancho = ancho
        self.ventana_alto = alto
        self.tiempo = pg.time.Clock()

        self.ventana = pg.display.set_mode( (self.ventana_ancho, self.ventana_alto) )
        pg.display.set_caption( 'Invasores del Espacio' )

        self.fondo = pg.image.load('./images/background.jpg')

        self.finaliza_juego = False
        while not self.finaliza_juego:
            self.ventana.blit( self.fondo, (0,0) )

            for event in pg.event.get():
                if event.type == pg.QUIT:
                    self.finaliza_juego = True
                
            pg.display.update()
            self.tiempo.tick(60)


if __name__ == "__main__":
    juego = Juego(800, 600)

