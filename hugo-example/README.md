## Use the project as black box
### you could rewrite the --mount here as -v $PWD:/src
docker run --rm -it -dest-mount type=bind,source="$(pwd)",target=/src -p 1313:1313 -u hugo jguyomard/hugo-builder:0.55 hugo server -w --bind=0.0.0.0
