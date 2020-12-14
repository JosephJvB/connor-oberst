const Board = require('./models/Board')

let cellCount = 30
let aliveCount = 100
let tickRate = 1000 * 0.5
const b = new Board(cellCount, aliveCount)

const fn = () => renderBoard(b)
setInterval(fn, tickRate)

function renderBoard(board) {
  const updates = board.getCycleBulk()
  const rows = []
  for(const r of board.rows) {
    let row = '                                '
    for(const c of r) {
      if(updates[c.coord]) c.alive = updates[c.coord].alive
      row += c.alive ? '🥺' : '  '
    }
    rows.push(row)
  }
  console.clear()
  console.log(rows.join('\n'))
}