## 03 - Gestionar la conexión y la desconexión del servidor

### Introducción

- La conexión WebSocket permanece todo el tiempo que la página está abierta.
- Es posible que se pierda la conexión por diferentes motivos.
- Es nuestra responsabilidad detectar la caída de la conexión y volvernos a conectar.
- En la primera llamada, es posible que todavía no hayamos conseguido conectar, por lo que deberíamos gestionar también no enviar datos hasta estar realmente conectados.
- Los eventos en el WebSocket de navegador se captura con `ws.onopen = () => {}` o `ws.onclose = () => {}`.

### Ejercicio

- Copia la página anterior como `index-03.html`.
- Deshabilita el botón enviar añadiendo `disabled` en su HTML.
- Captura el evento de apertura de la conexión WebSocket y habilita el botón con algo de este tipo:
```js
buttonSend.disabled = false; // Habilitamos el botón
```
- Captura el evento de cierre de la conexión WebSocket y deshabilita el botón con algo de este tipo:
```js
buttonSend.disabled = true;
```

### Extra

- Para gestionar la reconexión al servidor en caso de cierre:
  - añade todo el código de conexión en una función llamada `connection`
  - llama a esta función una primera vez
  - en el evento `onclose` añade al final:
```js
setTimeout(connexion, 500);
```