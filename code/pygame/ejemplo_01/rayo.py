import pygame as pg

class Rayo:
    def __init__(self, ventana, x, y):
        self.ventana = ventana
        self.x = x
        self.y = y

    def dibujar(self):
        pg.draw.rect(self.ventana, (210, 250, 251), pg.Rect(self.x, self.y, 5, 8))
        self.y -= 2