docker cp build/ nginx_nginx-prod_1:/var/www/html/sk
npm run build -- --outputPath=./sk --configuration=production --build-optimizer=false --outputHashing=all
docker cp sk nginx_nginx-prod_1:/var/www/html/