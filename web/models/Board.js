class Board {
  el = document.querySelector('main')
  rows = []
  tick = null
  constructor() {
    for(let i = 0; i < CELL_COUNT; i++) {
      const r = new Row(i)
      this.rows.push(r)
      this.el.appendChild(r.el)
    }
  }
  stop() {
    clearInterval(this.tick)
    this.tick = null
  }
  clear() {
    this.rows = []
  }
  start() {
    this.tick = setInterval(() => {
      const updates = this.getCycleBulk()
      for(const c of updates) {
        c.alive = c.nextAlive
        const method = c.alive ? 'add' : 'remove'
        c.el.classList[method]('alive')
        delete c.nextAlive
      }
    }, 0.5 * 1000);
  }
  getCycleBulk() { // calculate updates -> then apply them
    const updates = [] // [Cell, Cell]
    for(const r of this.rows)
    for(const c of r.cells) {
      const aliveNeighbours = this.countAliveNeighbours(c)
      if(aliveNeighbours < 2 || aliveNeighbours > 3) {
        c.nextAlive = false
        updates.push(c)
      } else if(!c.alive && aliveNeighbours == 3) {
        c.nextAlive = true
        updates.push(c) // heros never die!!
      }
    }
    return updates
  }
  countAliveNeighbours(c) {
    let count = 0
    for(const n of c.neighbours) {
      const found = this.rows[n.r] && this.rows[n.r].cells[n.c]
      if(found && found.alive) count++
    }
    return count
  }
}