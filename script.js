const m = document.querySelector('main')
const button = document.querySelector('button')
let cellCount = 30
let aliveCount = 300
let tickRate = 1000 * 0.5
let int = null
let b = new Board(cellCount, aliveCount)
let cellElements = {}
initDOM(b)

function toggle() {
  if(int) {
    console.log('stop')
    button.textContent = 'start'
    clearInterval(int)
    int = null
  } else {
    console.log('start')
    button.textContent = 'stop'
    tick()
  }
}
function tick() {
  const fn = () => {
    console.log('tick')
    b.cycle()
    renderBoard(b)
  }
  fn()
  int = setInterval(fn, tickRate);
}
function renderBoard(board) {
  for(const r of board.rows)
  for(const c of r) {
    const el = cellElements[c.coord]
    const domAlive = el.classList.contains('alive')
    if(domAlive != c.alive) {
      const method = domAlive ? 'remove' : 'add'
      el.classList[method]('alive')
    }
  }
}
function initDOM(board) {
  // style tag
  const s = document.createElement('style')
  const text = [
    `.cell {`,
    `width: ${Number(m.clientWidth) / cellCount}px;`,
    `height: ${Number(m.clientHeight) / cellCount}px;`,
    `}`
  ].join('\n')
  const t = document.createTextNode(text)
  s.appendChild(t)
  document.head.appendChild(s)
  // board elements
  for(const r of board.rows) {
    const row = document.createElement('div')
    row.classList.add('row')
    m.appendChild(row)
    for(const c of r) {
      const cell = document.createElement('div')
      cell.id = c.coord
      cell.classList.add('cell')
      row.appendChild(cell)
      cellElements[cell.id] = cell
    }
  }
}