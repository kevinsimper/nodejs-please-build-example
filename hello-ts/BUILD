genrule(
    name = "docker",
    srcs = glob(["src/**", "*.json", "Dockerfile"]) + ["//tslog:library"],
    cmd = "docker build --file hello-ts/Dockerfile -t hello-ts -q . > $OUT",
    out = "./output.txt",
)

genrule(
    name = "run",
    srcs = [":docker"],
    cmd = "echo '#!/bin/sh' > $OUT && echo 'docker rm -f hello-ts > /dev/null 2>&1' >> $OUT && echo docker run --init --rm -p 9000:9000 --name=hello-ts $(cat $SRC) >> $OUT",
    out = "./run.sh",
    binary = True
)
