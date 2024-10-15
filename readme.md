# TP2 : Canvas et POO

## Rendu

Ce projet sera à réaliser en solo. Le rendu peut se faire soit par un dépôt github, soit en le déposant sur l'ide de la 3wa, soit par une archive envoyée sur discord.

## Objectifs

Utiliser l'API canvas pour réaliser des formes géométriques. Il faudra se servir de la programmation orientée objet pour cet exercice.

## Instructions

### Mise en place du projet

* Créer un fichier *index.html* avec un élément *canvas* dont les dimensions sont 800 par 600
* Créer un fichier *main.css* dans un sous-dossier "css" qui définit des bordures au canvas
* Créer un fichier *main.js* dans un sous-dossier "js"
* Le dossier *main.js* récupérera l'élément canvas et son contexte
* Créer un sous-dossier "classes" dans le dossier "js"

### Création des classes

* Créer une classe *Shape* qui contiendra toutes les propriétés et méthodes communes à toutes les formes
* Créer une classe *Rectangle* qui contiendra les propriétés et méthodes spécifiques aux rectangles
* Créer une classe *Circle* qui contiendra les propriétés et méthodes spécifiques aux cercles

### Instanciation des cercles et rectangles

Dans le fichier *main.js*, créer plusieurs instances de cercles et de rectangles puis créer une méthode *draw* pour ces 2 classes qui dessinera la forme dans le canvas. Cette méthode *draw* prendra en paramètre le contexte du canvas.

```javascript
// Récupérer le canvas et le context au préalable

const rectangle = new Rectangle(50, 50, 100, 150, "blue");
rectangle.draw(context);
```

### Création de fonctions aléatoires

Dans un fichier *random.js* (dans un sous-dossier "utils" du dossier "js"), créer 2 fonctions : une fonction *getRandomNumber*, qui renvoie un nombre aléatoire compris entre un nombre minimum et un nombre maximum, et une fonction *getRandomColor* qui renvoie un tableau de 3 valeurs aléatoires comprises entre 0 et 255. Ces fonctions sont exportables.

```javascript
/* Fichier js/utils/random.js */
export function getRandomNumber(min, max) {
    // Todo
}

export function getRandomColor() {
    // Todo
}
```

### Création de cercles dynamiques

Lorsque l'on clique sur le canvas avec la souris, cela crée un cercle de rayon aléatoire et de couleur aléatoire à la position correspondant au clic de la souris.