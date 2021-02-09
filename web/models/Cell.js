class Cell {
  el = document.createElement('div')
  r = 0
  c = 0
  alive = false
  neighbours = []
  nextAlive = null
  constructor(r, c) {
    this.el.className = 'cell'
    this.r = r
    this.c = c
    this.alive = Math.random() < 0.15
    this.neighbours = [
      { r: this.r, c: this.c + 1},
      { r: this.r, c: this.c - 1},
      { r: this.r + 1, c: this.c},
      { r: this.r + 1, c: this.c + 1},
      { r: this.r + 1, c: this.c - 1},
      { r: this.r - 1, c: this.c},
      { r: this.r - 1, c: this.c + 1},
      { r: this.r - 1, c: this.c - 1},
    ]
  }
}