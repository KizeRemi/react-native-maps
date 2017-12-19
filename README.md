# react-native-places

Librairie utilisée:

React native elements:
Cette libraire est simple à utiliser et comporte un tas d'élements déjà stylisé. Elle est donc parfaite pour applications simple dont le design n'est pas le plus important.
En revanche, dans le cas où il faut rajouter design, ceci sera un peu plus laborieux.

Dans le cas d'un projet plus lourd et dont le design est très important, j'opterais plus pour Styled-components qui permet de styliser de manière précise chaque élément. On peut donc séparer chaque élement stylisé. Par exemple, on peut avoir un composant Bouton Rouge avec des bordures et un composant Bouton Bleu avec des bordures plus grosses.
Il suffit ensuite de l'importer et de l'utiliser comme n'importe quel autre élement. On peut également l'étendre pour lui ajouter un style vraiment très précis dans un cas particulier.

Dans cette libraire, on est donc totalement libre et on a la main sur chaque aspect de notre aspect. Ce qui du coup, demande plus de temps de développement et une charte graphique.
De plus le syntaxe est celle du css classique (css-in-js) et supporte Sass.

