pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Igorballo/react-devops.git', credentialsId: 'jenkins_id'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage...'
            }
        }
    }
}
