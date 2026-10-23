# Faaliyet Sınırları ve Uyum Kontrol Listesi

**TFP | Hukuki ve Mali Uygulanabilirlik Çalışma Paketi v1.0**
20 Ekim 2026 | TEYİT GEREKLİ — Hukuki mütalaa değildir

> Bu belge, Ana Proje Dosyası §10’un detaylandırılmasıdır. Faaliyete başlamadan önce her madde **yetkili hukuk ve mali müşavir** tarafından doğrulanmalıdır.

---

## 1. Faaliyet Tanımı Risk Haritası

| Risk Seviyesi | Faaliyet Türü | TFP Kapsamı | Aksiyon |
|---|---|---|---|
| 🟢 Düşük | Ticari eşleştirme (bilgi hizmeti) | **Mevcut kapsam** | Hizmet sözleşmesi yeterli |
| 🟡 Orta | İşlem koordinasyonu, durum takibi | **Mevcut kapsam** | Sorumluluk sınırları sözleşmede netleştirilmeli |
| 🟠 Yüksek | Aracılık / komisyonculuk / simsarlık (TTK, TBK) | **Sınırda — dikkat** | Faaliyet tanımı ve ücret modeli hukuken incelenmeli |
| 🔴 Çok Yüksek | Finansal aracılık, kredi kullandırma, ödeme hizmeti, emanet | **Kapsam dışı** | İzin / lisans gerektirir — **yapılmayacak** |

---

## 2. Şirket Yapısı Karar Matrisi

| Kriter | LTD | A.Ş. | Not |
|---|---|---|---|
| Kuruluş maliyeti | Daha düşük | Daha yüksek (asgari sermaye) | TEYİT GEREKLİ — güncel TTK |
| Ortak sayısı | 1–50 | 1+ | — |
| Pay devri | Kısıtlı | Daha esnek | Yatırım planı varsa A.Ş. avantajlı |
| İtibar algısı | KOBİ | Daha kurumsal | Banka / kurumsal müşteri için önemli |
| Halka açılma / yatırım | Zor | Uygun | Orta vadeli plana göre karar |

**Faaliyet konusu önerisi (taslak — hukukçu onayına tabi):**
> “Ticari işletmeler arasında kapasite ve ihtiyaç eşleştirmesine yönelik danışmanlık ve organizasyon hizmetleri; işletmelere yönelik ticari istihbarat ve eşleştirme hizmetleri — **bankacılık, finansal aracılık, ödeme hizmeti ve emanet faaliyeti hariç**.”

> **Dikkat:** Faaliyet konusu, NACE kodu ve vergi sınıflandırması mali müşavirle doğrulanmalıdır.

---

## 3. KVKK ve Veri Koruma Kontrol Listesi

### 3.1. İşlenecek Veri Kategorileri

| Veri | Tür | Hukuki Sebep (taslak) | Saklama |
|---|---|---|---|
| İşletme unvanı, vergi no, MERSİS | Ticari veri (kişisel veri değil — tüzel kişi) | Sözleşmenin kurulması/ifası | Sözleşme + 10 yıl (TTK zamanaşımı) |
| Yetkili kişi ad-soyad, telefon, e-posta | Kişisel veri | Sözleşmenin ifası, meşru menfaat | İş ilişkisi + 2 yıl |
| TC kimlik no (gerekirse) | Özel nitelikli değil ama hassas | Açık rıza veya mevzuat gereği — **asgari tutulmalı** | Gerektiği sürece |
| Kapasite/ihtiyaç detayı | Ticari veri | Sözleşmenin ifası | Kayıt geçerliliği + 5 yıl |
| İşlem geçmişi, log | Teknik veri | Hukuki yükümlülük, meşru menfaat | 10 yıl |

### 3.2. KVKK Yükümlülükleri

- [ ] **Aydınlatma metni** — başvuru formunda, açık ve anlaşılır
- [ ] **Açık rıza** — yalnızca gerektiğinde (pazarlama, hassas veri için); sözleşme ifası için gerekmeyebilir
- [ ] **Veri işleme envanteri** — her veri için amaç, hukuki sebep, saklama süresi
- [ ] **VERBİS kaydı** — yükümlülük var mı? (çalışan sayısı, veri hacmi kriterleri)
- [ ] **Veri paylaşımı** — taraflar arası paylaşım için aydınlatma + rıza / sözleşmesel gerekçe
- [ ] **Güvenlik tedbirleri** — erişim kontrolü, şifreleme, yedekleme, sızma testi
- [ ] **Başvuru hakkı** — ilgili kişinin başvuru kanalı (e-posta, form)
- [ ] **Saklama ve imha politikası** — süre dolunca silme/anonimleştirme

### 3.3. Üçüncü Taraf Veri Erişimi

| Kaynak | Erişim İddiası | Hukuki Dayanak | Durum |
|---|---|---|---|
| KKB / Findeks | Kredi notu sorgulama | Bireysel açık rıza + KKB üyeliği gerekir | **TEYİT GEREKLİ — izinsiz vaat edilmemeli** |
| Ticaret Sicili / MERSİS | Açık kaynak sorgulama | Aleniyet ilkesi | Sınırlı — detay için yetki gerekebilir |
| Tapu / TAKBİS | Tapu sorgulama | İlgili kişinin yetki belgesi gerekir | **TEYİT GEREKLİ** |
| Banka hesap / çek bilgisi | Hesap doğrulama | Banka protokolü + müşteri rızası | **Yok — vaat edilmemeli** |

> **Kural:** Hukuki dayanağı doğrulanmadan hiçbir dış veri kaynağına erişim vaat edilmez.

---

## 4. Sözleşme Seti

| Belge | Amaç | Ne Zaman Hazırlanır |
|---|---|---|
| **Hizmet Sözleşmesi (Çerçeve)** | TFP ile işletme arasındaki genel ilişki | Aşama F — operasyon netleşince |
| **Eşleştirme ve Ücret Eki** | Ücret oranı, tetikleyici, fatura, iptal kuralları | Hizmet sözleşmesiyle birlikte |
| **Aydınlatma Metni (KVKK)** | Veri işleme bilgilendirmesi | Başvuru formundan önce |
| **Açık Rıza Metni** | Gerektiğinde (pazarlama, hassas veri) | Aydınlatma ile birlikte |
| **Gizlilik Taahhüdü (NDA)** | Ticari sır koruması | Eşleşme öncesi (gerekirse) |
| **İşlem Bazlı Protokol** | Belirli devreye özel ek koşullar | Devre tanımlanınca |
| **Çalışan/Danışman Sözleşmesi** | Yetki, gizlilik, rekabet yasağı | Kuruluşla birlikte |

**Sözleşmede mutlaka olması gereken hükümler:**
- Hizmetin tanımı ve **sınırları** (yapılmayan işler dahil)
- TFP’nin sorumluluğunun **başlangıcı ve bitişi**
- Ücretin **tetikleyicisi, hesap tabanı, tarafı, KDV’si**
- Eşleşme ≠ ücret ayrımı
- İptal / kısmi işlem / sistem dışı işlem kuralları
- Veri işleme ve gizlilik
- Uyuşmazlık çözüm yeri (tahkim / mahkeme)
- Mücbir sebep ve durdurma koşulları

---

## 5. Vergi ve Faturalama

| Konu | Kontrol Maddesi | Sorumlu |
|---|---|---|
| KDV oranı | Hizmetin KDV oranı nedir? (%20 genel — teyit gerekli) | Mali müşavir |
| Fatura tipi | e-Fatura / e-Arşiv zorunluluğu var mı? | Mali müşavir |
| Stopaj | Ücretin tarafına göre stopaj var mı? | Mali müşavir |
| Gelir/kurumlar vergisi | Şirket türüne göre vergilendirme | Mali müşavir |
| e-Defter / e-Berat | Yükümlülük eşiği aşıldı mı? | Mali müşavir |

---

## 6. Reklam ve Tanıtım Uyumu

Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği uyarınca:

- [ ] Doğrulanmamış başarı oranı / hız / tasarruf iddiası yok
- [ ] Banka / finans kuruluşu izlenimi veren ifade yok
- [ ] Rakip karşılaştırması kanıtlı ve dürüst
- [ ] “En”, “ilk”, “tek” gibi üstünlük iddiaları belgeli veya kaldırılmış
- [ ] Tüketiciye yönelikse (B2C) ek yükümlülükler incelenmiş — **TFP B2B odaklıdır**

---

## 7. Uzman Görüşü Planı

| Uzmanlık | Görüş Konusu | Öncelik | Durum |
|---|---|---|---|
| Şirketler / Ticaret Hukuku | Şirket yapısı, faaliyet konusu, unvan | Yüksek | TEYİT GEREKLİ |
| KVKK / Bilişim Hukuku | Veri işleme, aydınlatma, VERBİS | Yüksek | TEYİT GEREKLİ |
| Bankacılık / Finansal Düzenleme | Aracılık / finansal faaliyet sınırı | Yüksek | TEYİT GEREKLİ |
| Vergi / Mali Müşavir | Kuruluş, fatura, KDV, NACE | Yüksek | TEYİT GEREKLİ |
| Fikri Mülkiyet / Marka Vekili | Marka ve alan adı araştırması | Orta | TEYİT GEREKLİ |
| İş Hukuku | Çalışan sözleşmeleri | Orta | Bekliyor |

---

## 8. Kuruluş Öncesi Yapılmayacaklar

- [ ] Hukuki görüş alınmadan şirket kurulmaz / faaliyet konusuna “finansal aracılık” yazılmaz
- [ ] Marka araştırması yapılmadan logo / alan adı / sosyal medya duyurulmaz
- [ ] KVKK metinleri olmadan kişisel veri toplanmaz
- [ ] Banka / KKB protokolü olmadan bu kurumların adı tanıtımda kullanılmaz
- [ ] Ücret oranı pilot verisi olmadan sözleşmeye sabitlenmez

