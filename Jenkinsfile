pipeline {
   agent { docker { 
                image 'mcr.microsoft.com/powershell'
                reuseNode true
                } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
}