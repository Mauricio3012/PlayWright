pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-jammy' } }
   stages {
      stage('e2e-tests') {
         steps {
            dir('C:\\windows\\system32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\PlayWright'){
            sh 'npm ci'
            sh 'npx playwright test api'
            }
         }
      }
   }
}