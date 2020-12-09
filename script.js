const m = document.querySelector('main')
const button = document.querySelector('button')
let cellCount = 30
let aliveCount = 500
let tickRate = 1000 * 0.5
let int = null
let b = new Board(cellCount, aliveCount)
setStyle()

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
    b.draw()
    renderBoard(b)
  }
  fn()
  int = setInterval(fn, tickRate);
}
function renderBoard(board) {
  const currentElements = [
    ...document.querySelectorAll('.cell'),
    ...document.querySelectorAll('.row'),
  ]
  for(const el of currentElements) el.remove()
  const list = board.cellList
  for(let i = 0; i < list.length; i+=cellCount) {
    const row = list.slice(i, i+cellCount)
    const rd = document.createElement('div')
    rd.classList.add('row')
    m.appendChild(rd)
    for(const c of row) {
      const cd = document.createElement('div')
      cd.id = c.coord
      cd.classList.add('cell')
      if(c.alive) cd.classList.add('alive')
      rd.appendChild(cd)
    }
  }
}
function setStyle() {
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
}