fixcss:
	node process-html.js       

concat:
	cat ./src/page*.html >> ./src/call.html

dcup:
	docker compose up --build nginx

build:
	docker build -t my-nginx-server .

	