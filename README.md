# CopyServices Landing Page

Landing page responsive para CopyServices, una papeleria y punto de servicios en Cali. El proyecto usa Node.js, Express y Pug para renderizar la pagina desde datos reutilizables, y tambien puede generar un `index.html` estatico para publicar en hosting simple.

## Tecnologias

- Node.js con Express
- Pug como motor de plantillas
- Datos centralizados en `data/site.js`
- CSS responsive mobile-first
- JavaScript vanilla para el menu movil
- Assets locales en `img/`, `css/` y `js/`

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

## Ejecutar con servidor Node

Para servir la landing con Express y Pug:

```powershell
npm.cmd start
```

Luego abre:

```text
http://localhost:3000
```

El servidor tambien expone los datos principales en:

```text
http://localhost:3000/api/site
```

## Compilar HTML estatico

Para generar o actualizar `index.html` desde `index.pug`:

```powershell
npm.cmd run build
```

Para recompilar automaticamente mientras editas:

```powershell
npm.cmd run watch
```

## Estructura del Proyecto

```text
.
|-- data/
|   `-- site.js        # Servicios, productos, sede, contacto y helpers
|-- docs/
|   `-- presentacion.md
|-- css/
|   `-- styles.css
|-- img/
|   |-- Banner Hero2.png
|   |-- BotonPublicitario.webp
|   |-- PuntoRed.png
|   |-- StreadView.jpg
|   |-- camisetasEstampadas.jpg
|   |-- mugs-personalizado.jpg
|   `-- logos/
|-- js/
|   `-- main.js
|-- build.js          # Compila Pug a HTML estatico
|-- index.html        # HTML generado
|-- index.pug         # Plantilla principal
|-- package.json
`-- server.js         # Servidor Express + Pug
```

## Funcionalidades Actuales

- Header responsive con menu movil.
- Hero visual con banner local de CopyServices.
- Secciones de servicios de papeleria/oficina, tramites y Puntored.
- Productos personalizados: botones, camisetas y mugs.
- Botones de contacto directo por WhatsApp.
- Sede con imagen local y mapa embebido de Google Maps.
- Footer con contacto, redes y enlaces internos.
- API simple de datos del sitio en `/api/site`.

## Flujo de Edicion Recomendado

1. Edita contenido en `data/site.js`.
2. Edita estructura en `index.pug`.
3. Edita estilos en `css/styles.css`.
4. Edita interacciones en `js/main.js`.
5. Prueba con `npm.cmd start`.
6. Si necesitas HTML estatico, ejecuta `npm.cmd run build`.

## Contacto Configurado

```text
Telefono: +57 320 2878530
Correo: copyservices.co@gmail.com
Facebook: https://www.facebook.com/p/Copyservices-100086411343836
WhatsApp: https://wa.me/573202878530
```

## Presentacion

La guia de exposicion de 5 minutos esta en:

```text
docs/presentacion.md
```

Incluye problema, solucion, arquitectura, demo y mejoras futuras.

## Notas Importantes

- No edites `node_modules/`; esa carpeta se ignora con `.gitignore`.
- No edites `index.html` como fuente principal si el cambio debe mantenerse. Edita `data/site.js` o `index.pug` y recompila.
- Las rutas de imagenes estan normalizadas en minuscula con la carpeta `img/` para evitar problemas en Linux o GitHub Pages.
- El mapa usa el `cid` de Google Maps del negocio.

## Problemas Comunes

Si PowerShell muestra un error parecido a que `npm.ps1` esta bloqueado, usa:

```powershell
npm.cmd start
npm.cmd run build
```

Si cambiaste datos o Pug y no ves cambios en el HTML estatico:

```powershell
npm.cmd run build
```

Luego recarga la pestana del navegador con `Ctrl + F5`.
