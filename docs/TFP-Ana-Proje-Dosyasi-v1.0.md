# TÜRK FİNANSAL PAYDAŞLIK — ANA PROJE DOSYASI

**TFP | Çeki Demiri | Kapasite ve İhtiyaç Eşleştirme Sistemi**

> **Sürüm:** 1.0 — Çalışma Taslağı  
> **Tarih:** 20 Ekim 2026  
> **Statü:** Şirket kuruluşu, marka tescili, banka protokolü veya çalışan yazılım varsaymaz. Doğrulanması gereken tüm hususlar “TEYİT GEREKLİ” olarak işaretlenmiştir.  
> **Hazırlayan:** TFP Kurucu Çalışma Grubu  
> **Sınıflandırma:** İç çalışma belgesi — dış paylaşıma uygun değildir

---

## Belgenin Statüsü ve Kullanım İlkesi

Bu dosya, TFP / Çeki Demiri modelini bir yazılım projesi değil, **kurulacak bir işletme ve sistem** olarak ele alan ilk ana çalışma belgesidir. Sözleşme bu yolculuğun başlangıcı değil, belirli aşamalarda ortaya çıkacak sonuçlarından biridir.

**Bu belge hukuki mütalaa, mali müşavirlik görüşü veya yatırım vaadi değildir.** İçerdiği hiçbir ifade, şirketin kurulduğunu, markaların tescilli olduğunu, banka protokollerinin bulunduğunu veya yazılımın çalışır durumda olduğunu ima etmez.

**Okuma kılavuzu:**
- **Kesin hüküm:** Sistemin değişmeyecek temel sınırı (Bölüm 1)
- **Çalışma tanımı:** Pilot ve uzman görüşüyle doğrulanacak varsayım
- **TEYİT GEREKLİ:** Dış doğrulama olmadan ilerlenemeyecek açık konu

---

## İçindekiler

1. [Yönetici Özeti ve Değişmez Sınır](#1-yönetici-özeti-ve-değişmez-sınır)
2. [Modelin Bileşenleri ve Adlandırma](#2-modelin-bileşenleri-ve-adlandırma)
3. [Amaç, Hedef Kitle ve Değer Önerisi](#3-amaç-hedef-kitle-ve-değer-önerisi)
4. [Hizmet Sınırları ve Temel Güven İlkeleri](#4-hizmet-sınırları-ve-temel-güven-ilkeleri)
5. [En Kritik Karar: TFP Tam Olarak Ne Olacak?](#5-en-kritik-karar-tfp-tam-olarak-ne-olacak)
6. [Uçtan Uca Operasyon Akışı](#6-uçtan-uca-operasyon-akışı)
7. [İlk Yazılım Sürümü (MVP) Gereksinimleri](#7-ilk-yazılım-sürümü-mvp-gereksinimleri)
8. [Devrelerin Ele Alınma Yöntemi — 11 Devre İçin Değerlendirme Kartı](#8-devrelerin-ele-alınma-yöntemi)
9. [Gelir Modeli ve Ücret Politikası](#9-gelir-modeli-ve-ücret-politikası)
10. [Hukuki, Veri Koruma ve Kurumsal Uyum Çalışma Paketi](#10-hukuki-veri-koruma-ve-kurumsal-uyum-çalışma-paketi)
11. [Marka ve Tanıtım Planı](#11-marka-ve-tanıtım-planı)
12. [Kullanılabilecek Temel Müşteri Açıklaması](#12-kullanılabilecek-temel-müşteri-açıklaması)
13. [Kuruluş Yol Haritası ve Aşama Kapıları (A–H)](#13-kuruluş-yol-haritası-ve-aşama-kapıları)
14. [Açık Konular ve Teyit Listesi](#14-açık-konular-ve-teyit-listesi)
15. [İlk Teslimatın Kabul Ölçütleri — 10 Soru](#15-ilk-teslimatın-kabul-ölçütleri)
16. [Ekler](#ekler)

---

## 1. Yönetici Özeti ve Değişmez Sınır

### 1.1. Tek Cümlelik Tanım
**TFP (Türk Finansal Paydaşlık)**, ticari işletmelerin gerçek ve doğrulanabilir kapasite ile ihtiyaçlarını sistematik biçimde eşleştiren bir **ticari eşleştirme ve işlem koordinasyon sistemi** kurmayı hedefler. **Çeki Demiri**, bu sistemin işletmelere sunulan **hizmet markasıdır**.

### 1.2. Modelin Değişmeyecek Temel Sınırı

> **TFP eşleştirme ve koordinasyon katmanıdır.**
> 
> - Tarafların **gerçek ticari kapasitesini ve ihtiyacını** eşleştirir.
> - Eşleştirme sistemi **para, çek, senet, tapu veya mal teslim alıp muhafaza eden bir havuz değildir.**
> - **Vekâletle tarafların yerine işlem yapmaz**, borç vermez, banka onayı veya finansman sonucu garantilemez.
> - Taraflar kendi adlarına, ilgili **banka ya da kurumun onayıyla** hareket eder.

Bu sınır, kuruluş planının temelidir. Şirketin hukuki statüsü ve yürütülecek faaliyetlerin izin gereklilikleri ayrıca doğrulanacaktır.

### 1.3. Neden Şimdi? — Çözülen Sorun

| Bugünkü Durum | Sorun |
|---|---|
| KOBİ’ler kapasitelerini (atıl üretim hattı, boş depo, hazır yük, bekleyen alacak) dağınık ve doğrulanması zor kanallarda duyuruyor | Görünürlük yok, güven yok |
| İhtiyaç sahipleri (siparişini ürettirecek, yükünü taşıtacak, tedarik arayan) doğru kapasiteyi bulamıyor | Eşleşme tesadüfi, maliyetli |
| Aracılar bilgi asimetrisinden komisyon alıyor, süreci düzenlemiyor | Şeffaflık yok, tekrarlanabilirlik yok |
| Banka / finansman süreçleri ticari eşleşmeden kopuk | İşlem bütüncül yönetilemiyor |

TFP, bu boşluğu **bilgiyi kaydeden, doğrulama durumunu izleyen ve uygun tarafları gerekçesiyle birlikte buluşturan** bir sistemle doldurmayı amaçlar — işlemi üstlenerek değil, süreci düzenleyerek.

---

## 2. Modelin Bileşenleri ve Adlandırma

| Bileşen | Önerilen Rol | Durum / Not |
|---|---|---|
| **Türk Finansal Paydaşlık (TFP)** | Kurumsal çatı ve sistemin ana kimliği | Tüzel kişilik / ticaret unvanı / marka statüsü **TEYİT GEREKLİ** |
| **Çeki Demiri** | İşletmelere sunulan müşteri yüzü / hizmet markası | Marka uygunluğu ve tescil durumu **TEYİT GEREKLİ** |
| **Kapasite ve İhtiyaç Eşleştirme Sistemi** | Kayıt, doğrulama, eşleştirme, takip ve denetim izi yazılım + operasyon katmanı | İlk sürüm kapsamı tasarlanacak; mevcut özellikler kanıtlanmış sayılmaz |
| **İşletme Paydaşları** | Kapasite sağlayan ve/veya ihtiyaç bildiren ticari taraflar | Kabul, yetki ve doğrulama kuralları tanımlanmalı |
| **Devreler** | Farklı iş kolları için özelleşmiş eşleştirme mantığı (örn. parsiyel taşımacılık, atıl kapasite) | 11 devre tek anda açılmayacak; değerlendirme kartıyla seçilecek |

### İsim Mimarisi (Çalışma Tanımı)

```
Türk Finansal Paydaşlık (TFP)
 └── Çeki Demiri — Hizmet Markası
      ├── Devre 01: Parsiyel Taşımacılık / Hazır Yük
      ├── Devre 02: Atıl Üretim Kapasitesi / Doğrulanmış Sipariş
      ├── Devre 03–11: [Tanımları ve kanıt durumu TEYİT GEREKLİ]
      └── Kapasite ve İhtiyaç Eşleştirme Sistemi (yazılım)
```

> **Karar bekleyen:** TFP ana kimlik mi, şirket unvanı mı, yoksa marka mı olacak? Çeki Demiri tek hizmeti mi temsil ediyor, yoksa alt markalar olacak mı? Bkz. Bölüm 11.

---

## 3. Amaç, Hedef Kitle ve Değer Önerisi

### 3.1. Hedef Kitle

**Birincil:** Ticari faaliyeti bulunan işletmeler ve KOBİ’ler — üretim, lojistik, tedarik, toptan ticaret yapan, kapasitesi veya düzenli ihtiyacı olan taraflar.

**Değil:** Tüketici finansmanı arayan bireyler, borç devralma hizmeti bekleyenler, hızlı kredi vaadi arayanlar. Model, bu şekilde anlatılmamalıdır.

### 3.2. Değer Önerisi — Çalışma Tanımı

1. İşletmelerin **kullanıma hazır kapasitesi** ile **doğrulanabilir ticari ihtiyacını** aynı kayıt düzeninde görünür kılmak.
2. Eşleşmenin **hangi bilgilere dayandığını ve hangi aşamada bulunduğunu** izlenebilir hâle getirmek.
3. Tarafların **doğrudan ve kendi adlarına karar almasını** kolaylaştırmak; işlemi garanti etmek yerine süreci düzenlemek.
4. Ticari fırsatın niteliğine göre **doğrulama ve kontrol adımlarını** tanımlamak.

> **Uyarı:** Bu değer önerisi çalışma tanımıdır. Müşteri görüşmeleri ve gerçek pilot verileriyle doğrulanmadan pazar talebi, tasarruf oranı, işlem hızı veya başarı yüzdesi iddia edilmemelidir.

### 3.3. Yapılmayacak İşler (Negatif Tanım)

- Hangi işleri **yapmayacağımızı** söylemek, ne yaptığımızı söylemek kadar önemlidir.
- TFP, **her türlü finansal ihtiyacı çözen genel bir platform** olarak konumlanmaz.
- Her devre için **dahil olan / olmayan işler** listesi ayrı yazılacaktır (Bkz. Bölüm 8).

---

## 4. Hizmet Sınırları ve Temel Güven İlkeleri

### 4.1. Modelin Yapacağı İşler

- İşletme, yetkili kişi, kapasite ve ihtiyaç kayıtlarını oluşturmak.
- Belge / bilgi doğrulamasının **durumunu ve kaynağını** kaydetmek.
- Belirlenmiş ölçütlerle uygun tarafları eşleştirmek.
- Tarafların eşleşmeyi kabul edip etmediğini ve sonraki işlem durumunu takip etmek.
- Hizmet kapsamı ve **ücret koşullarını işlem öncesinde açıkça** bildirmek.
- Yetki, değişiklik ve işlem geçmişini **denetlenebilir biçimde** kaydetmek.

### 4.2. Modelin Kendiliğinden Üstlenmediği İşler

- Para, çek, senet, tapu, mal veya teminatı **teslim almak ya da muhafaza etmek**.
- Tarafların yerine **vekâleten işlem yapmak** veya bir tarafın temsil yetkisini varsaymak.
- **Kredi kullandırmak**, banka onayını garanti etmek veya kendisini banka / finans kuruluşu gibi tanıtmak.
- İzin veya hukuki dayanak doğrulanmadan **KKB, banka, tapu veya üçüncü taraf kayıtlarına** erişildiğini iddia etmek.
- Tarafların kendi ticari kararları ve karşı tarafın edimleri için **sınırsız garanti** vermek.

> **Önemli:** Bu sınırlar tek başına faaliyetin hukuken uygun olduğunu kanıtlamaz. Gerçek hizmet akışı, ücretlendirme ve hedeflenen işlem türleri, faaliyete başlanmadan önce Türkiye'deki hukuk ve mali müşavirlik uzmanlarınca değerlendirilmelidir.

---

## 5. En Kritik Karar: TFP Tam Olarak Ne Olacak?

İsimden veya yazılımdan önce şu ayrımı çözmemiz gerekiyor. Bunlar aynı şey değildir:

| Model | Tanım | Hukuki / Operasyonel Ağırlık |
|---|---|---|
| **A. Ticari Eşleştirme Platformu** | İşletmelerin kapasite ve ihtiyaçlarını buluşturur. Bilgi sağlar, tarafları tanıştırır. | En yalın model. Aracılık sınırı dikkatle çizilmeli. |
| **B. İşlem Koordinasyon Sistemi** | Tarafların doğrulama ve işlem adımlarını düzenler. Durum takibi, belge kontrol listesi, onay akışı sağlar. | Operasyonel derinlik artar. Sorumluluk ve ücret tetikleyicisi netleşmeli. |
| **C. Finansal Aracılık veya Finansman Modeli** | Kredi, ödeme, teminat veya fon aktarımına doğrudan dahil olur. | **İlave hukuki ve düzenleyici inceleme gerektirir.** BDDK, SPK, Ödeme Hizmetleri vb. sınırlar. |

**Çalışma kararı (v1.0):** TFP, **A + B** olarak başlar. **C kapsamına giren hiçbir faaliyet**, hukuki uygunluğu ve izin gerekliliği doğrulanmadan üstlenilmez, vaat edilmez, fiyatlanmaz.

Tek bir çatı altında bazıları birlikte bulunabilir; ancak her birinin sınırları, sorumlulukları ve izin gereklilikleri **ayrıca** değerlendirilmelidir.

---

## 6. Uçtan Uca Operasyon Akışı

```
[01 Başvuru] → [02 Yetki & Temel Doğrulama] → [03 Kapasite/İhtiyaç Kaydı]
    → [04 Uygunluk Değerlendirmesi] → [05 Eşleştirme] → [06 Taraf Onayı]
    → [07 İşlem Öncesi Açıklama] → [08 Harici İşlem (Tarafların Sorumluluğunda)]
    → [09 Sonuç Kaydı] → [10 Ücretlendirme & Kapanış]
              ↘ (her adımda) Denetim İzi + Durum Takibi
```

### Adım Detayları

| # | Aşama | Kim Yapar | Çıktı | Kontrol Noktası |
|---|---|---|---|---|
| **01** | **Başvuru** | İşletme | İşletme ve yetkili kişi bilgileri, başvuru amacı | Zorunlu alanlar, KVKK aydınlatma onayı |
| **02** | **Yetki ve Temel Doğrulama** | TFP Operasyon | Yetki belgesi (imza sirküleri, vekâletname), temel sicil kontrolü | Yetkisiz başvuru eşleşmeye alınmaz |
| **03** | **Kapasite / İhtiyaç Kaydı** | İşletme + TFP | Tür, miktar, zaman, coğrafya, koşullar, geçerlilik süresi | Eksik / süresi geçmiş kayıt işaretlenir |
| **04** | **Uygunluk Değerlendirmesi** | Sistem + Operasyon | Eşleştirme kriterleri uygulanır; çelişkili kayıtlar elenir | Yetersiz veri = eşleşme yok |
| **05** | **Eşleştirme** | Sistem | Aday eşleşme, gerekçe, paylaşılmasına izin verilen bilgi düzeyi | Gerekçesiz eşleşme üretilmez |
| **06** | **Taraf Onayı** | Taraflar | Taraflara yalnızca gerekli bilgi aktarılır; iletişim onayı alınır | Onay yoksa bilgi paylaşılmaz |
| **07** | **İşlem Öncesi Açıklama** | TFP | Tarafların kendi adlarına hareket edeceği, dış kurum onaylarının ayrı olduğu, ücret koşulu | Yazılı bilgilendirme zorunlu |
| **08** | **Harici İşlem** | Taraflar + İlgili Kurumlar | Sözleşme, ödeme, banka, noter, tapu işlemleri kendi prosedürlerine göre | TFP taraf değil, gözlemci |
| **09** | **Sonuç Kaydı** | TFP Operasyon | Tamamlandı / kısmen tamamlandı / sonuçlanmadı + dayanak kayıtlar | Her sonuç gerekçeli |
| **10** | **Ücretlendirme ve Kapanış** | TFP | Fatura, tahsilat, denetim iziyle saklama | Ücret tetikleyicisi gerçekleştiyse |

### Durum Makinesi (İşlem Takibi)

```
 taslak → doğrulama_bekliyor → eşleşme_arıyor → eşleşti → taraf_onayı_bekliyor
    → görüşülüyor → doğrulanıyor → anlaşma_sağlandı → tamamlandı
                                          ↘ kısmen_tamamlandı
                                          ↘ sonuçlanmadı → sebep_kayıtlı
                                          ↘ iptal_edildi
```

Her durum değişikliğinin **kim, ne zaman, hangi gerekçeyle** yaptığı kayıt altına alınır.

---

## 7. İlk Yazılım Sürümü (MVP) Gereksinimleri

> **İlke:** İlk sürümün kapsamı, süreci çalıştırmak için gereken **çekirdekle** sınırlı tutulur. Gereksiz özellik eklenmez. Tamamlandı iddiası yalnızca **test kanıtıyla** yapılır.

| Modül | Asgari İşlev | Kontrol / Kabul Ölçütü |
|---|---|---|
| **İşletme Kayıtları** | İşletme profili, yetkili kişi, iletişim, durum, vergi no, MERSİS no | Yetki ve zorunlu alanlar kontrol edilir; değişiklik geçmişi tutulur |
| **Kapasite Kayıtları** | Sunulabilir kapasite, koşul, miktar, zaman, coğrafya, geçerlilik | Süresi dolmuş veya eksik kayıt eşleşmeye alınmaz |
| **İhtiyaç Kayıtları** | İstenen kapasite, miktar, zaman, koşul, bütçe aralığı (varsa) | İhtiyaç sahibi ve kayıt amacı izlenebilir |
| **Doğrulama Paneli** | Belge / bilgi türü, kaynak, doğrulayan kişi, tarih, sonuç (doğrulandı / bekliyor / reddedildi) | Doğrulanmamış bilgi doğrulanmış gibi görünmez |
| **Eşleştirme** | Kriterlere göre aday eşleşme ve **gerekçesi** | Eşleşme sonucu neden üretildiğiyle birlikte kaydedilir |
| **Onay ve İletişim** | Taraf onayı, paylaşım izinleri, iletişim logu | Onay yoksa kısıtlı bilgi paylaşımı yapılmaz |
| **İşlem Takibi** | Durumlar, sorumlular, tarihler, notlar, hatırlatıcılar | Her durum değişikliğinin kaydı tutulur |
| **Ücret ve Kapanış** | Önceden belirlenmiş ücret koşulu, fatura durumu, tahsilat | Ücret tetikleyicisi ve işlem sonucu izlenebilir |
| **Yetki ve Denetim İzi** | Rol bazlı erişim (admin, operasyon, izleyici), olay ve değişiklik kaydı | Yetkisiz erişim ve kritik değişiklikler izlenebilir |

### MVP’de Olmayacaklar (v1.0 Kapsam Dışı)

- Otomatik ödeme / tahsilat / emanet hesabı
- Banka entegrasyonu veya KKB sorgusu (hukuki dayanak teyit edilmeden)
- Mobil uygulama (web yeterli)
- Yapay zekâ skorlaması / otomatik fiyatlama (kural tabanlı eşleşme yeterli)
- Çoklu devre desteği (tek devre pilot için)

---

## 8. Devrelerin Ele Alınma Yöntemi

### 8.1. Temel Kural

Modelde anılan **11 devre tek bir anda canlıya alınmaz.** Her devre için aynı **Değerlendirme Kartı** kullanılır:

| # | Kriter | Açıklama |
|---|---|---|
| 1 | Müşteri sorunu | Hangi somut sorun, kimin için? |
| 2 | Kapasite ve ihtiyaç tanımı | Kapasite nedir, ihtiyaç nedir, nasıl ölçülür? |
| 3 | Doğrulanabilir veri | Hangi belge / bilgiyle doğrulanır? Kaynağı nedir? |
| 4 | İşlem tarafları | Kimler arasında işlem olur? |
| 5 | TFP’nin rolü | Eşleştirme mi, koordinasyon mu? Sınır nerede? |
| 6 | Hukuki / düzenleyici risk | İzin, aracılık, finansal faaliyet sınırı var mı? |
| 7 | Gelir tetikleyicisi | Ücret hangi olayda doğar? |
| 8 | Operasyon maliyeti | Doğrulama, eşleşme, takip maliyeti nedir? |
| 9 | Pilot ölçütü | Başarı nasıl ölçülür? |
| 10 | Durdurma koşulu | Hangi durumda pilot durdurulur? |

### 8.2. Pilot Adayları (Kesin Karar Değil, Karşılaştırılacak Adaylar)

Önceki çalışma notlarında öne çıkan iki aday:

**Aday 1: Parsiyel Taşımacılık / Hazır Yük Eşleştirmesi**
- Kapasite: Boş dönecek araç, parsiyel kapasite
- İhtiyaç: Taşınacak yük, güzergâh, zaman
- Doğrulama: Ruhsat, taşıma yetki belgesi, yük bilgileri
- Avantaj: Sık işlem, hızlı döngü, doğrulanabilir taraflar

**Aday 2: Atıl Üretim Kapasitesi / Doğrulanmış Sipariş Eşleştirmesi**
- Kapasite: Boş üretim hattı, atıl tezgâh kapasitesi
- İhtiyaç: Ürettirilecek ürün, adet, teknik şartname
- Doğrulama: Kapasite raporu, numune, sipariş belgesi
- Avantaj: Yüksek katma değer, tekrarlanabilir

> Her iki aday da **Değerlendirme Kartı** ile puanlanacak; gerçek ticari ağ ve doğrulanabilir talebin hangisinde bulunduğu belirleyici olacak. Bkz. `docs/devre-kartlari/` klasörü.

---

## 9. Gelir Modeli ve Ücret Politikası

### 9.1. Temel İlke

Hizmet bedeli, ancak aşağıdaki unsurlar netleştirildikten sonra kesinleştirilir:

- Kapsamı, hesaplama tabanı, tetikleyici olay, taraf(lar), vergi uygulaması, iptal / kısmi işlem senaryoları

**Önceki taslaktaki %5–10 veya hacimli işlerde %1–2 gibi oranlar onaylanmış fiyat politikası olarak kabul edilmez.** Pilot verisi olmadan oran sabitlenmez.

### 9.2. Ücret Politikası Kuralları

1. Ücretin **hangi hizmet karşılığında** alındığı açıkça tanımlanır.
2. Ücretin **bir taraftan mı, iki taraftan mı** alınacağı açıklanır.
3. Hesaplama tabanı ve para birimi tanımlanır; **KDV ve fatura düzeni mali müşavirle doğrulanır.**
4. Tamamlanmayan, kısmen tamamlanan, iptal edilen veya sonradan değişen işlemler için **ayrı kurallar** yazılır.
5. **Eşleştirme yapılmış olması ile ücretin doğması birbirinden ayrılır.** Eşleşme ≠ ücret.
6. Dolaylı ilişki / sistem dışı işlem hükümleri, **ölçülü, kanıtlanabilir ve belirli bir eşleşmeye bağlı** tasarlanır; otomatik ve sınırsız komisyon varsayılmaz.

### 9.3. Ücret Tetikleyicisi Örnekleri (Tartışmaya Açık)

| Senaryo | Ücret Doğar mı? | Not |
|---|---|---|
| Eşleşme önerildi, taraflar görüşmedi | Hayır | — |
| Taraflar görüştü, anlaşamadı | Hayır (veya sabit tanıtım bedeli — karar gerekli) | — |
| Taraflar anlaştı, harici işlem tamamlandı | **Evet** | Ana tetikleyici |
| Kısmen tamamlandı | Oransal / sabit — kural gerekli | Sözleşmede tanımlı olmalı |
| Taraflar sistem dışı anlaştı (kanıtlı) | Etik / hukuki değerlendirme gerekli | Ölçülü hüküm |

---

## 10. Hukuki, Veri Koruma ve Kurumsal Uyum Çalışma Paketi

> Bu bölümde listelenen başlıklar, kuruluş öncesinde **uzman görüşü alınması gereken** konulardır. Bu belge hukuki mütalaa değildir.

### Kontrol Listesi

- [ ] **Faaliyet tanımı ve şirketin uygun hukuki yapısı** — LTD mi A.Ş. mi? Faaliyet konusu nasıl yazılmalı? Düzenlemeye tabi finansal faaliyet sınırlarına yaklaşıyor mu?
- [ ] **Ticaret unvanı, faaliyet konusu, marka adı** ve ilgili marka / alan adı araştırmaları (TürkPatent, Ticaret Sicili, alan adı sorgusu)
- [ ] **KVKK aydınlatma yükümlülüğü**, veri işleme hukuki sebebi, paylaşım ve saklama süreleri, VERBİS yükümlülüğü
- [ ] **KKB, banka, tapu, ticari sicil veya üçüncü taraf verilerine erişimin** hukuki dayanağı ve yetki koşulları
- [ ] **Hizmet sözleşmesi, ücret eki, gizlilik yükümlülüğü**, işlem bazlı protokol ve uyuşmazlık hükümleri
- [ ] **Reklam ve tanıtım ifadeleri** — banka onayı, finansman, garanti, başarı oranı veya işlem hızı hakkında doğrulanamayan vaatlerin engellenmesi
- [ ] **Muhasebe, faturalama, vergi, ticari kayıt** ve olası tüketici / ticari müşteri ayrımları
- [ ] **Elektronik sözleşme / mesafeli sözleşme** gereklilikleri (e-imza, KEP, zaman damgası ihtiyacı)
- [ ] **Çalışan / stajyer / danışman** sözleşmeleri ve yetki matrisleri

Detay için: `docs/Faaliyet-Sinirlari-ve-Uyum-Kontrol-Listesi.md`

---

## 11. Marka ve Tanıtım Planı

### 11.1. Yapılacaklar

1. **Kurumsal isim mimarisini netleştir:** TFP ana kimlik mi, şirket unvanı mı, yoksa marka mı; Çeki Demiri hangi hizmeti temsil ediyor?
2. **İsim, alan adı ve marka uygunluğunu araştır;** uygunluk kontrolü tamamlanmadan tescil varmış gibi davranma.
3. **Müşteriye yönelik kısa ve doğru açıklama** oluştur (Bkz. Bölüm 12).
4. Her devre için ayrı **hizmet açıklaması, dahil olan / olmayan işler ve süreç adımları** hazırla.
5. Başvuru formunda **yalnızca gerekli verileri** topla; gereksiz hassas veya doğrulanamayacak bilgi isteme.
6. **Pilot kanıtı oluşmadan** başarı oranı, işlem süresi, partner sayısı veya finansman sonucu iddia etme.

### 11.2. Tanıtım Dili — Yasaklı İfadeler

| Yasaklı / Riskli İfade | Neden | Yerine |
|---|---|---|
| “Banka garantili / onaylı” | Banka protokolü yoksa yanıltıcı | “Taraflar kendi bankalarıyla görüşür” |
| “%100 finansman sağlıyoruz” | Kredi kullandırmıyoruz | “Ticari eşleşme sağlıyoruz” |
| “Paranızı bize emanet edin” | Emanet / havuz yok | “Para/belge TFP’ye teslim edilmez” |
| “En hızlı / en ucuz” | Kanıtsız üstünlük iddiası | Somut süreç adımları |
| “Tescilli marka / kurulu şirket” | Teyit gerekli | “Çalışma markası / planlanan yapı” |

Detay için: `docs/Marka-Mimarisi.md`

---

## 12. Kullanılabilecek Temel Müşteri Açıklaması

> **Çeki Demiri, işletmelerin gerçek ticari kapasite ve ihtiyaçlarını eşleştirmeye yardımcı olur. Para, çek, tapu veya mal bize teslim edilmez; tarafların yerine vekâleten işlem yapmayız. Taraflar işlemlerini kendi adlarına ve ilgili banka ya da kurumun onayına bağlı olarak yürütür. Eşleşme; kredi, kazanç, banka onayı veya işlem sonucu garantisi değildir. Hizmet bedeli varsa, işlem öncesinde açıkça bildirilen koşullara göre uygulanır.**

Bu metin, pilot öncesi kullanılabilecek **tek onaylı müşteri açıklamasıdır.** Her devreye özel açıklamalar, bu çerçeveyi daraltabilir ama genişletemez.

---

## 13. Kuruluş Yol Haritası ve Aşama Kapıları

| Aşama | Çıktı | Geçiş Koşulu (Kapı) | Durum |
|---|---|---|---|
| **A. Modeli Sabitleme** | Ana proje tanımı ve varsayım listesi | Amaç, kapsam ve temel sınırlar tutarlı | ✅ Bu belgeyle başlatıldı; inceleme gerekli |
| **B. Süreç Tasarımı** | İş akışı ve devre değerlendirme kartları | Her adımın sorumlusu ve kanıtı belli | 🔲 Bekliyor |
| **C. Hukuki / Mali Ön İnceleme** | Faaliyet ve kuruluş kontrol listesi | Riskli faaliyetler ve izin gereklilikleri değerlendirilmiş | 🔲 Bekliyor |
| **D. Marka ve Kurumsal Yapı** | İsim mimarisi ve kuruluş kararı | Unvan / marka / hizmet rolleri belirli | 🔲 Bekliyor |
| **E. Pilot Seçimi** | Pilot kapsamı, ölçütler, durdurma koşulları | Gerçek talep ve doğrulanabilir süreç var | 🔲 Bekliyor |
| **F. Sözleşme ve Veri Belgeleri** | Hizmet sözleşmesi, ücret eki, KVKK belgeleri | Gerçek operasyon ve hukuk incelemesiyle uyumlu | 🔲 Bekliyor |
| **G. Yazılım MVP** | Çalışan ilk sürüm, test ve denetim izi | Kritik senaryolar test edilmiş, bilinen hatalar kayıtlı | 🔲 Bekliyor |
| **H. Kontrollü Pilot** | Pilot sonuç raporu | Sonuçlar kanıtla ölçülmüş ve riskler gözden geçirilmiş | 🔲 Bekliyor |

**Kural:** Bir aşamanın geçiş koşulu sağlanmadan bir sonrakine geçilmez. Aşamalar paralel yürütülebilir ama **kapı atlanamaz.**

---

## 14. Açık Konular ve Teyit Listesi

| # | Konu | Sorumlu | Kapanma Koşulu |
|---|---|---|---|
| T-01 | TFP’nin mevcut tüzel kişilik, ticaret unvanı ve tescil durumu | Kurucu | Ticaret sicil / vergi levhası kanıtı |
| T-02 | Çeki Demiri adının marka ve alan adı durumu | Kurucu + Marka vekili | TürkPatent + alan adı sorgu raporu |
| T-03 | Mevcut paydaş / müşteri ağı ve gerçekten doğrulanmış talep | Kurucu / Operasyon | İmzalı niyet mektubu veya talep kaydı |
| T-04 | 11 devrenin tam tanımları ve her devre için mevcut kanıt / belge durumu | Kurucu | Devre kartları tamamlanmış |
| T-05 | İlk pilot için erişilebilir ticari taraflar ve gerçek işlem örneği | Operasyon | En az 5+ doğrulanmış kapasite/ihtiyaç kaydı |
| T-06 | Hizmet bedeli, ücretin hangi taraftan alınacağı ve tetikleyici olay | Kurucu + Hukuk + Mali Müşavir | Yazılı ücret politikası |
| T-07 | Kullanılacak kişisel / ticari veriler, kaynakları, erişim yetkileri ve saklama süresi | Hukuk (KVKK) | Aydınlatma metni + VERBİS analizi |
| T-08 | Yazılımın mevcut durumu, eldeki kod / prototip / barındırma altyapısı | Teknik | Kod reposu / demo / altyapı envanteri |
| T-09 | Hukuk, muhasebe, banka ve diğer kurumlarla alınmış gerçek görüş / onayların olup olmadığı | Kurucu | Görüşme tutanağı / yazışma |

> Her T-maddesi için **tek sorumlu ve son tarih** atanmalıdır. Sahibi olmayan konu kapanmaz.

---

## 15. İlk Teslimatın Kabul Ölçütleri

İlk çalışma, yalnızca güzel görünen bir sunum olmayacak. TFP Ana Proje Tanımı v1.0 şu **10 sorunun** her birini mevcut bilgilerle cevaplayacak:

| # | Soru | Bu Belgede Nerede |
|---|---|---|
| 1 | Sistem kimin hangi sorununu çözüyor? | §1, §3 |
| 2 | Taraflar sisteme hangi bilgilerle giriyor? | §6 (Başvuru, Kayıt) |
| 3 | Bilgiler nasıl doğrulanıyor? | §6, §7 (Doğrulama Paneli) |
| 4 | Eşleştirme nasıl yapılıyor? | §6 (Eşleştirme), §8 |
| 5 | Taraflar işlem boyunca nasıl ilerliyor? | §6 (Uçtan Uca Akış) |
| 6 | TFP’nin sorumluluğu nerede başlıyor ve bitiyor? | §4, §5 |
| 7 | Gelir hangi olay gerçekleştiğinde doğuyor? | §9 |
| 8 | Hangi hukuki, mali ve operasyonel riskler var? | §10 |
| 9 | İlk devre nasıl test edilecek? | §8, §13 (E–H) |
| 10 | Bir sonraki aşamaya geçmek için hangi somut kanıtlar gerekiyor? | §13, §14 |

**Kabul kuralları:**
- Hiçbir şirket, marka tescili, banka protokolü, izin, müşteri veya yazılım özelliği **kanıtsız biçimde var kabul edilmez.**
- Her iş kolu için hizmet kapsamı, risk, doğrulama, gelir tetikleyicisi ve pilot ölçütü tanımlanır.
- Müşteriye verilen vaatlerle gerçek operasyon arasında **çelişki bulunmaz.**
- Sözleşme maddeleri, gerçek süreç tasarımından türetilir; süreç sözleşmeye uydurulmaz.
- Yazılım gereksinimleri kabul testlerine bağlanır; tamamlandı iddiası yalnızca test kanıtıyla yapılır.
- Açık konular, **sorumlusu ve kapatılma koşuluyla** takip edilir.

---

## Ekler

| Ek | Belge | Yol |
|---|---|---|
| Ek-A | Operasyon Akışı ve Görev Sınırları (detay) | `docs/Operasyon-Akisi-ve-Gorev-Sinirlari.md` |
| Ek-B | Faaliyet Sınırları ve Uyum Kontrol Listesi | `docs/Faaliyet-Sinirlari-ve-Uyum-Kontrol-Listesi.md` |
| Ek-C | Marka Mimarisi ve Tanıtım Metinleri | `docs/Marka-Mimarisi.md` |
| Ek-D | Devre Değerlendirme Kartları (11 devre) | `docs/devre-kartlari/` |
| Ek-E | Yazılım MVP Gereksinimleri ve Kabul Testleri | `docs/Yazilim-MVP-Gereksinimleri.md` |
| Ek-F | Pilot Kapsamı ve Test Senaryoları (şablon) | `docs/Pilot-Sablonu.md` |

---

> **Sonuç:** Bu dosya, TFP / Çeki Demiri modelinin başlangıç ana belgesidir; tamamlanmış şirket kuruluşu, hukuki onay, marka tescili veya çalışan uygulama iddiası değildir. Sonraki iş, burada listelenen açık konuları tekrar kullanıcıya baştan anlattırmak değil; mevcut proje notları, dosyalar ve kanıtlar üzerinden tamamlamak, her devreyi karşılaştırmak ve ilk uygulanabilir pilotu gerekçeli biçimde seçmektir.

*— TFP Ana Proje Dosyası v1.0 • Çalışma Taslağı • Sayfa sonu —*
