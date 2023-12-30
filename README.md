<div aling="center">
<h3>TAILWIND CSS</h3>
</div>
<p>Framework CSS, que nos ayuda a crear diseños rápidos y personalizables.
Este se enfoca en dejar de pensar tanto en nombres de clases, y utiliza clases de utilidad
En vez de nombrar una clase: div.container que contenga un display:block, utilizamos un div.block este block ya tiene una clase de prediseñada en css .block{ display: block }
Esto nos permite reutilizar clases de utilidad en nuestros proyectos</p>

## Extensiones

<li>Tailwind CSS Intellisense</li>

## Instalación
<ol>
    <li>Instalar node.js, verificar con el comando: <b>node -v</b></li>
    <li>Crear un arhivo package.json :<b> npm init -y </b></li>
    <li>Comando para instalar Tailwind: <b>npm install -D tailwindcss</b></li>
    <li>Crear un archivo tailwind.config.js para configurar tailwind: <b>npx tailwindcss init</b></li>
    <li>Agregar las directivas en un CSS: @tailwind base(Resetea el CSS), @tailwind components(estilos para componente), @tailwind utilities(clases de utilidad)</li>
    <li>En el package.json agregamos el script "scanTailwind" por ejemplo que contendra la ubicación de las directivas y donde se generarán en este caso en el src/css/styles.css</li>
    <li>Usamos el comando: <b>npm run scanTailwind</b> esto crea un archivo con el nombre que establecimos en el comando scanTailwind para resetear el navegador</li>
    <li>
    <li>Por ultimo referenciamos al archivo en nuestro documento HTML con un link</li>
</ol>
