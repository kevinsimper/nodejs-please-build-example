tar --exclude='./node_modules' --exclude='./context.tar' -czf context.tar .
IMAGENAME=build$(shasum -a 256 context.tar | awk '{print $1}')
cat context.tar | docker build -t $IMAGENAME -
docker images
ID=$(docker create $IMAGENAME)
docker cp $ID:/app/dist output
