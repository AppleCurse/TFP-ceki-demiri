# Yazılım MVP Gereksinimleri ve Kabul Testleri

**TFP | Kapasite ve İhtiyaç Eşleştirme Sistemi — MVP v1.0**
20 Ekim 2026 | Çalışma taslağı

> “Mevcut bir uygulamada çalıştıkları henüz kanıtlanmış özellikler olarak sunmuyoruz.” — Ana Dosya §3

---

## 1. Kapsam İlkesi

İlk sürümün kapsamı, **süreci çalıştırmak için gereken çekirdekle** sınırlı tutulur:

- Yapılacak: Kayıt, doğrulama, eşleştirme, onay, durum takibi, denetim izi
- Yapılmayacak: Ödeme, banka entegrasyonu, mobil uygulama, yapay zekâ, çoklu devre

---

## 2. Modüller ve Gereksinimler

### 2.1. İşletme Kayıtları

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| I-01 | İşletme profili oluşturma (unvan, vergi no, MERSİS, adres, faaliyet) | Zorunlu alanlar boş bırakılamaz |
| I-02 | Yetkili kişi ekleme (ad, telefon, e-posta, yetki belgesi) | En az 1 yetkili zorunlu |
| I-03 | İşletme durumu (beklemede / doğrulandı / askıya alındı) | Durum değişikliği denetim izine yazılır |
| I-04 | İşletme geçmişi (kim, ne zaman, neyi değiştirdi) | Her değişiklik loglanır |

### 2.2. Kapasite Kayıtları

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| K-01 | Kapasite oluşturma (tür, miktar, coğrafya, zaman, koşullar) | Eksik kayıt “taslak” kalır, eşleşmeye alınmaz |
| K-02 | Geçerlilik süresi ve otomatik süre dolumu | Süresi dolan kayıt havuzdan çıkar |
| K-03 | Kapasite durumu (taslak / aktif / eşleşti / süresi doldu / iptal) | Durum makinesi kurallarına uygun geçiş |
| K-04 | Ek belge yükleme (fotoğraf, ruhsat vb.) | Dosya tipi ve boyut kontrolü |

### 2.3. İhtiyaç Kayıtları

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| IH-01 | İhtiyaç oluşturma (tür, miktar, zaman, koşullar) | Zorunlu alan kontrolü |
| IH-02 | Geçerlilik ve süre dolumu | K-02 ile aynı mantık |
| IH-03 | İhtiyaç durumu takibi | Durum makinesi |

### 2.4. Doğrulama Paneli

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| D-01 | Belge/bilgi türü, kaynak, doğrulayan, tarih, sonuç kaydı | Her doğrulama işlemi kayıtlı |
| D-02 | Doğrulama durumu (bekliyor / doğrulandı / reddedildi) | Doğrulanmamış bilgi “doğrulanmış” gibi görünmez |
| D-03 | Red gerekçesi zorunluluğu | Gerekçesiz red yapılamaz |
| D-04 | Doğrulama kuyruğu (operasyon için) | Bekleyen doğrulamalar listelenir |

### 2.5. Eşleştirme

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| E-01 | Kural tabanlı aday eşleşme üretme | Tür + coğrafya + zaman + miktar filtresi |
| E-02 | Eşleşme gerekçesi (otomatik metin) | Her eşleşmede gerekçe var |
| E-03 | Eşleşme skoru (basit ağırlıklandırma) | Skor hesaplanır ve gösterilir |
| E-04 | Eşleşme durumu (önerildi / onay bekliyor / onaylandı / reddedildi) | Durum takibi |
| E-05 | Manuel eşleştirme (operasyonun müdahalesi) | Yetkili rol yapabilir, gerekçe zorunlu |

### 2.6. Onay ve İletişim

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| O-01 | Taraf onayı toplama (onay / ret / revizyon) | Her tarafın kararı kayıtlı |
| O-02 | Bilgi paylaşım düzeyi (onay öncesi maskeleme) | Onay öncesi hassas veri gizli |
| O-03 | Bildirim (e-posta) | Onay talebi e-postası gider |
| O-04 | İletişim logu (kim, kime, ne zaman, ne) | Tüm iletişim kayıtlı |

### 2.7. İşlem Takibi

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| IT-01 | Durum makinesi (10 durum — Bkz. Operasyon Akışı) | Geçersiz durum geçişi engellenir |
| IT-02 | Sorumlu atama | Her işlemde sorumlu kişi var |
| IT-03 | Not ve tarihçe | Her durum değişikliğinde not eklenebilir |
| IT-04 | Hatırlatıcı / son tarih | Yaklaşan son tarihler listelenir |

### 2.8. Ücret ve Kapanış

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| U-01 | Ücret koşulu tanımı (tetikleyici, oran, taraf) | Sözleşme ekiyle uyumlu |
| U-02 | Fatura durumu (oluşturuldu / gönderildi / tahsil edildi) | Durum takibi |
| U-03 | Kapanış raporu (sonuç + dayanak) | Her işlem kapanışta sonuç kayıtlı |

### 2.9. Yetki ve Denetim İzi

| ID | Gereksinim | Kabul Testi |
|---|---|---|
| Y-01 | Rol bazlı erişim (admin, operasyon, izleyici, işletme) | Yetkisiz erişim engellenir |
| Y-02 | Olay kaydı (kim, ne zaman, ne yaptı) | Kritik işlemler loglanır |
| Y-03 | Değişiklik geçmişi (önceki değer / yeni değer) | Alan bazlı history |
| Y-04 | Giriş / oturum yönetimi | Güvenli kimlik doğrulama |

---

## 3. Veri Modeli (Özet)

```
Isletme (id, unvan, vergi_no, mersis, adres, durum, olusturma_tarihi)
  └── YetkiliKisi (id, isletme_id, ad_soyad, telefon, eposta, yetki_turu, durum)
  └── KapasiteKaydi (id, isletme_id, tur, miktar, birim, cografya, zaman, kosullar, gecerlilik, durum)
  └── IhtiyacKaydi (id, isletme_id, tur, miktar, birim, cografya, zaman, kosullar, gecerlilik, durum)

Dogrulama (id, kayit_id, kayit_turu, belge_turu, kaynak, dogrulayan_id, tarih, sonuc, gerekce)

Eslesme (id, kapasite_id, ihtiyac_id, skor, gerekce, durum, olusturma_tarihi, olusturan_id)
  └── TarafOnayi (id, eslesme_id, isletme_id, karar, tarih, gerekce)

IslemTakibi (id, eslesme_id, durum, sorumlu_id, not, tarih)
UcretKaydi (id, islem_id, tetikleyici, tutar, taraf, fatura_no, durum)
DenetimIzi (id, kullanici_id, eylem, hedef_tablo, hedef_id, onceki_deger, yeni_deger, tarih)
```

---

## 4. Teknik Mimari (Öneri — Karar Bekliyor)

| Katman | Teknoloji Önerisi | Not |
|---|---|---|
| Frontend | Next.js + TypeScript + Tailwind | Mevcut repo Next.js’e hazır |
| Backend | Next.js API Routes / Supabase | Hızlı MVP için |
| Veritabanı | PostgreSQL (Supabase) | Denetim izi için uygun |
| Kimlik doğrulama | Supabase Auth / NextAuth | Rol bazlı erişim |
| Dosya saklama | Supabase Storage / S3 | Belge yükleme |
| E-posta | Resend / SendGrid | Bildirimler |
| Barındırma | Vercel / kendi sunucu | Karar gerekli |
| Loglama | Veritabanı + dosya | Denetim izi |

> **Not:** Teknoloji seçimi, teknik ekip ve barındırma tercihine göre değişebilir. Önemli olan gereksinimlerin karşılanmasıdır.

---

## 5. Kabul Testleri — Genel

| Test | Kriter |
|---|---|
| Zorunlu alan kontrolü | Boş bırakılamaz, tip doğrulaması var |
| Yetki kontrolü | Yetkisiz kullanıcı işlemi yapamaz |
| Durum makinesi | Geçersiz geçiş engellenir |
| Doğrulama | Doğrulanmamış kayıt “doğrulanmış” görünmez |
| Eşleşme | Gerekçesiz eşleşme üretilmez |
| Onay | Onay olmadan iletişim bilgisi paylaşılmaz |
| Denetim izi | Her kritik işlem loglanır |
| Geçerlilik | Süresi dolmuş kayıt eşleşmeye alınmaz |
| Responsive | Mobil ve masaüstü uyumlu |
| Performans | 1000 kayıt altında sayfa <2s |

---

## 6. MVP Teslim Kontrol Listesi

- [ ] Tüm modüller (I, K, IH, D, E, O, IT, U, Y) asgari işlevleriyle çalışıyor
- [ ] Kabul testleri geçti (manuel test raporu var)
- [ ] Denetim izi aktif ve doğrulanabilir
- [ ] KVKK metinleri entegre
- [ ] Bilinen hatalar kayıtlı ve önceliklendirilmiş
- [ ] Kurulum / dağıtım dokümantasyonu var
- [ ] Pilot devre için örnek veriler yüklendi

