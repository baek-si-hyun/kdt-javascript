function change(object) {
    object.src =
        "images/" +
        (object.src.includes("icon5.png") ? "icon6.png" : "icon5.png");
}
