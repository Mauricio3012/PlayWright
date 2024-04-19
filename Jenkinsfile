pipeline {
   agent { docker { 
               image 'mcr.microsoft.com/windows/insider:10.0'
                } }

   tools {
        maven 'MAVEN'
        jdk 'JAVA_JDK'
    }
   stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test api
        '''
      }
    }
}
}