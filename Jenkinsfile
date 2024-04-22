pipeline {
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            sh 'node --version'
            sh 'npx playwright test api'
         }
      }
   }
}