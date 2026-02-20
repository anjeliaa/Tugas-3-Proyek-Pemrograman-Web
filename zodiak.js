const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan tanggal lahir: ", function(tanggal) {
    rl.question("Masukkan bulan lahir: ", function(bulan) {
    
    let zodiak = "";

    if ((tanggal >= 21 && bulan == 3) || (tanggal <= 19 && bulan == 4)) {
        zodiak = "Aries";
    }
    else if ((tanggal >= 20 && bulan == 4) || (tanggal <= 20 && bulan == 5)) {
        zodiak = "Taurus";
    }
    else if ((tanggal >= 21 && bulan == 5) || (tanggal <= 20 && bulan == 6)) {
        zodiak = "Gemini";
    }
    else if ((tanggal >= 21 && bulan == 6) || (tanggal <= 22 && bulan == 7)) {
        zodiak = "Cancer";
    }
    else if ((tanggal >= 23 && bulan == 7) || (tanggal <= 22 && bulan == 8)) {
        zodiak = "Leo";
    }
    else if ((tanggal >= 23 && bulan == 8) || (tanggal <= 22 && bulan == 9)) {
        zodiak = "Virgo";
    }
    else if ((tanggal >= 23 && bulan == 9) || (tanggal <= 22 && bulan == 10)) {
        zodiak = "Libra";
    }
    else if ((tanggal >= 23 && bulan == 10) || (tanggal <= 21 && bulan == 11)) {
        zodiak = "Scorpio";
    }
    else if ((tanggal >= 22 && bulan == 11) || (tanggal <= 21 && bulan == 12)) {
        zodiak = "Sagittarius";
    }
    else if ((tanggal >= 22 && bulan == 12) || (tanggal <= 19 && bulan == 1)) {
        zodiak = "Capricorn";
    }
    else if ((tanggal >= 20 && bulan == 1) || (tanggal <= 18 && bulan == 2)) {
        zodiak = "Aquarius";
    }
    else if ((tanggal >= 19 && bulan == 2) || (tanggal <= 20 && bulan == 3)) {
        zodiak = "Pisces";
    }
    else {
        zodiak = "tidak diketahui";
    }
    
    console.log("Berdasarkan tanggal dan bulan lahirmu " + tanggal + "/" + bulan + ", zodiakmu adalah " + zodiak + ".");

rl.close();
    });
});
