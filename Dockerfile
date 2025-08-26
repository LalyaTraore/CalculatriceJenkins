# Étape 1 : utiliser une image Node officielle
FROM node:18

# Étape 2 : créer un dossier dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : copier les fichiers package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Étape 4 : copier tout le code de l'application
COPY . .

# Étape 5 : exposer le port (ex : 3000 si ton app écoute sur 3000)
EXPOSE 3000

# Étape 6 : lancer l'application
CMD ["npm", "start"]
