pipeline {
    agent any

    environment {
        // DOCKER_IMAGE_NAME = 'my-react-app'
        // DOCKER_REGISTRY = 'my-docker-registry.example.com'
        // DOCKER_REGISTRY_CREDENTIALS_ID = 'docker-registry-credentials'
        // DEPLOYMENT_SERVER_IP = 'your.server.ip.address'
        // DEPLOYMENT_PATH = '/var/www/my-react-app'
        // SSH_CREDENTIALS_ID = 'ssh-credentials-id'

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
                    // Placeholder for any tests
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
            //    script {
            //     sh """
            //         docker login -u $DOCKER_CREDENTIALS_USR -p $DOCKER_CREDENTIALS_PSW
            //         echo 'Docker login successful'
            //         docker push $DOCKER_IMAGE
            //         echo 'Docker push successful'
            //     """
            //     }
            }
            // steps {
            //     script {
            //         // Deploy the Docker image to the server
            //         sh '''
            //             ssh -i ${SSH_CREDENTIALS_ID} user@${DEPLOYMENT_SERVER_IP} '
            //                 docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest &&
            //                 docker stop my-running-container || true &&
            //                 docker rm my-running-container || true &&
            //                 docker run -d --name my-running-container -p 80:80 ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest
            //             '
            //         '''
            //     }
            // }
        }
    }

    post {
        always {
            // Cleanup workspace after build
            cleanWs()
        }
        success {
            // Actions on successful deployment
            echo 'Deployment successful!'
        }
        failure {
            // Actions on failed deployment
            echo 'Deployment failed!'
        }
    }
}