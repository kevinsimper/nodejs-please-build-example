subinclude("///pleasings//docker")

genrule(
    name = "library",
    srcs = glob(["lib/src/*.ts", "lib/*.json", "build.sh", "Dockerfile"]),
    cmd = "cd tslog && bash build.sh && mv output $OUT",
    outs = ["./lib"],
    visibility = ["PUBLIC"]
)
