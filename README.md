# CopyServices Landing Page

Landing page responsive para CopyServices, una papeleria/imprenta en Cali. El proyecto usa Pug como fuente principal de HTML, CSS propio y JavaScript ligero para interacciones del sitio.

## Tecnologias

- HTML generado desde Pug
- CSS mobile-first
- JavaScript vanilla
- Node.js para compilar
- Simple Icons por CDN para iconos de redes sociales

## Requisitos

Instala Node.js antes de trabajar con el proyecto:

```powershell
node --version
npm --version
```

Si los comandos responden con una version, puedes continuar.

## Instalacion

Desde la carpeta del proyecto:

```powershell
npm.cmd install
```

En PowerShell se recomienda usar `npm.cmd` porque algunos equipos bloquean `npm.ps1` por politicas de ejecucion.

## Ejecutar o Probar la Pagina

La pagina es estatica. Para verla en el navegador:

```powershell
start index.html
```

Tambien puedes abrir manualmente el archivo `index.html` desde el explorador de Windows.

## Compilar Pug

El archivo fuente principal es:

```text
index.pug
```

Cada vez que edites `index.pug`, recompila:

```powershell
npm.cmd run build
```

Ese comando genera/actualiza:

```text
index.html
```

## Modo Watch

Para recompilar automaticamente cuando cambie `index.pug`:

```powershell
npm.cmd run watch
```

Deja esa terminal abierta mientras editas. Luego recarga el navegador.

## Estructura del Proyecto

```text
.
├── index.pug          # Fuente principal de la pagina
├── index.html         # HTML compilado para abrir en navegador
├── build.js           # Script de compilacion Pug -> HTML
├── package.json       # Scripts y dependencias
├── css/
│   └── styles.css     # Estilos responsive mobile-first
├── js/
│   └── main.js        # Interacciones: menu movil, carrusel, toast
├── img/
│   ├── StreadView.jpg # Imagen usada en la tarjeta de sede
│   └── logos/         # Logos e icono de pagina
├── Desktop.png        # Mockup de referencia desktop
└── mobile.png         # Mockup de referencia mobile
```

## Flujo de Edicion Recomendado

1. Edita contenido y estructura en `index.pug`.
2. Edita estilos en `css/styles.css`.
3. Edita interacciones en `js/main.js`.
4. Ejecuta:

```powershell
npm.cmd run build
```

5. Abre o recarga `index.html` en el navegador.

## Funcionalidades Actuales

- Header responsive con menu movil.
- Hero visual inspirado en los mockups.
- Tarjetas de servicios.
- Carrusel interactivo de otros servicios.
- Seccion de sede con imagen local y mapa embebido de Google Maps.
- Boton flotante de WhatsApp conectado a `+57 320 2878530`.
- Footer con datos de contacto y redes.

## Contacto Configurado

```text
Telefono: +57 320 2878530
Correo: copyservices.co@gmail.com
Facebook: https://www.facebook.com/p/Copyservices-100086411343836
WhatsApp: https://wa.me/573202878530
```

## Notas Importantes

- No edites `node_modules/`; esa carpeta se ignora con `.gitignore`.
- No edites `index.html` como fuente principal si el cambio debe mantenerse. Edita `index.pug` y recompila.
- El mapa usa el `cid` de Google Maps del negocio.
- El proyecto no tiene backend ni envio de formularios.

## Problemas Comunes

Si PowerShell muestra un error parecido a que `npm.ps1` esta bloqueado, usa:

```powershell
npm.cmd run build
```

Si cambiaste `index.pug` y no ves cambios en el navegador:

```powershell
npm.cmd run build
start index.html
```

Luego recarga la pestana del navegador con `Ctrl + F5`.
