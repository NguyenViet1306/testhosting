const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// const namHienTai = new Date().getFullYear();

const nam= +prompt("nhập năm")
const thang= +prompt("nhập tháng")
const ngay= +prompt("nhập ngày")
const gio= +prompt("nhập giờ ")
const phut= +prompt("nhập phút")
// const thang= +prompt("nhập giây")

const namMoi = new Date(`${thang} ${ngay} ${nam} ${gio}:${phut}:00`);


// Update countdown time
function coundown() {
    const tgHienTai = new Date();
    const tgConLai = namMoi - tgHienTai;

    if (tgConLai > 0) {

        const d = Math.floor(tgConLai / 1000 / 60 / 60 / 24);
        const h = Math.floor(tgConLai / 1000 / 60 / 60) % 24;
        const m = Math.floor(tgConLai / 1000 / 60) % 60;
        const s = Math.floor(tgConLai / 1000) % 60;

        days.innerHTML = d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;
    }
    // else {
        if (tgConLai == 0) {
            confirm("CHÚC MỪNG NĂM MỚI")
        }
        // if ((tgConLai < 0)) {
        //     confirm("Nhập lại thông tin")
        // }
    // }
}
setInterval(coundown, 1000);
