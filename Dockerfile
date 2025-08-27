# Utiliser l'image de base Selenium avec Chrome
FROM selenium/standalone-chrome:latest

# Passer en root pour installer des paquets
USER root

# Installer Node.js
RUN apt-get update && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . /app

# Installer selenium-webdriver et http-server
RUN npm install selenium-webdriver http-server --save-dev

# Exposer le port (http-server utilise par défaut le 8080)
EXPOSE 8080

# Commande de démarrage :
# 1. Lancer un serveur statique
# 2. Attendre 5s (que le serveur démarre bien)
# 3. Lancer les tests Node avec selenium-webdriver
CMD sh -c "npx http-server -p 8080 & sleep 5 && node test.js"

