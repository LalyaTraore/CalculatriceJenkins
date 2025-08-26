stage('Construire image Docker') {
    steps {
        script {
            bat 'docker build -t calculatrice-app .'
        }
    }
}

stage('Déployer en TEST') {
    steps {
        script {
            bat 'docker run -d -p 3001:3000 --name calculatrice-test calculatrice-app'
        }
    }
}

stage('Exécuter les tests Selenium') {
    steps {
        script {
            bat 'npm install selenium-webdriver'
            bat 'node test_calculatrice.js'
        }
    }
}

stage('Déployer en PROD si tests OK') {
    when {
        expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
    }
    steps {
        script {
            bat 'docker stop calculatrice-test || exit 0'
            bat 'docker rm calculatrice-test || exit 0'
            bat 'docker run -d -p 3000:3000 --name calculatrice-prod calculatrice-app'
        }
    }
}
