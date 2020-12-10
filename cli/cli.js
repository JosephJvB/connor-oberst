const Board = require('./models/Board')

let cellCount = 30
let aliveCount = 300
let tickRate = 1000 * 0.5
const b = new Board(cellCount, aliveCount)

const fn = () => renderBoard(b)
setInterval(fn, tickRate)

function renderBoard(board) {
  board.cycleBulk()
  const str = board.rows.map(r => {
    const rowStr = r.map(c => {
      return c.alive ? '🥺' : '  '
  }).join('')
  const buff = '                                '
  return buff + rowStr
}).join('\n')
  console.clear()
  console.log(str)
}