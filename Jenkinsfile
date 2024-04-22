pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-jammy' } }
   environment {
        JENKINS_HOME = 'C:/temp'
    }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test api'
         }
      }
   }
}