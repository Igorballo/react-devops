pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "igorballo"
        IMAGE_VERSION = "1.${BUILD_NUMBER}"
        DOCKER_IMAGE = "${DOCKER_USERNAME}/react-devops:${IMAGE_VERSION}"
    }

    tools {
        nodejs 'Node-20'
    }

    stages {
        stage('Cloner le repo') {
            steps {
                cleanWs()
                git branch: 'master', url: 'https://github.com/Igorballo/react-devops.git', credentialsId: 'jenkins_id'
                
                script {
                    if(!fileExists('package.json')) {
                        error 'package.json not found'
                    }
                }
            }
        }

        stage('Installer les dépendances') {
            steps {
                script {
                    sh '''
                        curl -f https://get.pnpm.io/v6.js | node - add --global pnpm
                        pnpm install
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh 'docker build -t $DOCKER_IMAGE .'
                    } catch (e) {
                        error 'Build failed: ${e}'
                    }
                }
            }
        }

        stage('Déployer l\'image Docker') {
            steps {
                script {
                    try {
                        sh 'docker-compose up -d'
                    } catch (e) {
                        error 'Push failed: ${e}'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Piple execué avec succès'
            script {
                sh 'Application déployée avec succès sur localhost:80'
            }
        }
        failure {
            echo 'Piple échoué'
            script {
                sh 'docker-compose down || true'
            }
        }
        always {
            script {
                sh 'docker system prune -f || true'
                archiveArtifacts artifacts: '**/log/*.log', allowEmptyArchive: true
            }
        }
    }
}
