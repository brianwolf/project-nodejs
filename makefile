VERSION=local


build b:
	docker build . -t brianwolf/nodejs:$(VERSION)


push p: 
	docker push brianwolf/nodejs:$(VERSION)

run r: 
	docker run -d --rm -p 8080:8080 --name nodejs brianwolf/nodejs:$(VERSION)
	docker logs nodejs -f 
	
kill k:
	docker kill nodejs