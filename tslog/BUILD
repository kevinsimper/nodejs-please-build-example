subinclude("///pleasings//docker")

genrule(
    name = "library",
    srcs = glob(["src/*.ts", "*.json", "build.sh", "Dockerfile"]),
    cmd = "cd tslog && bash build.sh && mv output $OUT",
    outs = ["./dist"],
    visibility = ["PUBLIC"]
)
