class Board {
  cellCount = 0
  aliveCount = 0
  cells = {}
  constructor(cellCount, aliveCount) {
    this.cellCount = cellCount
    this.aliveCount = aliveCount
    const alive = this.generateAliveCells()
    for(let r = 0; r < this.cellCount; r++) {
      for(let c = 0; c < this.cellCount; c++) {
        const coord = `${r}-${c}`
        const live = alive.includes(coord)
        this.cells[coord] = new Cell(r, c, live)
      }
    }
  }

  draw() {
    const list = this.cellList
    const aliveCoords = list.filter(c => c.alive).map(c => c.coord)
    for(const c of list) {
      const ref = this.cells[c.coord]
      const aliveNeighbours = ref.neighbours.filter(n => aliveCoords.includes(n)).length
      if(aliveNeighbours < 2 || aliveNeighbours > 3) ref.alive = false
      else if(!ref.alive && aliveNeighbours == 3) ref.alive = true
    }
  }

  get cellList() {
    return Object.keys(this.cells).map(k => this.cells[k])
  }
  generateAliveCells() {
    const list = []
    const getCoord = () => {
      const r = Math.floor(Math.random() * this.cellCount)
      const c = Math.floor(Math.random() * this.cellCount)
      return `${r}-${c}`
    }
    while(list.length < this.aliveCount) {
      let i = 0
      let c = getCoord()
      while(list.includes(c)) {
        if(i > this.aliveCount * 10) {
          const e = `Failed to generate random live cells, exiting`
          alert(e)
          throw e
        }
        c = getCoord()
        i++
      }
      i = 0
      list.push(c)
    }
    return list
  }
}