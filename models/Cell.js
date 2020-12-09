class Cell {
  alive = false
  r = 0
  c = 0
  constructor(r, c, alive) {
    this.r = r
    this.c = c
    this.alive = !!alive
  }

  get coord() {
    return `${this.r}-${this.c}`
  }
  get neighbours() {
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