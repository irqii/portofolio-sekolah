const tombol = document.getElementById("themeToggle");
const icon = document.getElementById("icon");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light");
    icon.src = "assets/images/matahari.png";

}else{

    icon.src = "assets/images/bulan.png";

}

tombol.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        icon.src = "assets/images/matahari.png";
        localStorage.setItem("theme","light");

    }else{

        icon.src = "assets/images/bulan.png";
        localStorage.setItem("theme","dark");

    }

});