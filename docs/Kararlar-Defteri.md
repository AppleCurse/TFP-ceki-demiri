# Kararlar Defteri

**Neden var:** Kararlar sohbet metninde kalıp kaybolmasın diye. Bu dosyadaki her satır ya bir kabul edilmiş karardır, ya açıkça işaretlenmiş bir teyit bekleyen konudur. Yeni bir karar konuşmada alındığında önce buraya yazılır, sonra ilgili belgeye işlenir. Burada olmayan karar, alınmamış sayılır.

**Durum işaretleri:**
- ✅ İşlendi — ilgili belgeye/yazıya girdi
- 🟡 Kabul edildi, işlenecek — karar net, henüz belgeye yazılmadı
- 🔴 TEYİT GEREKLİ — dış onay (hukuk, mali müşavir, danışma kurulu) olmadan uygulanmaz
- ⚪ Askıda — karar bekliyor, varsayılanla ilerlenmez

---

## A. Değişmez Sınır Kararları

| # | Karar | Durum | Nereye işlendi / işlenecek |
|---|---|---|---|
| A1 | **Üç kırmızı çizgi:** (1) Vekalet alınmaz, (2) Emanet alınmaz (para/çek/tapu/mal bizde gece yatmaz), (3) Bankayla gizli protokol/anlaşma yapılmaz — işlem limit sahibinin kendi bankasında yapılır | ✅ | `00-CEKI-DEMIRI-MANIFESTO.md` §2–3, Ana Dosya §1.2 |
| A2 | **Karar mercii değil, kontrol mercii.** Onay bankada, karar taraflarda; TFP bakar ve kaydeder | ✅ | Ana Dosya §1.4, Operasyon adım 08, site hero |
| A3 | **TFP'den en az 2 kişi** her banka buluşmasında hazır bulunur; çift imzalı işlem tutanağı | ✅ | Operasyon adım 08, manifesto §3 |
| A4 | **17:30 Gün Sonu Kuralı:** İşlem gün içinde yetişmezse herkes evrakıyla bankadan ayrılır; gece emanet sıfır, ertesi sabah yeniden buluşulur | ✅ | Operasyon adım 08 |
| A5 | Belge kiralanmaz, **gerçek iş ortaklığı** kurulur (Çeki Demiri = bağlayıcı, "al-ver" değil) | ✅ | Manifesto kural 2, Ana Dosya §1.4 |
| A6 | Para hiçbir tek tarafın elinde toplanmaz; dağıtım bankada, herkesin kendi hesabına yapılır | ✅ | Ana Dosya §1.2, Operasyon adım 08 |

## B. Model ve Gelir Kararları

| # | Karar | Durum | Not |
|---|---|---|---|
| B1 | Aidat yok, peşin dosya masrafı yok; ücret yalnızca tamamlanan işlemden | 🟡 | Yapı kabul; oranlar sabitlenmez |
| B2 | Komisyon sözleşmede **"faiz içermeyen sabit hizmet bedeli"** olarak yazılır; iskonto faizi bankanın kendi ürünüdür | 🟡 | Operasyon/Ana Dosya §9'a işlenecek |
| B3 | %5–10 → %1–2 hedef bandı | 🔴 | Ana Dosya §9 zaten "onaylanmış fiyat değildir" der; pilot verisiyle kesinleşir |
| B4 | **İşlem alt limiti:** altındaki talepler kapıdan kovulmaz, "havuz dışı yönlendirme" (kendi bankasına) | 🟡 | Tutar kararı pilota bağlanır |
| B5 | **Faizsiz kapı:** murabaha / katılım bankası modeli talep edenler için ayrı yol | 🔴 | Danışman (konuyla ilgili hoca/danışma kurulu) onayı şart; îne satışı değil, gerçek mal + üçüncü taraf / katılım bankası |
| B6 | **Avans çeki hukuki kılıfı:** hatır çeki yok; ortaklık avansı olarak avans çeki, deftere avans işlenir, bankaya teminat | 🔴 | Brif hazır: `Avans-Ortaklik-Brifi.md` — avukat + mali müşavir onayı şart; arkasında yazılı ortaklık/avans sözleşmesi |

## C. Operasyon ve Güvenlik Kararları

| # | Karar | Durum | Not |
|---|---|---|---|
| C1 | **Anonim eşleşme:** kimlik/telefon, iki taraf Hizmet ve Gizlilik Sözleşmesi imzalamadan açılmaz | 🟡 | Brif hazır: `Hizmet-ve-Gizlilik-Sozlesmesi-Brifi.md` — avukat yazacak |
| C2 | **Atlatma kilidi:** eşleşmeden doğan işlem 12 ay sistem dışında yapılsa dahi hizmet bedeli doğar; fatura karşılığı, tarafların kendi hesabından | 🟡 | Aynı brifte zorunlu madde |
| C3 | **Giriş filtresi:** VKN/TCKN + faaliyet belgesi, UYAP, KKB/Finnet, mali müşavir ticari ilişki teyidi; tapude TAKBİS | 🟡 | Operasyon adım 02'deki doğrulamalar genişletilecek |
| C4 | **Olgunluk merdiveni:** yeni paydaş küçük işlemle başlar, 3 başarılı işlemde tavan kalkar ("Demir İmza") | 🟡 | Pilot tasarımıyla belirlenir |
| C5 | **TTL (ilan süre sınırı):** ilk 6 ay uygulanmaz, önce hacim | ⚪ | Belgede zaten yok; hacim gelince tekrar karar |
| C6 | Her banka buluşmasında işlem tutanağı, gün sonunda durum raporu | ✅ | Operasyon adım 08 |

## D. Devre ve Pilot Kararları

| # | Karar | Durum | Not |
|---|---|---|---|
| D1 | 11 devre **hepsi birden açılmaz**; fazlı açılış kabul edildi | ✅ | Ana Dosya §8, devre kartları |
| D2 | **İlk pilot adayları:** Devre **05** Parsiyel Taşımacılık (43/50) ve Devre **07** Atıl Üretim (31/50); ikinci dalga: 01 çek, 08 fatura, 09 gümrük, 10 toplu tedarik | ✅ | Devre kartları, Pilot Şablonu, README A–H |
| D3 | Devre **08**'de "alacak devralma" yok — **bankada rehin/teminatla erken ödeme** (faktoring sınırı 6361) | ✅ | `Diger-Devreler-Sablonu.md` §Risk 2 + `Eslestirme-Kriterleri.md` §1 |
| D4 | Devre **02**'de cümle: **"Asıl borçlu B'dir; tapu sahibi yalnız ipotek müteselsilidir"** | ✅ | `Diger-Devreler-Sablonu.md` §Risk 5 + `Eslestirme-Kriterleri.md` §1 |
| D5 | Devre **03**'te dürüstlük valfi: ihalede sorumluluk müşterek ve müteselsildir, belge kiralama yasak — ortaklık şart | ✅ | `Diger-Devreler-Sablonu.md` §Risk 3 + `Eslestirme-Kriterleri.md` §1 |
| D6 | 11 devre vitrin kartı (SENDE / KARŞIDA / BANKADA / SENİN PAYIN) | 🟡 | Marka Mimarisi'ne 11 kart |
| D7 | Kanıt hedefi ilk 90 gün: 10 eşleşme, 3 tamamlanmış işlem, her biri tek sayfalık anonim vaka | 🟡 | Pilot Şablonu KPI'ına işlenecek |
| D8 | **Numaralandırma kaynğı tek:** Ana Envanter sırası (1 Çek … 5 Parsiyel … 7 Atıl Üretim … 11 ELÜS). Kart dosyaları buna göre yeniden adlandırıldı (eski 01→05, 02→07, 03–11 → diğer 9). Eski "Depo/Soğuk Zincir/Fuar" listesi Ana Envanter'de YOK — kaldırıldı | ✅ | `devre-kartlari/`, `Eslestirme-Kriterleri.md`, web, README hepsi bu sıraya uyumlu |

## E. Açık Kararlar (kimsenin tek başına kapatamayacağı)

1. Hizmet bedelinin hangi taraftan alınacağı ve tetikleyici olay (Ana Dosya §9, TEYİT).
2. Şirket yapısı ve faaliyet izni kapsamı (Ek-B, uzman görüşü).
3. Avans çeki + murabaha yollarının hukuki onayı (B5, B6).
4. Faz geçiş kanıtları: faz 2'ye geçiş için asgari başarılı işlem sayısı.

---

*Karar Defteri v1.0 — 21 Ekim 2026 • Sohbetlerde alınan kararlar, işlendikleri yer gösterilerek buraya kaydedilir.*
