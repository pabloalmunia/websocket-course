## 08 - Obtener los datos anteriores

### Introducción

- En los ejercicios anteriores obtenemos los datos que se envían cuando ya estamos conectados, pero nos perdemos todo lo que se ha enviado antes.
- Aunque todavía no vamos a ver la persistencia de la información en base de datos, vamos a utilizar una matriz para tener los datos ya recibidos y enviarlos cuando nos conectamos.
- Para este tipo de operación es muy común utilizar la información enviada en los JSON para incluir un metadato con el tipo de mensaje que estamos enviando.
- En nuestro caso vamos a utilizar `type:'init'` para indicar que nos vamos a conectar por primera vez y `type:'message'` para indicar que estamos enviando un mensaje.

### Ejercicio

- Copiamos `index-06.mjs` en `index-08.mjs`.
- Después del `import` añadimos un Array del tipo:
```js
const conversation = [];
```

- En el evento `on('message', () => {}` añadimos un `if (msg.type === 'init')` para tratar la llamada inicial.
- En este `if` devolvemos al cliente todos los datos almacenados en el Array.
```js
ws.send(JSON.stringify({
  type: 'load',
  conversation
}));
```
- Cada vez que se reciba un mensaje que no sea de tipo `init` se guarda dentro del Array con `conversation.push(data);`.


- Copiamos el fichero anterior en `index-08.html`.
- En el evento `ws.onopen` enviamos al servidor un mensaje `{type: 'load'}`.
- En el evento `ws.onmesssage` incluimos un `if (msg.type === 'init')` e insertamos todos los mensajes recibidos.


### Extra

- Puede ser una buena idea crear una función que añada los datos a la pantalla y que pueda ser llamada en la carga inicial y cuando recibimos un mensaje en tiempo real.
