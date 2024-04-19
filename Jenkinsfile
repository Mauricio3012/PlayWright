pipeline {
   agent {   docker {
      image 'python'
    }}
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
}