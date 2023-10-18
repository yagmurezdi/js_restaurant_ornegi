let hesap = 0;

while (true) {
    const birinciDeger = parseInt(prompt("Restorantımıza Hoşgeldiniz\n 1-Menü\n 2-Çıkış \n Lütfen Seçiminizi Yapınız\n"));

    if (birinciDeger === 1) {
        const menu = ["1-Yemekler", "2-Çorbalar", "3-Tatlılar", "4-Salatalar", "Makarna"];
        for (let i = 0; i < menu.length; i++) {
            console.log(menu[i]);
        }
        const ikinciDeger = parseInt(prompt("Lütfen Seçiminizi Yapınız\n"));

        if (ikinciDeger === 1) {
            console.log("yemekler");
            const yemekler = ["1-Pide: 30 Tl", "2-Mantı:50 TL", "3-Sarma:40 TL", "4-Ciğer:50 TL", "5-Köfte:45 TL"];
            for (let i = 0; i < yemekler.length; i++) {
                console.log(yemekler[i]);
            }
            const ucuncuDeger = parseInt(prompt("Lütfen Seçiminizi Yapınız\n"));

            switch (ucuncuDeger) {
                case 1:
                    console.log("Seçiminiz:", yemekler[0]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 2:
                    console.log("Seçiminiz:", yemekler[1]);
                    hesap += 50;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 3:
                    console.log("Seçiminiz:", yemekler[2]);
                    hesap += 40;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 4:
                    console.log("Seçiminiz:", yemekler[3]);
                    hesap += 50;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 5:
                    console.log("Seçiminiz:", yemekler[4]);
                    hesap += 45;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                default:
                    console.log("Hatalı Giriş");
                    break;
            }
        } else if (ikinciDeger === 2) {
            const corbalar = ["1-Mercimek:30 TL", "2-Paça:30 TL", "3-Yayla:30 TL", "4-Mantar:30 TL", "5-Tarhana:30 TL"];
            for (let i = 0; i < corbalar.length; i++) {
                console.log(corbalar[i]);
            }
            const ucuncuDeger = parseInt(prompt("Lütfen Seçiminizi Yapınız\n"));

            switch (ucuncuDeger) {
                case 1:
                    console.log("Seçiminiz:", corbalar[0]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 2:
                    console.log("Seçiminiz:", corbalar[1]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 3:
                    console.log("Seçiminiz:", corbalar[2]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 4:
                    console.log("Seçiminiz:", corbalar[3]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 5:
                    console.log("Seçiminiz:", corbalar[4]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                default:
                    console.log("Hatalı Giriş");
                    break;
            }
        } else if (ikinciDeger === 3) {
            const tatlilar = ["1-Baklava:40 TL", "2-Sütlaç:20 TL", "3-Kazandibi:25 TL", "4-Künefe:40 TL", "5-Kabak:20 TL"];
            for (let i = 0; i < tatlilar.length; i++) {
                console.log(tatlilar[i]);
            }
            const ucuncuDeger = parseInt(prompt("Lütfen Seçiminizi Yapınız\n"));

            switch (ucuncuDeger) {
                case 1:
                    console.log("Seçiminiz:", tatlilar[0]);
                    hesap += 40;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 2:
                    console.log("Seçiminiz:", tatlilar[1]);
                    hesap += 20;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 3:
                    console.log("Seçiminiz:", tatlilar[2]);
                    hesap += 25;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 4:
                    console.log("Seçiminiz:", tatlilar[3]);
                    hesap += 40;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 5:
                    console.log("Seçiminiz:", tatlilar[4]);
                    hesap += 20;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                default:
                    console.log("Hatalı Giriş");
                    break;
            }
        } else if (ikinciDeger === 4) {
            const salatalar = ["1-Çoban:25 TL", "2-Mevsim:25 TL", "3-Rus:30 TL", "4-Sezar:35 TL", "5-Gavudağı:25 TL"];
            for (let i = 0; i < salatalar.length; i++) {
                console.log(salatalar[i]);
            }
            const ucuncuDeger = parseInt(prompt("Lütfen Seçiminizi Yapınız\n"));

            switch (ucuncuDeger) {
                case 1:
                    console.log("Seçiminiz:", salatalar[0]);
                    hesap += 25;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 2:
                    console.log("Seçiminiz:", salatalar[1]);
                    hesap += 25;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 3:
                    console.log("Seçiminiz:", salatalar[2]);
                    hesap += 30;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 4:
                    console.log("Seçiminiz:", salatalar[3]);
                    hesap += 35;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                case 5:
                    console.log("Seçiminiz:", salatalar[4]);
                    hesap += 25;
                    console.log("Toplam Hesabınız:", hesap);
                    break;
                default:
                    console.log("Hatalı Giriş");
                    break;
            }
        } else {
            console.log("Hatalı Giriş");
        }
    } else if (birinciDeger === 0) {
        console.log("Çıkış yaptınız tekrar bekleriz...");
        break;
    } else {
        console.log("Hatalı Giriş");
    }
}