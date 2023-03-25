VERSION=local


docker-build db:
	docker build . -t brianwolf/nodejs:$(VERSION)


docker-push dp: 
	docker push brianwolf/nodejs:$(VERSION)

docker-run dr: 
	docker run -d --rm -p 8080:8080 --name nodejs brianwolf/nodejs:$(VERSION)
	docker logs nodejs -f 
	
docker-kill dk:
	docker kill nodejs

