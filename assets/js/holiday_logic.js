// Wish data ================================================================================================================
const wish = {
    "ha_vu": "Wishing you a joyful Christmas and a wonderful New Year filled with happiness and love 💙 你笑起来真好看 🌝 <br> Giáng Sinh an lành và Năm mới hạnh phúc ạ 🥰",
    "hiep": "Chúc em và trứng sớm hái trái ngọt, Giáng sinh an lành và ấm áp nhé bro 💖",
    "hoang_anh": "Chúc mùa khoai 24 năm của em zai anh sớm thu hoạch, mọi điều như ý và thật may mắn trong năm mới nhé 💖",
    "phuong_nam": "Chúc bro sớm hái trái ngọt (mặc dù chắc hái cmnr), năm mới vạn sự như ý và ngày càng phát triển nha 💖",
    "thu_thao": "Chúc em pé sớm hái trái ngọt với bro ngấy của anh, luôn thành công và gặp thật nhiều may mắn cũng như phát triển vượt bậc trong năm tuổi dương nheee 💖",
    "ngoc_anh": "Chúc Én sớm tìm được người đàn ông của đời mình, Giáng Sinh an lành và năm mới thật nhìu niềm vui ạ 💖",
    "xuan_hoang": "Chúc anh Hoàng Giáng Sinh an lành và năm mới ấm áp, sớm hái trái ngọt với bạn Kế toán nhe ạ 💖",
    "pham_hao": "Chúc chị Hảo cùng gia đình có một mùa Giáng Sinh ấm áp, một năm mới tràn ngập niềm vui và may mắn ạ 💖",
    "ha_mi": "Chúc Mi giáng sinh an lành, năm mới sớm tìm được ý trung nhân em nhéeeee 💖",
    "linh_do": "Chúc thầy Giáng sinh và năm mới ấm áp, sang năm mọi thứ đều gấp đôi nha ạaaa 💖",
    "quang_dong": "Chúc em Đồng giáng sinh ấm áp, năm mới thắng lợi mới, lấy vợ luôn nhé =)))",
    "duc_anh": "Chúc đại ca Đức Anh cùng pé Heo và chị 1 giáng sinh ấm áp, năm mới nhiều thành công mới, could start from Heo's next gen ạ 💖",
    "hung_nguyen": "Chúc a Hưng một giáng sinh và năm mới an lành, năm mới thắng lợi mới ạ 💖",
    "anh_dao": "Chúc chị Đào và gia đình nhỏ một Giáng Sinh và Năm mới ấm áp, công việc thuận lợi và gặp thật nhiều may mắn nha chịiiiii 💖",
    "trang_nguyen": "Chúc Trang giáng sinh an lành, năm mới sớm tìm được ý trung nhân cậu nhéeeee 💖",
    "minh_thong": "Chúc em Thông giáng sinh ấm áp, năm mới thắng lợi mới, lấy vợ luôn nhé =)))",
    "quang_huy": "Chúc em Huy giáng sinh ấm áp, năm mới thắng thành công may mắn, ngày càng oánh póng pàn hay và sớm có người thương nha 💖",
    "chien_hoang": "Chúc a Chiến giáng sinh an lành, thật nhiều thành công và may mắn trong năm mới ạ 💖",
    "lan_tran": "Chúc chị Lan giáng sinh an lành, thật nhiều thành công và may mắn trong năm mới ạ 💖",
    "trinh_nguyen": "Chúc chị Trinh Giáng Sinh an lành, năm mới thật nhiều niềm vui mới và người thương xuất hiện cùng hái trái ngọt nha ạ 💖",
    "quynh_dieu": "Chúc chị Diệu cùng gia đình và các bạn nhỏ Giáng Sinh an lành, năm mới may mắn và thành công, chúc chị 1 đời an yên ạaaa 💖",
    "huong_pham": "Chúc Hương cùng gia đình có một mùa Giáng Sinh ấm áp, một năm mới tràn ngập niềm vui và may mắn ạ 💖",
    "huyen_tran": "Chúc Trân sớm hái trái ngọt với tình yêu của em, Giáng sinh ấm áp và năm tuổi dương thật thành công nheee 💖",
    "vi_nguyen": "Chúc chị Vị và gia đình nhỏ một Giáng Sinh và Năm mới ấm áp, công việc thuận lợi và gặp thật nhiều may mắn nha chịiiiii 💖",
    "chung_hin": "Chúc đại ca cùng chị và em bé Giáng Sinh an lành, năm mới thật nhiều may mắn và thành công ạ 💖",
    "ly_phung": "Chúc chị cùng a Chung và em bé Giáng Sinh an lành, năm mới thật nhiều may mắn và thành công ạ 💖"
}
// End wish data ================================================================================================================

// Greeting ================================================================================================================
var viewer;
viewer = window.prompt("Hiiiii, what's your nameee? 🥰","");
viewer = (viewer == "" || viewer == null) ? "my fen 💖" : viewer
alert("Welcome " + viewer + " to the cozy Christmas Eve of Ace! 💙");

// Customization ================================================================================================================
const title = document.getElementsByClassName("home__title");
title[0].innerHTML = "Howdyyy " + viewer + " <br> Merry Christmas and <br> Happy New Year!"
if (viewer == "Ha Vu" || viewer == "Ha" || viewer == "Hà Vũ" || viewer == "Hà") {
    const desc = document.getElementsByClassName("home__description");
    desc[0].innerHTML = "Christmas and a new year is about to begin, all good wishes and successes. And you should just be youu, so xịn and prettiiiiiiiii 💙"
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.ha_vu
}
if (viewer == "Hiệp" || viewer == "Hiep" || viewer == "Hiệp Hoàng") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.hiep
}
if (viewer == "Hoàng Anh" || viewer == "Hoang Anh") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.hoang_anh
}
if (viewer == "Phương Nam" || viewer == "Phuong Nam") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.phuong_nam
}
if (viewer == "Thu Thảo" || viewer == "Sunne") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.thu_thao
}
if (viewer == "Ngọc Ánh" || viewer == "Én") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.ngoc_anh
}
if (viewer == "Xuân Hoàng" || viewer == "Chaiun") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.xuan_hoang
}
if (viewer == "Phạm Hảo" || viewer == "Hảo Phạm" || viewer == "Hảo") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.pham_hao
}
if (viewer == "Hà Mi" || viewer == "Mi") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.ha_mi
}
if (viewer == "Linh Đỗ" || viewer == "Linh Do") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.lan_tran
}
if (viewer == "Quang Đồng" || viewer == "Đồng") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.quang_dong
}
if (viewer == "Đức Anh" || viewer == "Duncan") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.duc_anh
}
if (viewer == "Hưng" || viewer == "Hưng Nguyễn") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.hung_nguyen
}
if (viewer == "Anh Đào" || viewer == "Đào") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.anh_dao
}
if (viewer == "Trang Nguyễn" || viewer == "Trang Nguyen") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.trang_nguyen
}
if (viewer == "Minh Thông" || viewer == "Thông") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.minh_thong
}
if (viewer == "Quang Huy" || viewer == "Huy Bach") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.quang_huy
}
if (viewer == "Chiến Hoàng" || viewer == "Chiến") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.chien_hoang
}
if (viewer == "Lan Trần" || viewer == "Lan") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.lan_tran
}
if (viewer == "Trinh Nguyễn" || viewer == "Trinh") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.trinh_nguyen
}
if (viewer == "Quỳnh Diệu" || viewer == "Dieu" || viewer == "Diệu") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.quynh_dieu
}
if (viewer == "Hương" || viewer == "Hương Phạm") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.huong_pham
}
if (viewer == "Huyền Trân" || viewer == "Trân") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.huyen_tran
}
if (viewer == "Vị" || viewer == "Vị Nguyễn") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.vi_nguyen
}
if (viewer == "Chung" || viewer == "Hin") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.chung_hin
}
if (viewer == "Lý" || viewer == "Ly Phung") {
    const wish_desc = document.getElementsByClassName("celebrate__description");
    wish_desc[0].innerHTML = wish.ly_phung
}


// Audio part
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundAudio');
    audio.volume = 0.168
    
    // Function to play the audio
    function playAudio() {
        audio.play();
    }
    
    // Check if the audio can be played and play it
    function playAudioWithUserInteraction() {
        if (audio.paused) {
        audio.play();
        }
    }
    
    // Add an event listener to the document
    document.addEventListener('click', playAudioWithUserInteraction);
    
    // Pause the audio when the user leaves the page
    window.addEventListener('beforeunload', function() {
        audio.pause();
    });
    
    // Start playing the audio
    playAudio();                    
});

function updateCountdown() {
const now = new Date();
const targetDate = new Date(now.getFullYear(), 11, 25); // December month is 11 (0-based index)

const days = Math.floor((targetDate - now) / (1000 * 60 * 60 * 24));
const hours = Math.floor((targetDate - now) / (1000 * 60 * 60)) % 24;
const minutes = Math.floor((targetDate - now) / (1000 * 60)) % 60;
const seconds = Math.floor((targetDate - now) / 1000) % 60;

document.getElementById('days').textContent = formatTime(days);
document.getElementById('hours').textContent = formatTime(hours);
document.getElementById('minutes').textContent = formatTime(minutes);
document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
return time < 10 ? `0${time}` : time;
}

// Initial countdown update
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);