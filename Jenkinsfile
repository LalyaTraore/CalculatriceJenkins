pipeline {
    agent any

    stages {
        stage('Cloner le code') {
            steps {
                // On clone le repo Github
                git branch: 'main', url: 'https://github.com/LalyaTraore/CalculatriceJenkins.git'
            }
        }

        stage('Construire et tester') {
            steps {
                script {
                    // Construire l'image
                    bat 'docker build -t calculatrice-app .'

                    // Lancer le container (http-server + exécute test_calculatrice.js)
                    bat 'docker run -d -p 3001:3000 --name calculatrice-test calculatrice-app'
                    bat 'npm install selenium-webdriver'
                    bat 'node test_calculatrice.js'
                }
            }
        }

        stage('Déployer en production') {
            steps {
                script {
                    // Supprimer un ancien container prod s’il existe
                    bat 'docker stop calculatrice-prod || exit 0'
                    bat 'docker rm calculatrice-prod || exit 0'

                    // Lancer l’appli en prod (juste le serveur statique)
                    bat 'docker run -d -p 3000:3000 --name calculatrice-prod calculatrice-app'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline terminé."
        }
        failure {
            echo "Les tests ont échoué. Déploiement annulé."
        }
    }
}
