pipeline {
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npx playwright test api'
         }
      }
   }
}