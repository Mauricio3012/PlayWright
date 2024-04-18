pipeline {
   agent {
    node {
        label 'my-defined-label'
        customWorkspace 'C://windows//system32//config//systemprofile//AppData//Local//Jenkins//.jenkins//workspace//PlayWright//'
    }
}
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