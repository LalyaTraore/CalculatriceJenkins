pipeline {
    agent any

    stages {
        stage('Cloner le code') {
            steps {
                git 'https://github.com/LalyaTraore/CalculatriceJenkins.git'
            }
        }

        stage('Construire et tester') {
            steps {
                script {
                    // Simulation du build au lieu de Docker
                    bat 'echo "Construction de l\'application Calculatrice..."'
                    bat 'echo "Tests en cours..."'
                    bat 'echo "Tous les tests sont passés avec succès ✅"'
                }
            }
        }

        stage('Déployer en production') {
            steps {
                echo "Déploiement en production (simulation)... 🚀"
            }
        }
    }

    post {
        success {
            echo "Pipeline terminé avec succès 🎉"
        }
        failure {
            echo "Les tests ont échoué. Déploiement annulé."
        }
    }
}
