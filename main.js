const { app, BrowserWindow, Menu } = require('electron');
const path = require("path")

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 800, 
    height: 600,
    icon: path.join(__dirname, 'img/yinyan.png') // Ruta al archivo de ícono
 });

 mainWindow.maximize();

  // Cargar tu archivo HTML o cualquier otra cosa que necesites.
  mainWindow.loadFile('i-ching.html');

  // Crear el menú de la barra de menú
  const menuTemplate = [
    /* {
      label: 'Archivo',
      submenu: [
        { label: 'Nuevo',
            click: () => {
            console.log('hola');
            },
            accelerator: 'CmdOrCtrl+N' // Atajo de teclado para Nuevo
        },
        { label: 'Abrir', click: () => { console.log("Abriendo") } },
        { type: 'separator' },
        { label: 'Salir', role: 'quit' }
      ]
    },
    {
      label: 'Editar',
      submenu: [
        { label: 'Deshacer', role: 'undo' },
        { label: 'Rehacer', role: 'redo' },
        { type: 'separator' },
        { label: 'Cortar', role: 'cut' },
        { label: 'Copiar', role: 'copy' },
        { label: 'Pegar', role: 'paste' },
        { type: 'separator' },
        { label: 'Seleccionar Todo', role: 'selectAll' }
      ]
    }, */
    // Puedes agregar más secciones y opciones según tus necesidades
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

// Otros eventos y lógica de la aplicación...
