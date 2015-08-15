var app = require('app');
var BrowserWindow = require('browser-window');
var path = require('path');

var mainWindow = null;

var pathToIndex = path.resolve('./client/index.html');

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    resizable: true,
    title: 'Nachos Settings',
    type: 'desktop',
    'web-preferences': {
      'web-security': false
    }
  });
  var packageParam = process.argv[2];

  var path ='file://' + pathToIndex;

  if (packageParam) {
    path += '#package-settings\\' + packageParam;
  }

  // and load the index.html of the app.
  mainWindow.loadUrl(path);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});