## 05 - Enviar y recibir datos (ECHO)

### Introducción

- La comunicación de WebSocket se puede realizar tanto desde el cliente al servidor, como del servidor al cliente.
- En muchos sistemas hay un servicio `echo`, es decir, que devuelve lo que se le envía. Suele utilizarse con files de prueba o formación.

### Ejercicio

#### Server

- Copia el fichero `index-02.mjs` como `index-05.mjs`.
- En el evento `ws.on('message', () => {})` envía los datos recibidos de vuelta al cliente.

#### Client

- Copia el fichero `index-03.html` como `index-05.html`.
- Añade un `div` debajo del botón
- Captura el evento de recepción de mensajes con 
```js
ws.onmessage = (msg) => {
  div.innerHTML += msg.data;
}
```
- Añade los datos recibidos al final del `div`

### Extra 1: scroll

- Añade los estilos `height: 50em` y un `overflow: auto` al `div`
- Después de añadir datos al `div`, incluye una llamada similar a esta:
```js
divResult.scrollTo(0, divResult.scrollHeight);
```
