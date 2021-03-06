# Módulo 9. Transiciones, Animaciones CSS, SVG, Interacción Gestual...

## [Tema 1. Transiciones y animaciones en CSS](https://www.youtube.com/watch?v=lXnxZYQX-lo)

### Transición

- Se pueden entender como animaciones con un inicio y un fotograma clave.
- Propiedades
  - **Transition-duration**: La duración de la transición.
    - Hace referencia al tiempo que tarda en completarse la transición.
    - Se puede expresar en milisegundos (ms) o segundos (s).
  - **Transition-property**: La propiedad o propiedades
que queramos transicionar.
    - Para que exista una transición tiene que haber algún cambio en alguna propiedad del elemento HTML en cuestión. Suele suceder en tres casos:
      - Cambio de CSS desde Javascript con la propiedad *style*.
      - Cambio de una clase.
      - Cambio por un pseudoselector como *:focus* o *:hover*.
  - **Transition-delay**: El tiempo de retardo que pasa hasta que se dispara la transición.
    - Hace referencia al tiempo que tarda en comenzar la transición desde que se detecta el cambio de estado, ya sea hover, cambio de clase, o cambio de estilo por JS.
    - Se puede expresar en milisegundos (ms) o segundos (s).
  - **Transition-timing-function**: La curva de interpolación de la transición.
    - Hace referencia a la curva de interpolación entre dos fotogramas.
    - Las curvas de interpolación describen las aceleraciones, deceleraciones, etc.. que se pueden dar en el proceso de interpolación entre dos puntos.
    - Valores
      - **ease**: Es el valor por defecto
      - **linear**: Hace una transición totalmente linear.
      - **ease-in**
      - **ease-out**
      - **ease-in-out**
      - **step(a)**. Hace la transición por pasos. A es el número de pasos
      - **cubic-bezier(a, b, c, d)**. Definen la curva bezier de transición. Mejor hacerlo visualmente. Para ello hay un par de herramientas interesantes: Una es la curva que aparece en el Chrome DevTools cuando declaramos la propiedad transition- timing-function, otra es en la página http://easings.net/es.
- No todas las propiedades son animables.
  - **Animables**: tienen contenido numérico de cualquier tipo (relativo, absoluto, calc) => medidas, márgenes, paddings, bordes, contenido de color, opacidad, backgrounds, etc.
  - **No animables**: display none a block, por ej.
- Por ejemplo, si se aplica a un *hover* se debe poner que afecte al *background-color* tanto para cuando se pone el mouse encima como para cuando se quita, es decir, habría que modificar dos clases.

<img src="../Recursos/transition_01.png" width="80%" />
<img src="../Recursos/transition_02.png" width="80%" />
<img src="../Recursos/transition_03.png" width="80%" />

**Cheatsheet de transición para esconder**

<img src="../Recursos/transition_04.png" width="100%" />

### Animaciones
- Las animaciones pueden tener dos fotogramas clave o más.
- En lugar de definir qué propiedades animamos en la etiqueta, declaramos qué animación se hace y en la animación se declaran los fotogramas clave y las propiedades que se animan.
- En animation tenemos una doble sintaxis, la de la declaración en la regla CSS y la de la regla **@keyframes**.

<img src="../Recursos/animation_01.png" width="80%" />

**@keyframes**

- La propiedad animation tiene una sintaxis parecida a transition con algunas opciones más, en lugar de definir qué propiedades animamos en la etiqueta, declaramos qué animación se hace y en la animación se declaran los fotogramas clave y las propiedades que se animan.
- En animation tenemos una doble sintaxis, la de la declaración en la regla CSS y la de la regla @keyframes.
- En los valores se puede poner las palabras from, to, donde tendríamos dos fotogramas clave. Si no, se puede poner por porcentajes (0%, 99%, 100%)
From y to son dos atajos para decir 0% y 100%. Ambas maneras son posibles.
- En la declaración entre llaves cambiamos el CSS necesario, siempre teniendo en cuenta que estén las mismas propiedades en todos los fotogramas.

<img src="../Recursos/animation_02.png" width="80%" />
<img src="../Recursos/animation_03.png" width="80%" />

**Animation-duration, animation delay y animation-timing-function**

- Es el mismo fenómeno que en el caso de transition.
- Habla de la duración o del retardo de la animación en segundos o milisegundos, igual que en la transición.
- Y timing-function es igual también.
- 
<img src="../Recursos/animation_04.png" width="80%" />

**Animation-iteration-count**

- Define cuantas veces se va a repetir la animación.
- Acepta un número entero, o acepta la palabra clave infinite, que hace que se repita la animación una y otra vez.
- 
<img src="../Recursos/animation_05.png" width="80%" />

**Animation-direction**

- Permite ejecutar la animación en diferentes direcciones, es decir colocando los valores from, to, o numéricos de manera simétrica. Se hace con palabras clave.
  - **Normal**: Ejecuta la animación como está definida en el @keyframes.
  - **Reverse**: Ejecuta la animación al contrario de como está definida en el @keyframes.
  - **Alternate**: Ejecuta la animación en las veces impares de modo normal y las pares como reverse. Este valor tiene sentido en el momento en el que la animación tenga varias iteraciones.
  - **Alternate-reverse**: Ejecuta la animación en las veces pares de modo normal y las impares como reverse.

<img src="../Recursos/animation_06.png" width="80%" />

**Animation-fill-mode y Animation-play-state**

- Animation fill mode tiene varias opciones, pero se usan dos: forwards o backwards.
  - Forwards hace que cuando termine la animación, las propiedades modificadas se queden aplicadas.
  - Backwards hace que una vez terminada la animación se vuelva a los datos anteriores.
- Animation play state permite parar o reanudar una animación que está en ejecución.

<img src="../Recursos/animation_07.png" width="80%" />

**Animation**

- Es la propiedad resumen de todas las propiedades anteriores. Si alguna de las propiedades la dejamos en su valor por defecto se puede omitir. El orden sería:
  - name
  - duration
  - timing-function 
  - delay
  - iteration-count 
  - direction
  - fill-mode
  - play-state;

<img src="../Recursos/animation_08.png" width="80%" />

### Transform

- Transform es una propiedad de CSS3 que nos permite meter cambios en cualquier elemento como si se tratara de un elemento individual y modificarlo.
- Para usar transiciones y animaciones que tengan que ver con posicionamiento conviene usar transform en lugar de otras opciones.
- La sintaxis es un poco especial, y consta de 3 partes: **translate, rotate, scale**. Tiene más propiedades más complejas, tridimensionales, etc..

<img src="../Recursos/transform_01.png" width="80%" />

### Recursos

- [Transition](https://www.w3schools.com/css/css3_transitions.asp)
- [Animation](https://www.w3schools.com/css/css3_animations.asp)
- [Transitio-timing-function](https://easings.net/)
- Animaciones complejas
  - GSAP
  - AnimeJS
  
## [Tema 2. Gráficos Vectoriales en HTML y CSS](https://www.youtube.com/watch?v=1dtZtPUgFJ4)

### ¿Qué es SVG?

- El formato SVG, que viene de las siglas Scalable Vector Graphics, es un estándar abierto desarrollado por el consorcio web internacional, que está basado en un XML que define las formas vectorialmente, y que tiene un lenguaje de etiquetas compatible con HTML, por tanto por CSS y por el DOM de JavaScript. 
- Esto implica que el SVG es un markup normal y corriente que funciona igual que HTML, y que es accesible desde el CSS y desde JS, que nos permite meter formas vectoriales en la web.

### ¿Cómo se crea el SVG?

- El SVG se puede crear de varias maneras: 
- Podemos crear SVG escribiendo el markup directamente, familiarizándonos con las etiquetas, y escribiéndolas como si fueran HTML 
- Podemos crear el SVG en un programa de edición vectorial, exportándolo al formato SVG, y luego copiándo el contenido en el HTML. 
- Podemos crearlo de manera procedural con librerías como D3.js 
- Podemos crearlo con código con librerías como Snap.js, o SVG.js.

<img src="../Recursos/svg_01.png" width="50%" />

### Recursos

- Plugin VS Code: SVG Snippets.
- Plugin Sigma: SVG Export
- [SVG-OMG](https://jakearchibald.github.io/svgomg/)
- Diseñadoras
  - [Youtube - Sara Soueidan](https://www.youtube.com/watch?v=lf7L8X6ZBu8)
  - [Youtube - Sarah Drasner](https://www.youtube.com/watch?v=4laPOtTRteI)

## [Tema 3. Gráficos Vectoriales y uso de transiciones](https://www.youtube.com/watch?v=PHEkQL8WgYc)

**Carga y limpieza de vectores en Figma**
- Desagrupar => *Ungroup*
- Seleccionar todos los vectores => *Flatten Selection* (barra superior, 3º icono de cajas superpuestas)
- Editar Vector y quedarse con las partes que interesan (las que se van a animar).
  - Edit Object 
  - Plugin 
    - SVG Export
    - Paint Bucket
    - Split Vectors
      - *Split by Fills*

## [Tema 4. Interacción gestual en Interfaces Web](https://www.youtube.com/watch?v=VEWYq_firbA)

### Recursos

- [InteractJS](https://github.com/taye/interact.js)

## [Tema 5. Carruseles y transiciones entre páginas con la librería swiper.js](https://www.youtube.com/watch?v=d6ve_yeaOnQ)

### Recursos
- https://dixonandmoe.com/rellax/
- https://www.youtube.com/watch?v=aWJgIETz-Kk
- https://cdnjs.com/libraries/rellax
- https://michalsnik.github.io/aos/
- https://github.com/michalsnik/aos
- https://prinzhorn.github.io/skrollr/
- https://scrollmagic.io/
- [Swiper Demos](https://swiperjs.com/demos/)

## [Tema 6. Scroll animado con las librerías AOS y rellax.js](https://www.youtube.com/watch?v=PF8UllDVDXY)

### Recursos
- https://dixonandmoe.com/rellax/
- https://www.youtube.com/watch?v=aWJgIETz-Kk
- https://cdnjs.com/libraries/rellax
- https://michalsnik.github.io/aos/
- https://github.com/michalsnik/aos
- https://prinzhorn.github.io/skrollr/
- https://scrollmagic.io/


## [Tema 7. Anime.JS](https://www.youtube.com/watch?v=AF9HRgmoWHU)

## [Videotutorial P2P I. Saludo y explicación](https://www.youtube.com/watch?v=vGk8VBubnmA)

## [Videotutorial P2P II. Swiper y navegación](https://www.youtube.com/watch?v=8cpl-35w1DE)

## [Videotutorial P2P III. Animaciones entre pantallas](https://www.youtube.com/watch?v=O3PLFfklrio)

## [Videotutorial P2P IV. Animación ventanas modales](https://www.youtube.com/watch?v=Z1Miasst76w)

## [Videotutorial P2P V. Game over](https://www.youtube.com/watch?v=wSK1qFRZIDI)

## [Videotutorial P2P VI. Despedida y siguientes pasos](https://www.youtube.com/watch?v=gQuYRwC7_vc)

## [Ejercicio P2P. Enunciado y material de apoyo](https://www.youtube.com/watch?v=iEYKiYKOILM)