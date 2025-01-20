const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let imgBox = document.getElementById("imgBox");
let QR_img = document.getElementById("QR_img");
let TeQr = document.getElementById("TeQr")
function generateQR() {
    if (TeQr.value.length > 0) {
        QR_img.src = api + TeQr.value;
        imgBox.classList.add("show-img")
    }
    else{
        TeQr.classList.add("error");
        setTimeout(()=>{
            TeQr.classList.remove("error");
        },1000)
    }
}