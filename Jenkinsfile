pipeline {
   agent none
   stages {
      stage('e2e-tests') {
        agent {
                label 'windows'
            }
         steps {
            bat 'npx playwright test api'
         }
      }
   }
}