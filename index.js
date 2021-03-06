const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win
  
function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  
    // Develop tools
    win.webContents.openDevTools()
  
    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)
  
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
  
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
  })
