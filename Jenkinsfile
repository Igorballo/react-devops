pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "igorballo"
        IMAGE_VERSION = "1.${BUILD_NUMBER}"
        DOCKER_IMAGE = "${DOCKER_USERNAME}/react-devops:${IMAGE_VERSION}"
        DOCKER_CONTAINER = "react-devops-app-${BUILD_NUMBER}"
        DOCKER_REGISTRY = "index.docker.io"
        DOCKER_CREDENTIALS_ID = "Igorballo"  // ID du secret Jenkins
    }

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

        
        stage("Build Docker Image") {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }
    }
}
