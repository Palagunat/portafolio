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

## GailagGold v1 — Primera versión (Angular + Electron)

Primera versión del sistema de gestión, construida con Angular y Electron:
compras, bodega, mineros, negocios, moviliario, lingoteo, ingresos y egresos
con analítica y cortes, informes y nómina. Años después se reescribió por
completo en Flutter (la versión de escritorio de arriba).

**Stack:** Angular · Electron · Angular Material · gráficas (ngx-charts) ·
impresión de PDF · firma digital y lector de huella (hardware).

<p>
  <img src="capturas/gailaggold-v1/02-analisis-movimientos.png" width="620" alt="Análisis de movimientos">
</p>

<p>
  <img src="capturas/gailaggold-v1/01-login.png" width="380" alt="Inicio de sesión">
  <img src="capturas/gailaggold-v1/03-registros.png" width="380" alt="Registros">
</p>

## InfinityApp — App móvil

Aplicación móvil de precios y cálculo de compra: precio por gramo del oro
calculado al instante a partir del mercado, dólar de compra, estado de
apertura/cierre del mercado, calculadora de compra (ley, gramos, porcentaje) y
lector de QR.

**Stack:** Flutter (GetX) · fl_chart · Firebase (mensajería) · QR ·
notificaciones locales y servicio en segundo plano.

<p>
  <img src="capturas/infinityapp/01-precios.png" width="225" alt="Precio por gramo y estado del mercado">
  <img src="capturas/infinityapp/02-calculadora.png" width="225" alt="Calculadora de compra">
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

## Nian Admin — Panel de administración (escritorio)

Panel de administración desarrollado como propuesta para Nian Capital:
ventas, compras, clientes, inventario, contabilidad (ingresos y gastos, con
informes diario y general), producción de lingotes (lotes con certificado de
peso y pureza, regalías e imágenes), reasignaciones, sucursales y usuarios con
permisos por grupos, con exportación e importación de datos.

**Stack:** Flutter (escritorio) · trina_grid · gráficas · informes en PDF y
Excel.

<p>
  <img src="capturas/nian-admin/02-informe-general.png" width="620" alt="Informe general">
</p>

<p>
  <img src="capturas/nian-admin/01-informe-diario.png" width="380" alt="Informe diario">
  <img src="capturas/nian-admin/03-lote.png" width="380" alt="Producción de lotes">
</p>

<p>
  <img src="capturas/nian-admin/04-municipios.png" width="380" alt="Datos maestros">
  <img src="capturas/nian-admin/05-usuarios-grupos.png" width="380" alt="Usuarios y permisos">
</p>

## Asistente IA — Experimento (ERP + IA)

Experimento propio: consola de gestión con asistente de IA integrado. Servidor
modular en Go con aislamiento por empresa (Row Level Security de PostgreSQL),
cliente Flutter (escritorio/web/móvil) y un orquestador que consulta y registra
datos con tarjetas de confirmación antes de escribir.

**Stack:** Go (pgx, RLS, JWT, River) · Flutter (GetX) · Postgres · IA con
herramientas por módulo.

<p>
  <img src="capturas/asistente-ia/02-tablero.png" width="620" alt="Tablero con KPIs y alertas">
</p>

<p>
  <img src="capturas/asistente-ia/01-login.png" width="380" alt="Inicio de sesión">
  <img src="capturas/asistente-ia/03-punto-de-venta.png" width="380" alt="Punto de venta con carrito">
</p>

<p>
  <img src="capturas/asistente-ia/04-asistente-ventas.png" width="380" alt="Asistente: ventas del día">
  <img src="capturas/asistente-ia/05-asistente-inventario.png" width="380" alt="Asistente: inventario crítico">
</p>

<p>
  <img src="capturas/asistente-ia/06-asistente-orden.png" width="620" alt="Asistente: orden de compra con confirmación">
</p>

## SysCafé IA — Experimento (escritorio MDI + IA)

Experimento propio: reproducción moderna de un sistema de gestión de escritorio
(ventanas MDI, catálogos y comprobantes) con cliente Flutter, servidor Go y un
asistente que explica procesos, consulta datos y abre ventanas por sí solo.

**Stack:** Flutter (escritorio) · Go · Postgres · asistente IA.

<p>
  <img src="capturas/syscafe-ia/02-escritorio.png" width="620" alt="Escritorio con tablero y pendientes">
</p>

<p>
  <img src="capturas/syscafe-ia/01-login.png" width="380" alt="Inicio de sesión">
  <img src="capturas/syscafe-ia/03-factura.png" width="380" alt="Factura de venta (MDI)">
</p>

<p>
  <img src="capturas/syscafe-ia/04-asistente.png" width="380" alt="Asistente: consulta de clientes">
  <img src="capturas/syscafe-ia/05-terceros.png" width="380" alt="Asistente: ventana de terceros abierta">
</p>

## Notas

- Las capturas incluyen datos de prueba de las aplicaciones.
- Capturas publicadas con fines de portafolio; las marcas, el código y los
  datos pertenecen a sus respectivos propietarios.
