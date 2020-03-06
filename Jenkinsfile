pipeline {
    agent any 
	parameters{
		string(name: 'master', defaultValue: 'fausse', description: '')
	}
	stages{	
		stage('Checkout') {
			steps{
				deleteDir()
				dir('forge'){
						git url: 'https://github.com/diarra22/Frontendforge.git', branch:"${params.master}", credentialsId: 'Frontendforge'
				}
			}
		}
		stage('Build') {
		    steps {
			echo 'Hello world!' 
		    }
		}        
    }
}
