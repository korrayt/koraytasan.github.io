# BİR DOST — Web Sitesi / Pilot Demo

**Slogan:** İyilik sipariş et. Ulaştığını gör.

Bu paket, yatırımcı sunumunda ve tasarım değerlendirmesinde kullanılabilecek, mobil uyumlu **etkileşimli bir web demo sürümüdür**. İçinde gerçek ödeme sistemi, gerçek üyelik doğrulaması, canlı kurye bağlantısı, otomatik abonelik tahsilatı veya gerçek teslimat videosu bulunmaz.

## Başlatma

1. ZIP dosyasını çıkartın.
2. **index.html** dosyasını tarayıcıda açın. Chrome, Firefox veya Edge kullanılabilir.
3. Çalıştırmak için npm, paket yükleme veya özel bir servis gerekmez.

Daha güvenilir yerel sunucu için klasörde terminal açıp `python -m http.server 8000` çalıştırın; ardından `http://localhost:8000` adresini açın. Dosyalar doğrudan bir statik site sunucusuna veya Vercel projesine yüklenebilir.

## Yapabileceklerin

- Örnek Ankara destek noktalarını temsilî haritadan seçmek, isimle aramak, yeni örnek nokta oluşturmak.
- Mama paketini ve adetini seçmek; tek seferlik veya her gün / 3 günde bir / haftalık / aylık düzenli destek planı oluşturmak.
- Örnek fiyatları ve yaklaşık aylık maliyeti görüntülemek.
- Demo siparişi oluşturmak (ödeme alınmaz), tarayıcı içinde saklamak.
- Şifresiz **demo kullanıcı hesabı** ile siparişleri ve düzenli destekleri görmek, planı duraklatmak.
- Kurumsal iş birliği demo talebi kaydetmek.
- Altbilgideki **Demo Yönetim Paneli** üzerinden mama ürünü, fiyat, nokta ve sipariş durumlarını yönetmek; kayıtlı siparişe geçerli YouTube veya MP4 video bağlantısı eklemek; demo verisini JSON olarak dışa aktarmak.
- Sıfırlamak için demo panelinde “Demo Verilerini Sıfırla” düğmesini kullanmak.

## Proje dosyaları

- `index.html` — tüm sayfa yapısı.
- `style.css` — responsive tasarım sistemi.
- `app.js` — etkileşimler, sipariş akışı ve demo paneli.
- `assets/` — hero, fotoğraf parçaları, SVG harita, logo, simge.
- `marka/` — logo vektörleri, ambalaj / kurye / sosyal medya SVG konseptleri, onaylı tasarım referansları.
- `masaustu-onizleme.png`, `mobil-onizleme.png` — doğrulama için alınan ekran görselleri.
- `MARKA-KIMLIGI.md` — marka dili ve kullanım notları.
- `YAYINA-GECIS.md` — gerçek uygulamaya geçiş için ihtiyaçlar.

## Önemli dürüstlük notu

**Harita temsili, noktalar örnek, fiyatlar örnektir.** Görseller konsepttir; hikâye kartları gerçek teslimat değildir. “Ferhunde Teyze” dahil örnek isimler tanıtım senaryosudur. Getir ve Yemeksepeti isimleri yalnızca olası pazar / iş birliği bağlamında anılır; mevcut anlaşma olduğu iddia edilmez.

**KVKK / güvenlik:** Demo verileri tarayıcının `localStorage` alanında tutulur. Bu demo şifresizdir ve gerçek kişisel verilerle / ödeme bilgileriyle üretimde kullanılmamalıdır. Canlı sisteme geçmeden önce sunucu taraflı güvenli oturum, erişim kontrolü, KVKK süreçleri, ödeme altyapısı, gerçek kurye operasyonu, hayvan refahı protokolü ve teslimat doğrulaması kurulmalıdır.
