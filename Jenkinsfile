pipeline {
   agent { docker { image 'python' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'node --version'
            sh 'npx playwright test api'
         }
      }
   }
}