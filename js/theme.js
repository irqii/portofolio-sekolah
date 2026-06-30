
const tombol = document.getElementById("themeToggle");
const icon = document.getElementById("icon");

tombol.addEventListener("click", () => {

    if (document.body.style.backgroundColor === "black") {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        icon.src = "assets/images/bulan.png";

    } else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        icon.src = "assets/images/matahari.png";

    }

});