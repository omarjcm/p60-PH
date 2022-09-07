import pygame as pg

class Alien:
    def __init__(self, ventana, x, y, tamanio):
        self.ventana = ventana
        self.x = x
        self.y = y
        self.tamanio = tamanio

    def dibujar(self):
        pg.draw.rect(self.ventana, (210, 250, 251), pg.Rect(self.x, self.y, self.tamanio, self.tamanio))
        self.y += 0.05