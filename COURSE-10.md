## 10 - ¿Qué nos queda por hacer?

### Regla del 80/20

- Hemos conseguido el 80% de la funcionalidad que necesitamos, solo falta un 20% de la funcionalidad.
- Lo malo es que para hacer ese 20% de funcionalidad necesitamos un 80% más de esfuerzo.

### Lista de temas pendientes para un chat en producción

- Crear un sistema de login que devuelva un `id` usuario que se mantenga en el tiempo.
- Almacenar las habitaciones, usuarios y mensajes en base de datos (no en memoria).
- Avisar que hay mensajes en las rooms que no hemos abierto.
- Confirmar la lectura enviando un mensaje al servidor de confirmación.
- Integrar el servidor WebSocket con el servidor HTTP.