# TFP — Türk Finansal Paydaşlık | Çeki Demiri

**Kapasite ve İhtiyaç Eşleştirme Sistemi — Kuruluş ve Uygulama Ana Planı v1.0**

> Bir proje değil, kurulacak bir işletme ve sistem. Sözleşme bu yolculuğun başlangıcı değil, belirli aşamalarda ortaya çıkacak sonuçlarından biri.

[![Çalışma Taslağı](https://img.shields.io/badge/statü-çalışma_taslağı_v1.0-amber)](#)
[![Teyit Gerekli](https://img.shields.io/badge/teyit_gerekli-9_madde-red)](#)
[![Lisans](https://img.shields.io/badge/lisans-özel-lightgrey)](#)

---

## Bu Repo Nedir?

Bu repo, **TFP / Çeki Demiri** modelini bir yazılım projesi olarak değil, aşamalı kurulacak bir işletme olarak ele alan **Ana Proje Dosyası v1.0** ve eklerini içerir. Şirket kuruluşu, marka tescili, banka protokolü veya çalışan yazılım varsaymaz — doğrulanması gereken hususlar `TEYİT GEREKLİ` olarak işaretlidir.

**Modelin değişmeyecek temel sınırı:**

> TFP eşleştirme ve koordinasyon katmanıdır. Para, çek, tapu veya mal teslim almaz. Vekâleten işlem yapmaz, borç vermez, banka onayı garantilemez. Taraflar kendi adlarına hareket eder.

---

## 📁 Doküman Yapısı

```
docs/
├── TFP-Ana-Proje-Dosyasi-v1.0.md          # Ana belge — 15 bölüm, 10 soru, 9 teyit
├── Operasyon-Akisi-ve-Gorev-Sinirlari.md   # 10 adım, durum makinesi, rol matrisi
├── Faaliyet-Sinirlari-ve-Uyum-Kontrol-Listesi.md  # KVKK, şirket yapısı, sözleşme seti
├── Marka-Mimarisi.md                      # İsim mimarisi, site haritası, SSS
├── Yazilim-MVP-Gereksinimleri.md           # 9 modül, veri modeli, kabul testleri
├── Pilot-Sablonu.md                        # KPI, durdurma koşulları, 5 senaryo
└── devre-kartlari/
    ├── 00-Degerlendirme-Sablonu.md
    ├── 01-Parsiyel-Tasimacilik.md          # Pilot adayı — 43/50
    ├── 02-Atil-Uretim-Kapasitesi.md        # Pilot adayı — 31/50
    └── 03-11-Diger-Devreler-Sablonu.md

web/                                       # Sistem önizleme — Next.js
├── app/
│   ├── page.tsx                           # Ana plan + sistem önizlemesi
│   ├── layout.tsx
│   └── globals.css
└── package.json
```

---

## 🗺️ Kuruluş Yol Haritası (A–H)

| Aşama | Çıktı | Durum |
|---|---|---|
| **A. Modeli Sabitleme** | Ana proje tanımı ve varsayım listesi | ✅ Bu repo ile başlatıldı |
| **B. Süreç Tasarımı** | İş akışı ve devre değerlendirme kartları | 🔲 Bekliyor |
| **C. Hukuki / Mali Ön İnceleme** | Faaliyet ve kuruluş kontrol listesi | 🔲 Bekliyor |
| **D. Marka ve Kurumsal Yapı** | İsim mimarisi ve kuruluş kararı | 🔲 Bekliyor |
| **E. Pilot Seçimi** | Pilot kapsamı, ölçütler, durdurma koşulları | 🔲 Bekliyor |
| **F. Sözleşme ve Veri Belgeleri** | Hizmet sözleşmesi, KVKK belgeleri | 🔲 Bekliyor |
| **G. Yazılım MVP** | Çalışan ilk sürüm, test ve denetim izi | 🔲 Bekliyor |
| **H. Kontrollü Pilot** | Pilot sonuç raporu | 🔲 Bekliyor |

Kural: Bir aşamanın geçiş koşulu sağlanmadan bir sonrakine geçilmez.

---

## 🖥️ Sistem Önizlemesini Çalıştırma

```bash
cd web
npm install
npm run dev   # http://localhost:3000
```

Önizleme iki mod içerir:

- **Ana Plan** — Model, operasyon akışı, devreler, MVP, yol haritası, belgeler
- **Sistem Önizleme** — Kapasite/ihtiyaç kayıtları, eşleşme, işlem takibi, doğrulama paneli (demo verilerle)

---

## ⚠️ Önemli Uyarılar

- Bu belgeler **hukuki mütalaa değildir.** Faaliyete başlamadan önce yetkili hukuk ve mali müşavir görüşü alınmalıdır.
- **TEYİT GEREKLİ** işaretli hiçbir husus kanıt olmadan var kabul edilmez.
- Pilot kanıtı oluşmadan başarı oranı, işlem süresi veya finansman sonucu iddia edilmez.
- Gerçek işleyiş belirlenmeden komisyon oranı sözleşmeye sabitlenmez.

---

## 📖 Hızlı Başlangıç

1. `docs/TFP-Ana-Proje-Dosyasi-v1.0.md` — ana belgeyi oku (15 bölüm)
2. `docs/Operasyon-Akisi-ve-Gorev-Sinirlari.md` — operasyon akışını incele
3. `docs/devre-kartlari/` — pilot adaylarını karşılaştır
4. `web` önizlemesini çalıştır — sistemi interaktif gör

---

*TFP Ana Proje Dosyası v1.0 • Çalışma Taslağı • 20 Ekim 2026*
