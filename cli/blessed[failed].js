const blessed = require('blessed')
const Board = require('./models/Cell')

// cant get sizes / shapes right...
const screen = blessed.screen({
  smartCSR: true
})
screen.title = 'Conway the Machine'
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  return process.exit(0)
})
const b1 = blessed.box({
  top: 'center',
  left: 'center',
  parent: screen,
  width: 20,
  height: 9,
  // content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: { type: 'line' },
  style: {
    // fg: 'white',
    // bg: 'magenta',
    border: { fg: 'green' },
    // hover: { bg: 'green' }
  }
})
const b2 = blessed.box({
  top: 'center',
  left: 'center',
  parent: b1,
  width: 20 / 10,
  height: 15 / 10,
  // content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: { type: 'line' },
  style: {
    fg: 'magenta',
    bg: 'magenta',
    border: { fg: 'white' },
    // border: { fg: '#f0f0f0' },
    // hover: { bg: 'green' }
  }
})
screen.render()