const { app, BrowserWindow } = require('electron');

let appwpWindows;

function crearVentana() {
    appwpWindows = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minimizable: 600,
        center: true,
        show: false,
        icon: 'icon.png'

    })

    // cuado ceramos la ventana de la aplicacion 
    appwpWindows.on("close", () => {
            appwpWindows = null;
        })
        //   para abrir la ventana de nuevo 
    appwpWindows.once("ready-to-show", () => {
        appwpWindows.show();
    })

    appwpWindows.loadFile("./index.html")
        // appwpWindows.loadURL("https://software-clavellinas.herokuapp.com/")
}

app.on("ready", crearVentana)