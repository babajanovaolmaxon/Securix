// 1. XAKERLIK HUJUMI SIMULYATORI (PAROL KUCHI)
function simulyatsiyaParol() {
    const parol = document.getElementById("parolTekshir").value;
    const natija = document.getElementById("parolNatija");

    if (parol === "") {
        chiqarKiberNatija(natija, "sec-crit", "[XATO]: Parol kiritilmadi!");
        return;
    }

    const uzunlik = parol.length;
    // Katta harf, son va maxsus belgilarni tekshirish (regex ishlatsa ham bo'ladi, lekin tushunarli bo'lishi uchun mantiq bilan qilingan)
    let borSon = false;
    let borMaxsus = false;
    const maxsus Belgilar = ["@", "#", "$", "%", "*", "!", "&", "_"];

    for (let i = 0; i < uzunlik; i++) {
        if (!isNaN(parol[i])) borSon = true;
        if (maxsusBelgilar.includes(parol[i])) borMaxsus = true;
    }

    // Xavfsizlik darajasi zanjiri
    if (uzunlik < 6) {
        chiqarKiberNatija(natija, "sec-crit", `DARADA: JUDA ZAIF!\nBuzilish vaqti: 0.02 soniya. 🚨\nTavsiya: Kamida 8 ta belgi, son va maxsus belgilardan foydalaning.`);
    } else if (uzunlik >= 6 && uzunlik < 10 && (!borSon || !borMaxsus)) {
        chiqarKiberNatija(natija, "sec-warn", `DARAJASI: O'RTACHA.\nBuzilish vaqti: taxminan 4 soat. ⚠️\nTavsiya: Parolga maxsus belgilar (@, #, $) qo'shing.`);
    } else if (uzunlik >= 10 && borSon && borMaxsus) {
        chiqarKiberNatija(natija, "sec-high", `DARAJASI: HARBIIY QALQON! ✅\nBuzilish vaqti: 450 yil. Superkompyuterlar ham ojiz. Tizim xavfsiz.`);
    } else {
        chiqarKiberNatija(natija, "sec-warn", `DARAJASI: QONIQARLI.\nBuzilish vaqti: 3 kun. Xavfsizlikni oshirish tavsiya etiladi.`);
    }
}

// 2. IP MANZIL SKANERI
function skanerIP() {
    const ip = document.getElementById("ipInput").value.trim();
    const natija = document.getElementById("ipNatija");

    if (ip === "") {
        chiqarKiberNatija(natija, "sec-crit", "[XATO]: IP manzil kiritilmadi!");
        return;
    }

    // IP manzillar tuzilishini sodda tekshirish (nuqtalar soni)
    const nuqtalar = ip.split(".");

    if (nuqtalar.length !== 4) {
        chiqarKiberNatija(natija, "sec-crit", "[XATO]: IP manzil formati noto'g'ri! (Masalan: 192.168.1.1 kabi yozing)");
        return;
    }

    // Qora ro'yxat simulyatsiyasi (Xavfli IP zonalar)
    if (ip.startsWith("195.") || ip.startsWith("45.")) {
        chiqarKiberNatija(natija, "sec-crit", `IP STATUSI: XAVFLI! 🚨\nUshbu IP manzil DDOS hujumlar va zararli botnet tizimlariga aloqador deb topilgan. Bloklandi!`);
    } else if (ip.startsWith("192.168.") || ip.startsWith("10.")) {
        chiqarKiberNatija(natija, "sec-high", `IP STATUSI: XAVFSIZ (Lokal Tarmoq). ✅\nBu sizning ichki uy yoki ofis tarmog'ingiz. Tashqi xavflar aniqlanmadi.`);
    } else {
        chiqarKiberNatija(natija, "sec-warn", `IP STATUSI: NEUTRAL. 🌐\nTashqi global IP manzil. Trafik xavfsiz, lekin shaxsiy VPN himoyasini yoqish tavsiya etiladi.`);
    }
}

// 3. 2FA KOD GENERATOR
function yarat2FA() {
    const tizim = document.getElementById("tizimNomi").value.trim();
    const natija = document.getElementById("faNatija");

    if (tizim === "") {
        chiqarKiberNatija(natija, "sec-crit", "[XATO]: Tizim nomini kiriting!");
        return;
    }

    // Tasodifiy 6 xonali son yaratish (100000 dan 999999 gacha)
    const kod2fa = Math.floor(100000 + Math.random() * 900000);

    chiqarKiberNatija(natija, "sec-high", `TIZIM: ${tizim.toUpperCase()}\nBir martalik kod: ${kod2fa} 🔐\nEslatma: Ushbu kod faqat 10 soniya davomida faol bo'ladi!`);
}

// Global yordamchi funksiya
function chiqarKiberNatija(element, kiberStil, matn) {
    element.style.display = "block";
    element.className = "result " + kiberStil;
    // Qatorlarni pastga tushirish uchun textContent emas, innerHTML dan foydalanamiz (yoki innerText)
    element.innerText = matn;
}
