# Prototipo de SPA con JS Vanilla

Base para desarrollar aplicaciones de una sola página (SPA).

Inlcuye la implementación básica de la navegación mediante JS.

## Requisitos

PARA QUE LA NAVEGACIÓN FUNCIONE ES NECESARIO DESPLEGLAR LA APLICACIÓN EN UN SERVIDOR LOCAL.

Por ejemplo, para desplegarla en Apache con Xamp, el proyecto se debe alojar en la carpeta htdocs del directorio de Xamp.

Una vez arrancado el servidor se debe acceder a la aplicación desde localhost:8081 (o tu puerto de Apache).

## Añadir páginas

1. Se debe añadir la ruta correspondiente en el array de rutas de main.js
2. Se crea un nuevo directorio con el nombre de la página en /src/vistas
3. Se añade al nuevo directorio un fichero .html y un fichero .js para la nueva página
4. Se crea la clase correspondiente extendiendo la clase Vista y referenciando el html y js creados

## Notas

El proyecto está basado en el siguiente trabajo: https://www.youtube.com/watch?v=6BozpmSjk-Y

En el vídeo se explica paso a paso la implementación de la navegación, sin incluir ficheros html y js.