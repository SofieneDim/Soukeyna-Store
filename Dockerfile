docker cp build/ nginx_nginx-prod_1:/var/www/html/sk
npm run build -- --outputPath=./build --configuration=production --build-optimizer=false --outputHashing=all