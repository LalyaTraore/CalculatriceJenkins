pipeline {
    agent any

    stages {
        stage('Cloner le code') {
            steps {
                // Utilise bien la branche main
                git branch: 'main', url: 'https://github.com/LalyaTraore/CalculatriceJenkins.git'
            }
        }

        stage('Construire et tester') {
            steps {
                script {
                    // Simulation du build et des tests
                    bat 'echo "Construction de l\'application Calculatrice..."'
                    bat 'echo "Lancement des tests unitaires..."'
                    bat 'echo "✅ Tous les tests sont passés avec succès !"'
                }
            }
        }

        stage('Déployer en production') {
            steps {
                echo "🚀 Déploiement simulé en production..."
            }
        }
    }

    post {
        success {
            echo "🎉 Pipeline terminé avec succès !"
        }
        failure {
            echo "❌ Les tests ont échoué. Déploiement annulé."
        }
    }
}

