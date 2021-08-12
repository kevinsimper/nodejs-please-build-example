subinclude("///pleasings//docker")

docker_image(
    name = "hello",
    srcs = ["index.mjs", "//tslog:library"],
    dockerfile = "Dockerfile",
    visibility = ["PUBLIC"],
)

genrule(
    name = "test",
    srcs = {
        "srcs": ["index.mjs", "Dockerfile", "package.json"],
        "tslog": ["//tslog:library"],
    },
    cmd = "mkdir -p hello/tslog && mv $SRCS_TSLOG/* hello/tslog && cd hello && docker build -t hello -q . > $OUT",
    out = "./dist",
    visibility = ["PUBLIC"]
)
