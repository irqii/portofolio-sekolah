function detail(){
    alert("ini portofolio Irqi");
}
function ubahtext(){
    document.getElementById("keahlian").innerHTML = "makasih ya udah di buka";
} 
function kirimPesan() {
    let isiPesan = document.getElementById("pesan").value;
    alert(isiPesan);
}
function darkMode(){
    document.body.style.backgroundColor ="black";
    document.body.style.color="white";
    document.getElementById("mode").innerHTML = "whiteMode";
    document.getElementById("mode").setAttribute("onclick", "whiteMode()");
}
function whiteMode(){
    document.body.style.backgroundColor ="white";
    document.body.style.color="black";
    document.getElementById("mode").innerHTML = "darkMode";
    document.getElementById("mode").setAttribute("onclick", "darkMode()");
}

function lihatDeskripsi1(){ 
    document.getElementById("deskripsi1").innerHTML = 
    "ini adalah foto estetik irqi.";
    document.getElementById("detail1").innerHTML = "tutup";
    document.getElementById("detail1").setAttribute("onclick", "Tutup1()");
}
function Tutup1(){
    document.getElementById("deskripsi1").innerHTML = 
    "";
    document.getElementById("detail1").innerHTML = "Lihat Ditail";
    document.getElementById("detail1").setAttribute("onclick", "lihatDeskripsi1()");
}

function lihatDeskripsi2(){
    document.getElementById("deskripsi2").innerHTML = 
    "dari dulu itu Irqi kece abiss bahkan tembus hingga 9999Auraa";
    document.getElementById("detail2").innerHTML = "tutup";
    document.getElementById("detail2").setAttribute("onclick", "Tutup2()");
}
function Tutup2(){
    document.getElementById("deskripsi2").innerHTML = 
    "";
    document.getElementById("detail2").innerHTML = "Lihat Ditail";
    document.getElementById("detail2").setAttribute("onclick", "lihatDeskripsi2()");
}

function lihatDeskripsi3(){
    document.getElementById("deskripsi3").innerHTML = 
    "Bahkan dari kecil irqi sudah rajin belajar dan mengerjakan tugas dari sekolah";
    document.getElementById("detail3").innerHTML = "tutup";
    document.getElementById("detail3").setAttribute("onclick", "Tutup3()");
}
function Tutup3(){
    document.getElementById("deskripsi3").innerHTML = 
    "";
    document.getElementById("detail3").innerHTML = "Lihat Ditail";
    document.getElementById("detail3").setAttribute("onclick", "lihatDeskripsi3()");
}

function lihatDeskripsi4(){
    document.getElementById("deskripsi4").innerHTML = 
    "ini adalah foto estetik irqi.";
    document.getElementById("detail4").innerHTML = "tutup";
    document.getElementById("detail4").setAttribute("onclick", "Tutup4()");
}
function Tutup4(){
    document.getElementById("deskripsi4").innerHTML = 
    "";
    document.getElementById("detail4").innerHTML = "Lihat Ditail";
    document.getElementById("detail4").setAttribute("onclick", "lihatDeskripsi4()");
}

function lihatDeskripsi5(){
    document.getElementById("deskripsi5").innerHTML = 
    "ini adalah foto estetik irqi.";
    document.getElementById("detail5").innerHTML = "tutup";
    document.getElementById("detail5").setAttribute("onclick", "Tutup5()");
}
function Tutup5(){
    document.getElementById("deskripsi5").innerHTML = 
    "";
    document.getElementById("detail5").innerHTML = "Lihat Ditail";
    document.getElementById("detail5").setAttribute("onclick", "lihatDeskripsi5()");
}
