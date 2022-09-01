import pygame as pg

class Nave:
    def __init__(self, ventana, x, y):
        self.ventana = ventana
        self.x = x
        self.y = y

    def dibujar(self):
        pg.draw.rect(self.ventana, (210, 250, 251), pg.Rect(self.x, self.y, 15, 10))