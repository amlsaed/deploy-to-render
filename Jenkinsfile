pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Build') {
            steps {
                node {
                    sh 'npm install'
                }
            }
        }
    }
}
