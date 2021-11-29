## 06 - Enviar y recibir datos JSON. Enviar a todos los usuarios conectados.

### Introducción

- Diferencia entre objeto JavaScript y JSON (JavaScript Object Notation).
- WebSocket sólo puede transmitir datos en texto o binarios, no un objeto JS.
- Con `JSON.stringify()` convertimos un objeto JS en JSON.
- Con `JSON.parse()` convertimos un JSON en un objeto JS.

### Ejercicio

- Copiar el fichero anterior como `index-06.html`.
- Añadid un campo para incluir el nombre del usuario.
- Crear un objeto que contenga el nombre y el mensaje:
```json
{
  "name": "nombre",
  "text": "mensaje"
}
```
- Convertir el mensaje en cadena de texto.
- Enviar a todos los clientes conectados el mensaje convertido como cadena de texto.


- Copiar el fichero anterior en `index-06.mjs`;
- Introduce algunas líneas de código para que el dato obtenido como cadena se convierta en un objeto Javascript
- Añade la fecha del servidor como una propiedad de este objeto:
```js
obj.date = new Date();
```
- Envía los datos a todos los clientes conectados, recordando que tienes que convertirlo a texto antes de enviarlo, con algo como esto:
```js
 wss.clients.forEach((client) => {
  client.send(JSON.stringify(data));
});
```