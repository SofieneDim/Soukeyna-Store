node {
	def remote = [:]
	remote.name = 'root'
	remote.host = '161.97.134.15'
	remote.user = 'root'
	remote.password = '3637pTVU55o8'
	remote.allowAnyHosts = true

	stage('Remote SSH') {
		sshCommand remote: remote, command: "ls -lrt"
	}

	stage('Build') {
		sshCommand remote: remote, command: "cd /root/test/frontend  && git reset --hard"
		sshCommand remote: remote, command: "cd /root/test/frontend && git pull origin main"
		sshCommand remote: remote, command: "cd /root/test/frontend && rm -rf node_modules package-lock.json"
		sshCommand remote: remote, command: "cd /root/test/frontend && npm i"
		sshCommand remote: remote, command: "cd /root/test/frontend && npm run build -- --outputPath=./sk --configuration=production --build-optimizer=false --outputHashing=all"
	}

	stage('Deploy') {
		sshCommand remote: remote, command: "docker cp sk nginx_nginx-prod_1:/var/www/html/"
	}

}
