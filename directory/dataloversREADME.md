# Data Lovers

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
- [6. Consideraciones técnicas](#6-consideraciones-técnicas)
- [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)

---

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de _terabytes_ de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y comprensible para las usuarias
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto aprenderás a manipular un conjunto de datos (_set_ de datos)
para hacerlos accesibles a través de una _página web_ de utilidad para tus usuarias.

Tendrás que construir una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a mostrar información aún más relevante para los usuarios
(promedio, el valor máximo o mínimo, etc).

Te proponemos una serie de datos de diferentes _temáticas_ para que
los explores y decidas con cuáles te interesa trabajar. Hemos elegido
específicamente estos _sets_ de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

- [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).

  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

- [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).

  - [Investigación con jugadores de LoL](src/data/lol/README.md)

- [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty. [API Rick and Morty](https://rickandmortyapi.com).

  - [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)

- [Juegos Olímpicos de Río de Janeiro](src/data/athletes/athletes.json).
  Este set nos proporciona la lista de los atletas que ganaron medallas en las
  olímpiadas de Río de Janeiro.

  - [Investigación con interesados en juegos olímpicos de Río de Janeiro](src/data/athletes/README.md)

- [Studio Ghibli](src/data/ghibli/ghibli.json).
  En este set encontrarás una lista de las animaciones y sus personajes del
  [Studio Ghibli](https://ghiblicollection.com/).

  - [Investigación con seguidores de las animaciones del Studio Ghibli](src/data/ghibli/README.md)

- [Harry Potter](src/data/harrypotter/harry.json).
  En este set encontrarás una lista de los personajes,libros pociones
  y hechizos de toda la saga de
  [Harry Potter](https://harrypotter.fandom.com).
  - [Investigación con seguidoras de Harry Potter](src/data/harrypotter/README.md)

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  - [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [ ] **Uso de selectores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

    <details><summary>Links</summary><p>

  - [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>
