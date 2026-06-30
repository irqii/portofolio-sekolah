function kirimPesan() {
    const pesan = document.getElementById("pesan").value;
    const nomor = "6282196999916";

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}