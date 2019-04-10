dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t lunchboqs-image ./bin/release/netcoreapp2.2/publish

docker tag lunchboqs-image registry.heroku.com/lunchboqs/web

docker push registry.heroku.com/lunchboqs/web

heroku container:release web -a lunchboqs

# sudo chmod 755 deploy.sh
# ./deploy.sh