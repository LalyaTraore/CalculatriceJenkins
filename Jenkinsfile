pipeline {
    agent any

    stages {
        stage('Cloner le repo') {
            steps {
                git branch: 'main', url: 'https://github.com/kenaubry/CalculatriceJenkins.git'
            }
        }

        stage('Construire image Docker') {
            steps {
                script {
                    sh 'docker build -t calculatrice-app .'
                }
            }
        }

        stage('Déployer en TEST') {
            steps {
                script {
                    sh 'docker run -d -p 3001:3000 --name calculatrice-test calculatrice-app'
                }
            }
        }

        stage('Exécuter les tests Selenium') {
            steps {
                script {
                    sh 'npm install selenium-webdriver'
                    sh 'node test_calculatrice.js'
                }
            }
        }

        stage('Déployer en PROD si tests OK') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                script {
                    // Supprimer conteneur test
                    sh 'docker stop calculatrice-test || true && docker rm calculatrice-test || true'
                    
                    // Lancer en PROD
                    sh 'docker run -d -p 3000:3000 --name calculatrice-prod calculatrice-app'
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
