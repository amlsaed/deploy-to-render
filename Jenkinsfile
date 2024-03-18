pipeline {
    agent any

    tools {
        // Define the Node.js tool with the name "NodeJS" and the desired version
        nodejs "NodeJS"
    }

    stages {
        stage('Build') {
            steps {
                // Use the 'npm' command to install dependencies
                sh 'npm install'
            }
        }
    }
}
