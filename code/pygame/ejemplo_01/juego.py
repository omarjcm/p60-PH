import pygame as pg

class Juego:
    def __init__(self, ancho, alto, color):
        self.ancho = ancho
        self.alto = alto
        self.color = color
        self.ventana = pg.display.set_mode( (self.ancho, self.alto) )
        self.reloj = pg.time.Clock()
        self.jugando = False

    def iniciar(self):
        while not self.jugando:
            for evento in pg.event.get():
                if evento.type == pg.QUIT:
                    self.jugando = True

            pg.display.flip()
            self.reloj.tick(60)
            self.ventana.fill( self.color )
