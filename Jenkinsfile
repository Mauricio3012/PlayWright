pipeline {
   agent { docker { 
                image 'mcr.microsoft.com/playwright:v1.43.0-jammy'
                args '-w C:\windows\system32\config\systemprofile\AppData\Local\Jenkins\.jenkins\workspace\PlayWright\' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
}