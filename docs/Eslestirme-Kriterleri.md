# Eşleştirme Kriterleri — Algoritmanın Neyle Kimi Bağladığı

> **Statü:** Faz 1 için kriter seti. İlk 6 ay **eşleştirme masası** (insan) + bu kriterler; algoritma otomasyonu hacimle gelir (Ana Dosya §5, rötuş 7).  
> **Kaynak:** Kararlar Defteri C3 (giriş filtresi), D1/D2 (faz ve pilot).

---

## 0. Eşleşmeden ÖNCE — Eleme Valfi (zorunlu)

Dosya, aşağıdaki paket tamamlanmadan **"eşleşebilir" duruma geçmez:**

- [ ] VKN/TCKN doğrulama + faaliyet belgesi
- [ ] UYAP / açık icra kontrolü (açık kaynaklarla; derin sorgu için teyit gerekli)
- [ ] KKB / risk raporu — şirket + ortaklar (erişim yetkisi ayrı konu, 🔴 Ek-B)
- [ ] Mali müşavir teyidi: *türe göre* — çek/faturada "altta yatan gerçek ticari ilişki var" / tapuda "TAKBİS kaydı güncel" / tırda "ruhsat-K belgesi-sigorta geçerli"
- [ ] Limit teyidi: **müşterinin kendi şubesinden**, müşterinin kendisi alır, TFP istemez

> Kural: Doğrulanmayan bilgi, doğrulanmış gibi görünmez (Ana Dosya §6-04).

## 1. Çek & Limit Devresi (Faz 1 — Devre 2)

| # | Kriter | Ağırlık | Not |
|---|---|---|---|
| 1 | **Tutar uyumu** (çek tutarı ≤ limit kullanımı + pay) | 30 | Tavan: Kararlar Defteri C4 merdiveni |
| 2 | **Gerçek ticari ilişki** (fatura/irsaliye var) | 25 | Yoksa eşleşme ÜRETİLMEZ — hatır çeki yasağı |
| 3 | **Vade uyumu** (çek vadesi ↔ kredi dilimi) | 15 | |
| 4 | **Şehir / şube pratikliği** (aynı il, hatta aynı şube hattı) | 10 | Aynı banka şubesi = hızlı masa |
| 5 | **Risk notu** (KKB bandı, icra, sicil) | 15 | Bant eşleşirse skor düşer |
| 6 | **Ortaklık şartlarının örtüşmesi** (avans/ortaklık teklifi kabul edilebilir mi) | 5 | |
| — | **Eşik:** skor ≥ 70 + kriter 2 ve 5'te kırmızı yok | | Gerekçesiz eşleşme yok |

## 2. Parsiyel Tır & Yük Devresi (Faz 1 — Devre 1)

| # | Kriter | Ağırlık | Not |
|---|---|---|---|
| 1 | **Güzergâh örtüşmesi** (aynı hat ya da %70 kesişim) | 30 | |
| 2 | **Zaman penceresi** (yük tarihi ↔ araç müsaitliği) | 25 | 24 saat içindeki eşleşmelere bonus |
| 3 | **Tonaj / hacim uyumu** (araç boşluğu ≥ yük) | 20 | |
| 4 | **Yük niteliği** (frigo/kuru/ağır — araç uyumu) | 15 | Uyumsuzsa otomatik red |
| 5 | **Notlar** (teslim şartı, ödeme şekli) | 10 | |
| — | **Eşik:** ≥ 65 | | Hızlı devrede eşik daha düşük |

## 3. Çıktı Şekli (her eşleşme)

1. **Skor** + **gerekçe cümlesi** (yukarıdaki kriterlerden hangisi kaç puan verdi — okunabilir metin)
2. **Anonim kart:** `Şehir • Tür • Tutar bandı` — isim/telefon yok (C1)
3. **Maskeleme:** ticari sır sayılan alanlar ilk turda kapalı (Operasyon adım 06)
4. **Manuel yetki:** Operasyon yetkilisi eşleşmeyi **düşürebilir** — algoritma önerir, TFP onaylar (karar mercii değil, kontrol mercii'nin yazılı hâli)

## 4. Yasaklanmış Çıktılar

- ❌ Gerekçesiz "uygun bulundu" — her kartta nedeni yazılır
- ❌ Doğrulanmamış kayıtlı eşleşme
- ❌ Skor gizleme (şeffaflık: taraflar skoru ve gerekçeyi görür)
- ❌ Otomatik onay: **eşleşme = teklif**, karar daima tarafların

---

## 5. Otomasyon Yolu

| Faz | Eşleştirme nasıl | Gerekçe |
|---|---|---|
| İlk 6 ay | **Eşleştirme masası:** bu kriterler elle uygulanır, skor elle yazılır | Kriterlerin gerçek veriyle doğrulanması |
| Faz 2 | Kriterler yazılımın ağırlıkları olur, skor otomatik, onay insanda | Hacim |
| Sonra | Öğrenme: hangi eşleşmeler kapanmış — ağırlıklar veriyle güncellenir | Sadece kapanan iş verisiyle |

*Bu sıralama yazılım yol haritasıyla çelişmez: MVP'de (Yazilim-MVP-Gereksinimleri.md modül I/E) kriterler şeffaf skor olarak zaten vardır; farkı **ilk 6 ay insan masası** kurar.*

---

*Eşleştirme Kriterleri v1.0 — 21 Ekim 2026 • Pilot: 01 Parsiyel (43/50), 02 Atıl Üretim (31/50) kartlarıyla uyumlu*
