pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { bat 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { bat 'npm run-script lint' }
        }
        stage('Unit tests') {
            steps { bat 'npm run-script test' }
        }
      }
    }

    stage('Build') {
      steps { bat 'npm run-script build' }
    }

        stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
    }
  }
}