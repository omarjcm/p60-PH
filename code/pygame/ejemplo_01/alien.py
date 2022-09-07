import pygame as pg

class Alien:
    def __init__(self, juegos, x, y, tamanio):
        self.juegos = juegos
        self.x = x
        self.y = y
        self.tamanio = tamanio

    def dibujar(self):
        pg.draw.rect(self.juegos.ventana, (210, 250, 251), pg.Rect(self.x, self.y, self.tamanio, self.tamanio))
        self.y += 0.1

    def verificar_colision(self):
        for rayo in self.juegos.rayos:
            if (rayo.x < self.x+self.tamanio and rayo.x > self.x-self.tamanio and
                rayo.y < self.y+self.tamanio and rayo.y > self.y-self.tamanio):
                self.juegos.rayos.remove(rayo)
                self.juegos.aliens.remove(self)

