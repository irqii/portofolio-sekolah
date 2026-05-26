function detail(){
    alert("ini portofolio Irqi");
}
 function kirimPesan() {
    let pesan = document.getElementById("pesan").value;
    let nomor = "6282196999916";
    let url = `https://wa.me/${6282196999916}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
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
    "Saya juga menyukai hal-hal yang berbau estetik, mulai dari fotografi, desain tampilan, hingga suasana yang nyaman dan menarik secara visual. Bagi saya, keindahan dalam detail kecil dapat memberikan inspirasi dan membuat sesuatu terlihat lebih hidup, termasuk dalam desain website dan karya digital yang saya buat..";
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
    "Saya dikenal sebagai pribadi yang percaya diri, tampil rapi, dan memiliki gaya yang estetik. Menurut teman-teman saya, saya memiliki penampilan yang kece dan menarik, sehingga saya cukup suka mengekspresikan diri melalui foto, fashion sederhana, dan tampilan visual yang keren namun tetap elegan.";
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
    "Sejak kecil saya dikenal sebagai pribadi yang rajin dan disiplin, bahkan sejak masih duduk di bangku TK. Saya terbiasa menyelesaikan tugas dengan baik, terus belajar hal baru, dan berusaha menjadi pribadi yang bertanggung jawab dalam pendidikan maupun kehidupan sehari-hari.";
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
    "Saat ini saya merupakan seorang pelajar di SMKN 1 Makassar dengan jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki minat besar di bidang teknologi, khususnya web development dan desain antarmuka. Selama belajar di sekolah, saya terus mengembangkan kemampuan dalam HTML, CSS, Bootstrap, dan dasar pemrograman untuk mempersiapkan diri menjadi seorang programmer di masa depan.";
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
    "Salah satu hobi saya adalah bermain Mobile Legends. Selain menjadi hiburan di waktu luang, game ini juga melatih kerja sama tim, strategi, komunikasi, dan kemampuan mengambil keputusan dengan cepat saat bermain bersama teman.Saya cukup tertarik mempelajari role, hero, dan strategi permainan agar dapat terus berkembang dan bermain lebih baik.";
    document.getElementById("detail5").innerHTML = "tutup";
    document.getElementById("detail5").setAttribute("onclick", "Tutup5()");
}
function Tutup5(){
    document.getElementById("deskripsi5").innerHTML = 
    "";
    document.getElementById("detail5").innerHTML = "Lihat Ditail";
    document.getElementById("detail5").setAttribute("onclick", "lihatDeskripsi5()");
}
