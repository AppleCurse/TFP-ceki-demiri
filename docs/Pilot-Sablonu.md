# Pilot Kapsamı ve Test Senaryoları — Şablon

**TFP | İlk Devrenin Seçilmesi ve Pilot Hazırlığı v1.0**
20 Ekim 2026 | Çalışma taslağı

> “Bütün iş kollarını aynı anda açmak yerine, mevcut ticari ağ ve doğrulanabilir taleple en uygulanabilir devre seçilir.” — Ana Dosya §7

---

## 1. Pilot Seçim Kararı

| Kriter | Ağırlık | Aday A: Parsiyel Taşımacılık | Aday B: Atıl Üretim Kapasitesi |
|---|---|---|---|
| Mevcut ticari ağ | %25 | /10 | /10 |
| Doğrulanabilir talep | %25 | /10 | /10 |
| Doğrulama kolaylığı | %15 | /10 | /10 |
| Hukuki risk düşüklüğü | %15 | /10 | /10 |
| Operasyon maliyeti | %10 | /10 | /10 |
| Gelir potansiyeli | %10 | /10 | /10 |
| **Toplam** | %100 | /10 | /10 |

**Seçilen pilot:** [Aday A / Aday B / Diğer] — Gerekçe: …

---

## 2. Pilot Kapsamı

| Alan | Tanım |
|---|---|
| **Devre adı** | Örn: Parsiyel Taşımacılık / Hazır Yük Eşleştirmesi |
| **Kapasite tanımı** | Ne tür kapasite? Nasıl ölçülür? |
| **İhtiyaç tanımı** | Ne tür ihtiyaç? Nasıl ölçülür? |
| **Coğrafya** | Hangi iller / güzergâhlar? |
| **Süre** | Pilot başlangıç-bitiş tarihleri |
| **Hedef işletme sayısı** | En az X kapasite sağlayıcı, Y ihtiyaç sahibi |
| **Hedef eşleşme sayısı** | En az Z eşleşme önerisi |
| **Dahil olan işler** | Kayıt, doğrulama, eşleştirme, onay, takip |
| **Dahil olmayan işler** | Ödeme, taşıma sözleşmesi, sigorta (tarafların sorumluluğu) |

---

## 3. Başarı Ölçütleri (KPI)

| # | Ölçüt | Hedef | Ölçüm Yöntemi |
|---|---|---|---|
| 1 | Kayıtlı işletme sayısı | ≥ 20 | Sistem kaydı |
| 2 | Doğrulanmış kapasite/ihtiyaç kaydı | ≥ 30 | Doğrulama paneli |
| 3 | Üretilen eşleşme önerisi | ≥ 10 | Eşleşme modülü |
| 4 | Taraf onayı alınan eşleşme | ≥ 5 | Onay modülü |
| 5 | Görüşme aşamasına geçen | ≥ 3 | İşlem takibi |
| 6 | Tamamlanan işlem | ≥ 1 | Sonuç kaydı |
| 7 | Tarafların memnuniyet oranı | ≥ 70% | Anket (5’li Likert) |
| 8 | Ortalama eşleşme süresi | < 7 gün | Sistem logu |
| 9 | Doğrulama başarı oranı | ≥ 80% | Doğrulama kayıtları |
| 10 | Sistem hata oranı | < 5% | Hata logu |

> Hedefler, pilotun ilk haftasında toplanan gerçek verilere göre revize edilebilir — ancak revizyon gerekçesi kayıt altına alınır.

---

## 4. Durdurma Koşulları

Pilot **derhal durdurulur** eğer:

- [ ] Hukuki risk tespit edilir (düzenlemeye tabi faaliyet şüphesi)
- [ ] KVKK ihlali veya veri sızıntısı yaşanır
- [ ] Taraflardan biri dolandırıcılık / sahtecilik yapar
- [ ] Sistem, doğrulanmamış bilgiyi doğrulanmış gibi gösterir
- [ ] Tarafların %50+’si memnuniyetsizliğini bildirir

Pilot **gözden geçirilir** eğer:

- [ ] 4 hafta içinde hiç eşleşme üretilemez
- [ ] Eşleşmelerin hiçbiri taraf onayı alamaz
- [ ] Operasyon maliyeti öngörülenden 2 kat fazla çıkar

---

## 5. Test Senaryoları

### Senaryo 1: Başarılı Eşleşme ve Tamamlama

```
1. İşletme A (kapasite sağlayıcı) başvurur → doğrulanır → kapasite kaydeder
2. İşletme B (ihtiyaç sahibi) başvurur → doğrulanır → ihtiyaç kaydeder
3. Sistem eşleşme önerir (gerekçeli)
4. Her iki taraf onaylar
5. Taraflar görüşür, anlaşır, harici işlemi tamamlar
6. TFP sonucu kaydeder, ücret tetiklenirse fatura keser
Beklenen: Tüm adımlar sorunsuz, denetim izi tam, ücret doğru hesaplanır
```

### Senaryo 2: Eşleşme Reddedilir

```
1-3. Senaryo 1 ile aynı
4. Taraflardan biri reddeder (gerekçeli)
5. Kayıtlar havuza döner, yeni eşleşme aranır
Beklenen: Red gerekçesi kayıtlı, kayıt havuzda aktif
```

### Senaryo 3: Süresi Dolmuş Kayıt

```
1. Kapasite kaydı oluşturulur (geçerlilik: 1 hafta)
2. 1 hafta geçer, hiçbir eşleşme olmaz
3. Sistem kaydı otomatik "süresi_doldu" yapar
Beklenen: Kayıt eşleşmeye dahil edilmez, işletmeye bildirim gider
```

### Senaryo 4: Doğrulama Başarısız

```
1. İşletme başvurur, yetki belgesi eksik/sahte
2. Operasyon doğrulamayı reddeder (gerekçeli)
3. İşletme bilgilendirilir, düzeltme talep edilir
Beklenen: Doğrulanmamış işletme eşleşmeye alınmaz
```

### Senaryo 5: Kısmi Tamamlama ve Ücret

```
1-5. Senaryo 1 ile aynı, ancak işlem kısmen tamamlanır
6. TFP kısmi tamamlama kaydeder, oransal ücret hesaplar
Beklenen: Kısmi işlem kuralları uygulanır
```

---

## 6. Pilot Ekibi

| Rol | Sorumluluk | Kişi |
|---|---|---|
| Pilot lideri | Genel koordinasyon, karar | TEYİT GEREKLİ |
| Operasyon sorumlusu | Doğrulama, eşleştirme, takip | TEYİT GEREKLİ |
| Teknik sorumlu | Sistem desteği, hata düzeltme | TEYİT GEREKLİ |
| Hukuk danışmanı | Sözleşme, KVKK, uyum | TEYİT GEREKLİ |

---

## 7. Pilot Raporu Şablonu

Pilot bittiğinde hazırlanacak rapor şu bölümleri içermelidir:

1. **Özet:** Pilot neyi test etti, ne kadar sürdü, kimler katıldı?
2. **Sayılar:** KPI gerçekleşmeleri (hedef vs. gerçek)
3. **Başarılar:** Ne iyi çalıştı?
4. **Sorunlar:** Ne aksadı, neden?
5. **Tarafların geri bildirimi:** Anket ve görüşme özetleri
6. **Hukuki / operasyonel riskler:** Yeni tespit edilen riskler
7. **Karar önerisi:** Devam / revize / durdur — gerekçesiyle
8. **Sonraki adımlar:** Bir sonraki devre veya ölçek planı

