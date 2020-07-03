# Bee-together
Ce projet a été réalisé dans le cadre de notre deuxième année de formation en développement et conception d'applications.

**Les objectifs accompli :**

- méthode TDD employé

---


## Contributeurs

Les **membres constituant le groupe** sont les suivants :

- Lucas Maillard ([LucasMaillard](https://github.com/LucasMaillard))
- Axelle Guinaudeau ([Theia01](https://github.com/Theia01))
- Camille Naulet ([camillenaulet03](https://github.com/camillenaulet03))
- Johan Deleon ([Amestyale](https://github.com/Amestyale))
- Maël Debon ([maeldebon](https://github.com/maeldebon))


---

## Utiliser l'application en local


### Dépendances requises :

Avant toute chose, certaines installations sont **requises** pour pouvoir utiliser ce projet :

- [NodeJs](https://nodejs.org/en/) 

### Mettre en place le projet

Il vous faut ensuite **cloner le projet :**
```sh
git clone git@github.com:Theia01/Bee-together.git
```

Une fois cela fait, rentrez dans le fichier créé et exécutez la commande suivante :
```sh
npm i
```

### Exécuter les tests 

Lorsque les installations sont terminées, vous pouvez lancer les tests avec cette commande :
```sh
npm test
```

### Démarrer le serveur

Vous pouvez également lancer le serveur avec la commande : 
```sh
node app/index.js
```
Et accéder à la page de login et register avec l'adresse : [http://localhost:3000/](http://localhost:3000/) 
Cependant le login et le register ne sont pas fonctionnels

### Connexion à la base de données

Créez une base de donnée en vous basant sur les informations de ![config.database.js](config.database.js) que vous pouvez modifier si besoin, lancez la commande ci-dessous, depuis la racine pour créer les tables
```sh
node init.js
```

