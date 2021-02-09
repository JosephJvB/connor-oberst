class Row {
  el = document.createElement('div')
  cells = []
  constructor(rIdx) {
    this.el.className = 'row'
    for(let i = 0; i < CELL_COUNT; i++) {
      const c = new Cell(rIdx, i)
      this.cells.push(c)
      this.el.appendChild(c.el)
    }
  }
}