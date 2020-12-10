class Board {
  cellCount = 0
  aliveCount = 0
  rows = []
  constructor(cellCount, aliveCount) {
    this.cellCount = cellCount
    this.aliveCount = aliveCount
    const alive = this.generateAliveCells()
    for(let r = 0; r < this.cellCount; r++) {
      const row = []
      for(let c = 0; c < this.cellCount; c++) {
        const coord = `${r}-${c}`
        const live = alive[coord]
        row.push(new Cell(r, c, live))
      }
      this.rows.push(row)
    }
  }
  cycleBulk() { // calculate updates -> then apply them
    const aliveCoords = {}
    for(const r of this.rows)
    for(const c of r) {
      aliveCoords[c.coord] = c.alive
    }
    const updates = {}
    for(const r of this.rows)
    for(const c of r) {
      const aliveNeighbours = c.neighbours.filter(n => aliveCoords[n]).length
      if(aliveNeighbours < 2 || aliveNeighbours > 3) updates[c.coord] = { alive: false }
      else if(!c.alive && aliveNeighbours == 3) updates[c.coord] = { alive: true } // heros never die!!
    }
    for(const r of this.rows)
    for(const c of r) {
      if(updates[c.coord]) c.alive = updates[c.coord].alive
    }
  }
  cycleOneByOne() { // calculate & apply updates one by one. Previous update will affect the next calculation
    const aliveCoords = {}
    for(const r of this.rows)
    for(const c of r) {
      aliveCoords[c.coord] = c.alive
    }
    for(const r of this.rows)
    for(const c of r) {
      const aliveNeighbours = c.neighbours.filter(n => aliveCoords[n]).length
      if(aliveNeighbours < 2 || aliveNeighbours > 3) c.alive = false
      else if(!c.alive && aliveNeighbours == 3) c.alive = true
    }
  }
  generateAliveCells() {
    const getCoord = () => {
      const r = Math.floor(Math.random() * this.cellCount)
      const c = Math.floor(Math.random() * this.cellCount)
      return `${r}-${c}`
    }
    let count = 0
    const map = {}
    while(count < this.aliveCount) {
      let i = 0
      let c = getCoord()
      while(map[c]) { // if already in map, reroll
        if(i > this.aliveCount * 10) {
          const e = `Failed to generate random live cells, exiting`
          alert(e)
          throw e
        }
        c = getCoord()
        i++
      }
      // add to map
      i = 0
      count++
      map[c] = true
    }
    return map
  }
}