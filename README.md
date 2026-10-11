# Portafolio — Andrés Laguna

Desarrollador de software · Flutter (escritorio y móvil) · Go · Firebase

Capturas y descripciones de aplicaciones que desarrollé. El código fuente es
propiedad de los clientes o es privado, por lo que aquí se publican pantallas y
notas técnicas en lugar de código.

## Infinity — Sistema de gestión (escritorio)

Aplicación de escritorio en Flutter para la operación de una comercializadora
de metales preciosos: registro de compras, bodega, lingoteo, contabilidad,
moviliario, vehículos, rutas, despachos, sucursales, colaboradores, usuarios y
reportes.

**Stack:** Flutter · GetX · Syncfusion Charts y fl_chart · impresión de PDF ·
cámara para captura de documentos · API REST · sesión con número de documento.

<p>
  <img src="capturas/infinity-escritorio/02-menu.png" width="620" alt="Panel principal">
</p>

<p>
  <img src="capturas/infinity-escritorio/01-login.png" width="380" alt="Inicio de sesión">
  <img src="capturas/infinity-escritorio/03-compra.png" width="380" alt="Registro de compra">
</p>

<p>
  <img src="capturas/infinity-escritorio/04-lingoteo.png" width="380" alt="Registro de lingotes">
  <img src="capturas/infinity-escritorio/05-contabilidad.png" width="380" alt="Contabilidad">
</p>

## PriceLock — App móvil + API

Aplicación móvil para operadores: precio por gramo en vivo por metal (oro,
plata, platino, paladio y rodio), anuncios de compra/venta, disponibilidad
horaria, usuarios y grupos de precios, y registro de compras con cálculo
automático del total a partir de ley, finos y gramos brutos.

El backend es propio, escrito en Go: API REST, autenticación, tareas
programadas (actualización de precios y moderación) y notificaciones push.

**Stack:** Flutter (GetX, fl_chart) · Firebase (mensajería y notificaciones) ·
Go (Echo, GORM/SQLite, JWT, cron).

<p>
  <img src="capturas/pricelock/01-precios.png" width="225" alt="Precio por gramo en vivo">
  <img src="capturas/pricelock/02-metales.png" width="225" alt="Selección de metal">
  <img src="capturas/pricelock/03-menu.png" width="225" alt="Menú">
</p>

<p>
  <img src="capturas/pricelock/04-anuncios.png" width="225" alt="Anuncios">
  <img src="capturas/pricelock/05-compra.png" width="225" alt="Registro de compra">
  <img src="capturas/pricelock/06-disponibilidad.png" width="225" alt="Disponibilidad horaria">
</p>

## Notas

- Las capturas incluyen datos de prueba de las aplicaciones.
- Capturas publicadas con fines de portafolio; las marcas, el código y los
  datos pertenecen a sus respectivos propietarios.
