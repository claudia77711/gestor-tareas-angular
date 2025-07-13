# Gestor de Tareas - Angular + JSON Server

Aplicación web sencilla construida con **Angular** y **JSON Server** que permite crear, editar, eliminar y marcar tareas como completadas o pendientes.

---

## Requisitos funcionales cumplidos

-  Listar tareas (título, descripción y estado).
-  Crear nuevas tareas.
-  Marcar como completada o pendiente.
-  Eliminar tareas.
-  Editar título y descripción.

---

## Tecnologías utilizadas

- **Framework principal:** Angular 17+
- **Lenguaje:** TypeScript
- **Simulación backend:** JSON Server
- **Estilos:** Bootstrap + CSS personalizado con media queries
- **Testing:** Jasmine + Karma (prueba unitaria incluida)

---

## Instalación y ejecución

1. **Clona el repositorio:**

   git clone https://github.com/claudia77711/gestor-tareas-angular.git
   cd gestor-tareas-angular


2. Instala las dependencias del proyecto:
    npm install
3. Inicia el servidor de backend simulado (JSON Server):
    npx json-server --watch db.json --port 3000
4. Levanta la aplicación Angular:
    ng serve
5. Abrir en el navegador:
     http://localhost:4200
6. Correr prueba unitarias
    ng test

## Justificación tecnológica:

* Se eligió Angular porque es un framework robusto, estructurado y ampliamente usado en entornos        empresariales como NTT Data.

* Se usó JSON Server para simular un backend RESTful rápidamente.

* Bootstrap y media queries aseguran una interfaz básica pero responsiva.

* El proyecto fue tipado fuertemente con TypeScript, ideal para mantener escalabilidad y buenas prácticas.

* Se aplicó el patrón de servicios inyectables y separación de lógica (componentes vs servicios).  

## Tiempo invertido estimado
Aproximadamente 12 a 15 horas, distribuidas entre:

Lógica funcional: 6 horas

Diseño e interfaz: 2 horas

Pruebas unitarias: 2 horas

Debugging y ajustes: 2 horas

Documentación y entrega: 1-2 horas

 ## Autor

Claudia Esperanza
Desarrolladora Frontend
GitHub: @claudia77711
