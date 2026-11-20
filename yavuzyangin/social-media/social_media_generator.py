"""
Yavuz Yangın Güvenlik - Çok Kanallı Sosyal Medya İçerik Adaptörü
Instagram, LinkedIn ve X (Twitter) için tek tıkla kurumsal metin üretici.
"""

import sys

def adapt_content(topic, target_url):
    print(f"\n==========================================")
    print(f"Konu: {topic}")
    print(f"Bağlantı: {target_url}")
    print(f"==========================================\n")
    
    # 1. LinkedIn Format (B2B, Resmi, Madde İmli)
    linkedin = f"""[LINKEDIN B2B PAYLAŞIMI]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Yangın güvenliği bir formalite değil; tesisinizin sürdürülebilirliğinin teminatıdır.

Tesis ve İSG yöneticilerinin en çok karşılaştığı zorluklardan biri, mevzuata tam uyumlu ekipman seçimi ve periyodik takip süreçleridir. {topic} konusunda işletmelerin dikkat etmesi gereken kritik aşamaları teknik ekibimizle derledik:

🔹 TSE EN 3-7 standartlarına uygunluk ve etiket denetimi
🔹 6331 sayılı İSG Kanunu ve BYKHY gereksinimleri
🔹 Periyodik bakım takviminin aksatılmaması ve dijital kayıt

Detaylı teknik kılavuzumuzu ve işletmenize özel kontrol listesini incelemek için bağlantıyı ziyaret edebilirsiniz:
👉 {target_url}

#YangınGüvenliği #İSG #TesisYönetimi #İşSağlığıVeGüvenliği #YavuzYangın #B2BGüvenlik
"""
    print(linkedin)

    # 2. Instagram Format (Kanca, Duygu, Emojiler, Karusel Çağrısı)
    instagram = f"""[INSTAGRAM GÖNDERİSİ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Yangın anında tetiğe bastığınızda o tüp gerçekten çalışacak mı? 🧯⚠️

{topic} hakkında bilmeniz gerekenleri ve sahada en sık yapılan 3 ölümcül hatayı özetledik!

1️⃣ Manometre ibresi her zaman YEŞİL alanda olmalı.
2️⃣ Bakım etiketi 1 yıldan eski olmamalı.
3️⃣ Cihazın önü asla palet veya kolilerle kapatılmamalı.

İşletmenizi ve sevdiklerinizi riske atmayın. Karuseli kaydedin ve kurum içi ekibinizle paylaşın! 📌

Detaylı rehber profildeki linkte! 🔗
🌐 {target_url}

#YavuzYangın #YangınTüpü #İşletmeGüvenliği #İSGRehberi #YangınEğitimi #FabrikaGüvenliği
"""
    print(instagram)

    # 3. X (Twitter) Format (Kısa, Vurucu, 280 Karakter Altı)
    x_post = f"""[X / TWITTER PAYLAŞIMI]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Yangın tüpü almak tek seferlik bir işlem değil, düzenli takip gerektiren bir güvenlik sürecidir. 🧯

{topic[:65]}... için İSG ve TSE standartlarına uygun rehberimiz yayında:

👇 İnceleyin:
{target_url}

#YangınGüvenliği #İSG #YavuzYangın
"""
    print(x_post)

if __name__ == "__main__":
    sample_topic = "Yangın Tüpü Alırken Nelere Dikkat Edilmeli?"
    sample_url = "https://www.koraytasan.com/yavuzyangin/blog/yangin-tupu-alirken-nelere-dikkat-edilmeli.html"
    adapt_content(sample_topic, sample_url)
