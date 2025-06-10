pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "igorballo"
        IMAGE_VERSION = "1.${BUILD_NUMBER}"
        DOCKER_IMAGE = "${DOCKER_USERNAME}/react-devops:${IMAGE_VERSION}"
        DOCKER_CONTAINER = "react-devops-app-${BUILD_NUMBER}"
        DOCKER_CREDENTIALS = credentials("Igorballo")
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git branch: 'main', url: 'https://github.com/Igorballo/react-devops.git', credentialsId: 'jenkins_id'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker registry
                    docker.withRegistry("https://${DOCKER_REGISTRY}", "${DOCKER_REGISTRY_CREDENTIALS_ID}") {
                        // Push Docker image to registry
                        docker.image("${DOCKER_IMAGE}:latest").push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            
            }
        }
    }
}