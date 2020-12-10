class Cell {
  alive = false
  r = 0
  c = 0
  coord = ''
  neigbours = []
  constructor(r, c, alive) {
    this.r = r
    this.c = c
    this.alive = !!alive
    this.coord = this.getCoord
    this.neighbours = this.getNeighbours
  }
  // only use these once in constructor to avoid repeated function calls (Seems like the right thing to do?)
  get getCoord() {
    return `${this.r}-${this.c}`
  }
  get getNeighbours() {
    return [
      `${this.r}-${this.c + 1}`,
      `${this.r}-${this.c - 1}`,
      `${this.r + 1}-${this.c}`,
      `${this.r + 1}-${this.c + 1}`,
      `${this.r + 1}-${this.c - 1}`,
      `${this.r - 1}-${this.c}`,
      `${this.r - 1}-${this.c + 1}`,
      `${this.r - 1}-${this.c - 1}`,
    ]
  }
}