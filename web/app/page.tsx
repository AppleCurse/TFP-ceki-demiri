"use client";
import { useState, useEffect } from "react";

// --- Types ---
type View = "landing" | "app";
type AppTab = "genel" | "kapasite" | "ihtiyac" | "eslesme" | "islem" | "dogrulama";

// --- Mock Data for App Preview ---
const mockKapasiteler = [
  { id: "K-124", isletme: "Atlas Lojistik A.Ş.", tur: "Parsiyel Taşıma", detay: "İstanbul → Ankara, 15 palet", zaman: "05–10 Kasım", durum: "dogrulandi", gecerlilik: "10 Kasım 2026" },
  { id: "K-125", isletme: "Ege Üretim Ltd.", tur: "Üretim Hattı", detay: "CNC Torna, 400 saat/ay", zaman: "Kasım ayı", durum: "dogrulama_bekliyor", gecerlilik: "30 Kasım 2026" },
  { id: "K-126", isletme: "Marmara Depo", tur: "Depo Alanı", detay: "Hadımköy, 800 m², raf sistemli", zaman: "Sürekli", durum: "dogrulandi", gecerlilik: "31 Aralık 2026" },
  { id: "K-127", isletme: "Karadeniz Nakliyat", tur: "Parsiyel Taşıma", detay: "Samsun → İstanbul, 10 palet, frigo", zaman: "08–12 Kasım", durum: "dogrulandi", gecerlilik: "12 Kasım 2026" },
];
const mockIhtiyaclar = [
  { id: "I-089", isletme: "Beta Ticaret", tur: "Taşıma İhtiyacı", detay: "İstanbul → Ankara, 12 palet, kuru gıda", zaman: "07 Kasım", durum: "dogrulandi", gecerlilik: "07 Kasım 2026" },
  { id: "I-090", isletme: "Delta Makina", tur: "Fason Üretim", detay: "Flanş üretimi, 2000 adet, S235", zaman: "15–30 Kasım", durum: "dogrulandi", gecerlilik: "15 Kasım 2026" },
  { id: "I-091", isletme: "Kuzey Gıda", tur: "Depo İhtiyacı", detay: "Anadolu yakası, 500 m², soğuk oda", zaman: "Kasım–Şubat", durum: "dogrulama_bekliyor", gecerlilik: "01 Kasım 2026" },
  { id: "I-092", isletme: "Ankara Lojistik", tur: "Taşıma İhtiyacı", detay: "Samsun → İstanbul, 8 palet, tekstil", zaman: "09 Kasım", durum: "dogrulandi", gecerlilik: "09 Kasım 2026" },
];
const mockEslesmeler = [
  { id: "E-041", kapasite: "K-124", ihtiyac: "I-089", skor: 92, gerekce: "Güzergâh, zaman ve miktar uyumu — İstanbul→Ankara, 5–10 Kasım penceresinde 07 Kasım talebi", durum: "taraf_onayi_bekliyor", taraflar: "Atlas Lojistik ↔ Beta Ticaret" },
  { id: "E-042", kapasite: "K-127", ihtiyac: "I-092", skor: 88, gerekce: "Samsun→İstanbul, frigo kapasite ile tekstil yükü — zaman uyumu (08–12 Kasım / 09 Kasım)", durum: "onaylandi", taraflar: "Karadeniz Nakliyat ↔ Ankara Lojistik" },
  { id: "E-043", kapasite: "K-125", ihtiyac: "I-090", skor: 74, gerekce: "CNC Torna kapasitesi ile flanş üretimi — teknik şartname incelemesi gerekli", durum: "gorusuluyor", taraflar: "Ege Üretim ↔ Delta Makina" },
];

export default function Page() {
  const [view, setView] = useState<View>("landing");
  const [appTab, setAppTab] = useState<AppTab>("genel");
  const [mobileNav, setMobileNav] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showTeyit, setShowTeyit] = useState(false);

  // smooth scroll
  const scrollTo = (id: string) => {
    setMobileNav(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* ========== TOP BAR ========== */}
      <div className="bg-tfp-navy text-white text-[11px] tracking-wide">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-white/15 px-2 py-0.5 rounded font-mono text-[10px]">ÇALIŞMA TASLAĞI v1.0</span>
            <span className="hidden sm:inline opacity-80">20 Ekim 2026 • Hukuki mütalaa değildir • Şirket kuruluşu / marka tescili varsaymaz</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/70">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            TEYİT GEREKLİ konular işaretlidir
          </div>
        </div>
      </div>

      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-tfp-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => setView("landing")} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-tfp-navy rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-sm relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-[2px] bg-tfp-orange rounded-full" />
                  </div>
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-tfp-orange rounded-full border border-white" />
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full border border-tfp-orange" />
                </div>
              </div>
              <div className="text-left">
                <div className="text-[13px] font-bold tracking-tight leading-none text-tfp-navy">TÜRK FİNANSAL PAYDAŞLIK</div>
                <div className="text-[11px] font-medium tracking-[0.14em] text-tfp-orange leading-none">ÇEKİ DEMİRİ</div>
              </div>
            </button>

            {view === "landing" && (
              <nav className="hidden lg:flex items-center gap-1">
                {[
                  { id: "model", label: "Model" },
                  { id: "akis", label: "Operasyon Akışı" },
                  { id: "devreler", label: "Devreler" },
                  { id: "mvp", label: "Yazılım MVP" },
                  { id: "yolharitasi", label: "Yol Haritası" },
                  { id: "belgeler", label: "Belgeler" },
                ].map((n) => (
                  <button key={n.id} onClick={() => scrollTo(n.id)} className="px-3 py-1.5 text-[13px] font-medium text-tfp-muted hover:text-tfp-navy hover:bg-tfp-gray rounded-lg transition">
                    {n.label}
                  </button>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setView(view === "landing" ? "app" : "landing")} className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition ${view === "app" ? "bg-tfp-gray text-tfp-navy" : "bg-tfp-navy text-white hover:bg-tfp-navyLight"}`}>
              {view === "landing" ? (
                <>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Sistem Önizleme
                </>
              ) : (
                <>← Ana Plana Dön</>
              )}
            </button>
            <button onClick={() => setView(view === "landing" ? "app" : "landing")} className="sm:hidden w-9 h-9 grid place-items-center bg-tfp-navy text-white rounded-full text-sm">
              {view === "landing" ? "◉" : "←"}
            </button>
            {view === "landing" && (
              <button onClick={() => setMobileNav(!mobileNav)} className="lg:hidden w-9 h-9 grid place-items-center border border-tfp-border rounded-lg">
                <span className="text-lg">{mobileNav ? "✕" : "☰"}</span>
              </button>
            )}
          </div>
        </div>
        {mobileNav && view === "landing" && (
          <div className="lg:hidden border-t border-tfp-border bg-white px-4 py-3 flex flex-col gap-1">
            {[
              { id: "model", label: "Model ve Sınırlar" },
              { id: "akis", label: "Operasyon Akışı" },
              { id: "devreler", label: "Devreler" },
              { id: "mvp", label: "Yazılım MVP" },
              { id: "yolharitasi", label: "Yol Haritası" },
              { id: "belgeler", label: "Belgeler" },
            ].map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left px-3 py-2.5 text-sm font-medium hover:bg-tfp-gray rounded-lg">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ========== LANDING VIEW ========== */}
      {view === "landing" ? (
        <>
          {/* HERO */}
          <section className="bg-white border-b border-tfp-border">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium">
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                    TFP Kuruluş ve Uygulama Ana Planı — v1.0 Çalışma Taslağı
                  </div>

                  <h1 className="mt-5 text-[32px] sm:text-[42px] lg:text-[44px] font-extrabold leading-[0.95] tracking-tight text-tfp-navy">
                    Yük ortakken<br />
                    <span className="text-tfp-orange">aşılır.</span><br />
                    Gel, ortak ol.
                  </h1>

                  <p className="mt-5 text-[15px] leading-6 text-tfp-muted max-w-[560px]">
                    Birinin limiti var, birinin elinde çeki var, birinin malı var, birinin tırı boş. Biz belge kiralamıyoruz, hatır çeki dağıtmıyoruz — doğru insanı doğru insanla buluşturuyoruz. Hukuki sorumluluğumuz yok, insani sorumluluğumuz var: karar mercii değil, kontrol mercii'yiz.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 bg-tfp-gray border border-tfp-border rounded-full px-3.5 py-1.5 text-[11px] font-mono text-tfp-muted">
                    <span className="w-1.5 h-1.5 bg-tfp-orange rounded-full" />
                    Çeki demirinden ehliyet istenmez — sağlamlığına bakılır.
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button onClick={() => scrollTo("model")} className="px-6 py-3 bg-tfp-navy text-white rounded-full text-sm font-semibold hover:bg-tfp-navyLight transition">
                      Ana Planı İncele →
                    </button>
                    <button onClick={() => setView("app")} className="px-6 py-3 bg-white border border-tfp-border text-tfp-navy rounded-full text-sm font-semibold hover:bg-tfp-gray transition">
                      Sistem Önizlemesini Aç
                    </button>
                  </div>

                  <div className="mt-8 flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs text-tfp-muted">
                      <span className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 grid place-items-center text-emerald-600">✓</span>
                      Kâğıt üzerinde değil, ölçülebilir işleyiş
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-tfp-muted">
                      <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 grid place-items-center text-blue-600">◐</span>
                      Aşama kapılarıyla kontrollü ilerleme
                    </div>
                  </div>
                </div>

                {/* Hero Card — Model Bileşenleri */}
                <div className="bg-tfp-navy rounded-[20px] p-6 sm:p-7 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-20 translate-x-20" />
                  <div className="relative">
                    <div className="text-[11px] tracking-[0.12em] font-semibold opacity-60">MODELİN BİLEŞENLERİ</div>
                    <div className="mt-4 space-y-3">
                      {[
                        { k: "TFP", title: "Türk Finansal Paydaşlık", desc: "Kurumsal çatı ve sistemin ana kimliği", badge: "TEYİT GEREKLİ", color: "bg-white/10" },
                        { k: "ÇD", title: "Çeki Demiri", desc: "İşletmelere sunulan hizmet markası", badge: "Marka araştırması bekliyor", color: "bg-tfp-orange" },
                        { k: "KİS", title: "Kapasite ve İhtiyaç Eşleştirme Sistemi", desc: "Kayıt • Doğrulama • Eşleştirme • Takip • Denetim izi", badge: "MVP tasarlanacak", color: "bg-white/10" },
                      ].map((b) => (
                        <div key={b.k} className="flex gap-3 bg-white/[0.07] border border-white/10 rounded-xl p-3.5">
                          <div className={`w-10 h-10 rounded-lg ${b.color} grid place-items-center text-xs font-bold shrink-0`}>{b.k}</div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold leading-tight">{b.title}</div>
                            <div className="text-xs opacity-70 leading-tight mt-0.5">{b.desc}</div>
                            <div className="mt-2 inline-flex text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded-full border border-white/10">{b.badge}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-amber-500/15 border border-amber-500/30 rounded-xl p-3.5">
                      <div className="text-xs font-bold text-amber-200 flex items-center gap-2">⚠ Değişmeyecek Temel Sınır</div>
                      <p className="text-xs leading-5 text-white/80 mt-1.5">
                        TFP eşleştirme ve koordinasyon katmanıdır. Para, çek, tapu veya mal teslim almaz. Vekâleten işlem yapmaz, borç vermez, banka onayı garantilemez. İşlem bankada, limit sahibinin hesabında yapılır; TFP’den iki kişi yerinde kontrol eder.
                      </p>
                      <p className="text-xs leading-5 text-amber-100/90 mt-2 font-semibold">
                        Karar mercii değil, kontrol mercii.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { n: "07", l: "Aşamalı kuruluş adımı", d: "A → H kapıları" },
                  { n: "10", l: "Durum takibi adımı", d: "Başvuru → kapanış" },
                  { n: "09", l: "MVP modülü", d: "Kayıt → denetim izi" },
                  { n: "11", l: "Devre (tek tek açılır)", d: "Pilot kartlarıyla" },
                ].map((s) => (
                  <div key={s.l} className="bg-tfp-gray border border-tfp-border rounded-2xl px-5 py-4 flex items-baseline gap-4">
                    <div className="text-2xl font-extrabold text-tfp-navy">{s.n}</div>
                    <div>
                      <div className="text-xs font-semibold text-tfp-navy">{s.l}</div>
                      <div className="text-xs text-tfp-muted">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CRITICAL DECISION */}
          <section id="model" className="bg-[#f8f9fb] border-b border-tfp-border py-10 lg:py-14">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <div className="text-xs font-bold tracking-[0.12em] text-tfp-orange">EN KRİTİK KARAR</div>
                  <h2 className="text-[28px] font-extrabold tracking-tight text-tfp-navy mt-1">TFP tam olarak ne olacak?</h2>
                  <p className="text-sm text-tfp-muted mt-2 max-w-[600px]">İsimden veya yazılımdan önce şu ayrımı çözmemiz gerekiyor. Bunlar aynı şey değil — her birinin sınırları, sorumlulukları ve izin gereklilikleri ayrıca değerlendirilmeli.</p>
                </div>
                <div className="bg-white border border-tfp-border rounded-full px-4 py-2 text-xs font-medium">Çalışma kararı v1.0: <span className="font-bold text-emerald-600">A + B ile başla</span> • C için hukuki teyit şart</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    letter: "A",
                    title: "Ticari Eşleştirme Platformu",
                    desc: "İşletmelerin kapasite ve ihtiyaçlarını buluşturur. Bilgi sağlar, tarafları tanıştırır.",
                    risk: "Düşük",
                    riskColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                    included: true,
                    items: ["Kapasite / ihtiyaç kaydı", "Uygunluk filtreleme", "Eşleşme önerisi + gerekçe"],
                  },
                  {
                    letter: "B",
                    title: "İşlem Koordinasyon Sistemi",
                    desc: "Tarafların doğrulama ve işlem adımlarını düzenler. Durum takibi ve kontrol listesi sağlar.",
                    risk: "Orta",
                    riskColor: "bg-amber-50 text-amber-700 border-amber-200",
                    included: true,
                    items: ["Doğrulama paneli", "Taraf onayı akışı", "İşlem durumu takibi"],
                  },
                  {
                    letter: "C",
                    title: "Finansal Aracılık / Finansman",
                    desc: "Kredi, ödeme, teminat veya fon aktarımına doğrudan dahil olur. Düzenleyici inceleme gerektirir.",
                    risk: "Yüksek — İzin gerekli",
                    riskColor: "bg-red-50 text-red-700 border-red-200",
                    included: false,
                    items: ["BDDK / SPK sınırları", "Ödeme hizmeti lisansı", "Emanet / havuz riski"],
                  },
                ].map((m) => (
                  <div key={m.letter} className={`bg-white rounded-2xl border-2 p-5 relative overflow-hidden ${m.included ? "border-tfp-navy" : "border-tfp-border opacity-90"}`}>
                    {m.included && <div className="absolute top-0 right-0 bg-tfp-navy text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">KAPSAMDA</div>}
                    {!m.included && <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">KAPSAM DIŞI</div>}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl grid place-items-center text-sm font-extrabold ${m.included ? "bg-tfp-navy text-white" : "bg-tfp-gray text-tfp-muted border border-tfp-border"}`}>{m.letter}</div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${m.riskColor}`}>{m.risk}</span>
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-tfp-navy leading-tight">{m.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-tfp-muted">{m.desc}</p>
                    <ul className="mt-4 space-y-1.5">
                      {m.items.map((it) => (
                        <li key={it} className="flex gap-2 text-xs text-tfp-text">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${m.included ? "bg-emerald-500" : "bg-red-400"}`} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white border border-tfp-border rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 grid place-items-center">⚖️</div>
                  <div>
                    <div className="text-sm font-bold text-tfp-navy">Hukuki ve mali uygulanabilirlik — ayrıca doğrulanacak</div>
                    <div className="text-xs text-tfp-muted">Faaliyet sınırları, şirket yapısı, ücretlendirme ve veri işleme uzman görüşüne tabi</div>
                  </div>
                </div>
                <button onClick={() => scrollTo("belgeler")} className="px-4 py-2 bg-tfp-gray border border-tfp-border rounded-full text-xs font-semibold">Uyum kontrol listesini gör →</button>
              </div>
            </div>
          </section>

          {/* OPERATION FLOW */}
          <section id="akis" className="bg-white border-b border-tfp-border py-10 lg:py-14">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.12em] text-tfp-orange">UÇTAN UCA OPERASYON AKIŞI</span>
                <span className="text-xs text-tfp-muted">• Her adımda kimin ne yaptığı ve neyi yapmadığı tanımlı</span>
              </div>
              <h2 className="text-[28px] font-extrabold tracking-tight text-tfp-navy">Başvurudan kapanışa 10 adım</h2>

              {/* Stepper */}
              <div className="mt-8 overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 min-w-[900px]">
                  {[
                    { n: "01", t: "Başvuru", d: "İşletme bilgileri", who: "İşletme" },
                    { n: "02", t: "Yetki Doğrulama", d: "Sicil + yetki kontrolü", who: "TFP Operasyon" },
                    { n: "03", t: "Kayıt", d: "Kapasite / ihtiyaç", who: "İşletme + TFP" },
                    { n: "04", t: "Uygunluk", d: "Filtre + skorlama", who: "Sistem" },
                    { n: "05", t: "Eşleştirme", d: "Gerekçeli öneri", who: "Sistem + Operasyon" },
                    { n: "06", t: "Taraf Onayı", d: "Onay / ret", who: "Taraflar" },
                    { n: "07", t: "Bilgilendirme", d: "Sınırlar + ücret", who: "TFP" },
                    { n: "08", t: "Harici İşlem", d: "Bankada, limit sahibinin hesabında", who: "Taraflar + Banka + 2 TFP kontrol" },
                    { n: "09", t: "Sonuç Kaydı", d: "Tamamlandı / değil", who: "TFP Operasyon" },
                    { n: "10", t: "Kapanış", d: "Fatura + arşiv", who: "TFP" },
                  ].map((s, i) => (
                    <button
                      key={s.n}
                      onClick={() => setActiveStep(i)}
                      className={`shrink-0 w-[148px] text-left rounded-2xl border-2 p-3.5 transition ${activeStep === i ? "bg-tfp-navy border-tfp-navy text-white" : "bg-tfp-gray border-tfp-border hover:border-tfp-navy/30"}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${activeStep === i ? "bg-white/20 text-white" : "bg-white border border-tfp-border"}`}>{s.n}</span>
                        <span className={`text-[10px] ${activeStep === i ? "text-white/70" : "text-tfp-muted"}`}>{s.who}</span>
                      </div>
                      <div className={`mt-2 text-xs font-bold leading-tight ${activeStep === i ? "text-white" : "text-tfp-navy"}`}>{s.t}</div>
                      <div className={`text-[11px] leading-tight ${activeStep === i ? "text-white/70" : "text-tfp-muted"}`}>{s.d}</div>
                      <div className={`mt-2 h-1 rounded-full ${activeStep === i ? "bg-tfp-orange" : "bg-tfp-border"}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Active step detail */}
              <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
                <div className="bg-tfp-gray border border-tfp-border rounded-2xl p-5">
                  {[
                    {
                      title: "01 — Başvuru",
                      desc: "İşletme unvanı, vergi no, MERSİS, yetkili kişi ve başvuru amacı alınır. KVKK aydınlatma onayı zorunludur.",
                      checks: ["Zorunlu alanlar + OTP doğrulama", "KVKK aydınlatma onayı", "Başvuru takip no üretilir"],
                      not: "TFP yetkiyi varsaymaz, beyanı doğrulanmış saymaz.",
                    },
                    {
                      title: "02 — Yetki ve Temel Doğrulama",
                      desc: "Yetkili kişinin işletme adına hareket etme yetkisi ve işletmenin aktifliği kontrol edilir.",
                      checks: ["İmza sirküleri / vekâletname kontrolü", "MERSİS / vergi sicil tutarlılığı", "İletişim doğrulama (OTP)"],
                      not: "Yetki doğrulanmadan kayıt eşleşmeye alınmaz.",
                    },
                    {
                      title: "03 — Kapasite / İhtiyaç Kaydı",
                      desc: "Tür, miktar, coğrafya, zaman, koşullar ve geçerlilik süresi ile kayıt oluşturulur.",
                      checks: ["Tüm zorunlu alanlar + geçerlilik tarihi", "Ek belge yükleme (ruhsat, rapor vb.)", "Süresi dolmuş kayıt otomatik pasife geçer"],
                      not: "Eksik kayıt ‘taslak’ kalır, havuza girmez.",
                    },
                    {
                      title: "04 — Uygunluk Değerlendirmesi",
                      desc: "Kural tabanlı filtreler: tür + coğrafya + zaman + miktar + doğrulama skoru.",
                      checks: ["Zorunlu alan tamamlığı", "Coğrafya / zaman uyumu", "Çelişki kontrolü"],
                      not: "Yetersiz veri = eşleşme yok. Skor şeffaf.",
                    },
                    {
                      title: "05 — Eşleştirme",
                      desc: "Aday eşleşme, skor ve gerekçe metniyle birlikte üretilir. Gerekçesiz eşleşme yok.",
                      checks: ["Eşleşme skoru (ağırlıklandırma)", "Gerekçe metni zorunlu", "Manuel eşleştirme (operasyon yetkili)"],
                      not: "Örnek: “İstanbul→Ankara, 15 palet, 05–10 Kasım ile 12 palet, 07 Kasım uyumu.”",
                    },
                    {
                      title: "06 — Taraf Onayı",
                      desc: "Taraflara yalnızca gerekli bilgi gösterilir. Onay / ret / revizyon toplanır.",
                      checks: ["Onay öncesi maskeleme (ticari sır koruması)", "Her iki taraf onaylarsa ilerlenir", "Ret gerekçesi kayıtlı"],
                      not: "Onay yoksa iletişim bilgisi paylaşılmaz.",
                    },
                    {
                      title: "07 — İşlem Öncesi Açıklama",
                      desc: "Taraflara yazılı bilgilendirme: TFP’nin sınırları, dış kurum onayları, ücret koşulu.",
                      checks: ["Sorumluluk sınırı yazılı", "Ücret tetikleyicisi açık", "KVKK paylaşım bilgisi"],
                      not: "Yazılı onay alınmadan harici işleme geçilmez.",
                    },
                    {
                      title: "08 — Harici İşlem",
                      desc: "İşlem bankada, limit sahibinin hesabında resmi olarak yürütülür. TFP’den iyi ki iki kişi yerinde kontrol eder.",
                      checks: ["Karar mercii değil, kontrol mercii", "Para/belge TFP’ye teslim edilmez", "Yerinde kontrol: limit, mal, belge"],
                      not: "TFP taraf değil — vekâleten imza atmaz, kefil olmaz. Hukuki sorumluluk yok, insani sorumluluk var.",
                    },
                    {
                      title: "09 — Sonuç Kaydı",
                      desc: "Tamamlandı / kısmen tamamlandı / sonuçlanmadı / iptal — her biri dayanakla kayıt altına alınır.",
                      checks: ["Sonuç + dayanak (beyan / belge)", "Tarih ve sorumlu kayıtlı", "Başarısızlık sebebi analiz edilir"],
                      not: "Her sonuç, bir sonraki eşleşmeyi iyileştiren veridir.",
                    },
                    {
                      title: "10 — Ücretlendirme ve Kapanış",
                      desc: "Ücret tetikleyicisi gerçekleştiyse fatura düzenlenir, tahsilat takibi yapılır, kayıtlar denetim iziyle saklanır.",
                      checks: ["Eşleşme ≠ ücret ayrımı", "Fatura ve tahsilat durumu takibi", "Denetim izi + arşiv (10 yıl)"],
                      not: "Ücret yalnızca önceden bildirilen koşullarda doğar.",
                    },
                  ][activeStep] && (
                    <>
                      <h3 className="text-sm font-bold text-tfp-navy">{[
                        "01 — Başvuru","02 — Yetki ve Temel Doğrulama","03 — Kapasite / İhtiyaç Kaydı","04 — Uygunluk Değerlendirmesi","05 — Eşleştirme","06 — Taraf Onayı","07 — İşlem Öncesi Açıklama","08 — Harici İşlem","09 — Sonuç Kaydı","10 — Ücretlendirme ve Kapanış",
                      ][activeStep]}</h3>
                      <p className="mt-2 text-sm leading-6 text-tfp-muted">{[
                        "İşletme unvanı, vergi no, MERSİS, yetkili kişi ve başvuru amacı alınır. KVKK aydınlatma onayı zorunludur.",
                        "Yetkili kişinin işletme adına hareket etme yetkisi ve işletmenin aktifliği kontrol edilir.",
                        "Tür, miktar, coğrafya, zaman, koşullar ve geçerlilik süresi ile kayıt oluşturulur.",
                        "Kural tabanlı filtreler: tür + coğrafya + zaman + miktar + doğrulama skoru.",
                        "Aday eşleşme, skor ve gerekçe metniyle birlikte üretilir. Gerekçesiz eşleşme yok.",
                        "Taraflara yalnızca gerekli bilgi gösterilir. Onay / ret / revizyon toplanır.",
                        "Taraflara yazılı bilgilendirme: TFP’nin sınırları, dış kurum onayları, ücret koşulu.",
                        "Sözleşme, ödeme, banka işlemleri limit sahibinin kendi hesabında resmi olarak yürütülür; TFP’den iki kişi yerinde kontrol eder.",
                        "Tamamlandı / kısmen tamamlandı / sonuçlanmadı / iptal — her biri dayanakla kayıt altına alınır.",
                        "Ücret tetikleyicisi gerçekleştiyse fatura düzenlenir, tahsilat takibi yapılır, kayıtlar denetim iziyle saklanır.",
                      ][activeStep]}</p>
                      <ul className="mt-4 space-y-2">
                        {[
                          ["Zorunlu alanlar + OTP doğrulama","KVKK aydınlatma onayı","Başvuru takip no üretilir"],
                          ["İmza sirküleri / vekâletname kontrolü","MERSİS / vergi sicil tutarlılığı","İletişim doğrulama (OTP)"],
                          ["Tüm zorunlu alanlar + geçerlilik tarihi","Ek belge yükleme (ruhsat, rapor vb.)","Süresi dolmuş kayıt otomatik pasife geçer"],
                          ["Zorunlu alan tamamlığı","Coğrafya / zaman uyumu","Çelişki kontrolü"],
                          ["Eşleşme skoru (ağırlıklandırma)","Gerekçe metni zorunlu","Manuel eşleştirme (operasyon yetkili)"],
                          ["Onay öncesi maskeleme (ticari sır koruması)","Her iki taraf onaylarsa ilerlenir","Ret gerekçesi kayıtlı"],
                          ["Sorumluluk sınırı yazılı","Ücret tetikleyicisi açık","KVKK paylaşım bilgisi"],
                          ["Karar mercii değil, kontrol mercii","İşlem limit sahibinin hesabında","TFP’den iki kişi yerinde kontrol"],
                          ["Sonuç + dayanak (beyan / belge)","Tarih ve sorumlu kayıtlı","Başarısızlık sebebi analiz edilir"],
                          ["Eşleşme ≠ ücret ayrımı","Fatura ve tahsilat durumu takibi","Denetim izi + arşiv (10 yıl)"],
                        ][activeStep].map((c) => (
                          <li key={c} className="flex gap-2 text-xs bg-white border border-tfp-border rounded-full px-3 py-2">
                            <span className="w-4 h-4 bg-emerald-500 text-white rounded-full grid place-items-center text-[10px] shrink-0">✓</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 text-xs text-amber-800">
                        <span className="font-bold">Kontrol:</span> {[
                          "TFP yetkiyi varsaymaz, beyanı doğrulanmış saymaz.",
                          "Yetki doğrulanmadan kayıt eşleşmeye alınmaz.",
                          "Eksik kayıt ‘taslak’ kalır, havuza girmez.",
                          "Yetersiz veri = eşleşme yok. Skor şeffaf.",
                          "Örnek: “İstanbul→Ankara, 15 palet, 05–10 Kasım ile 12 palet, 07 Kasım uyumu.”",
                          "Onay yoksa iletişim bilgisi paylaşılmaz.",
                          "Yazılı onay alınmadan harici işleme geçilmez.",
                          "TFP taraf değil — vekâleten imza atmaz, kefil olmaz.",
                          "Her sonuç, bir sonraki eşleşmeyi iyileştiren veridir.",
                          "Ücret yalnızca önceden bildirilen koşullarda doğar.",
                        ][activeStep]}
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="bg-tfp-navy rounded-2xl p-5 text-white">
                    <div className="text-xs font-bold tracking-widest opacity-60">DURUM MAKİNESİ</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["taslak","doğrulama_bekliyor","eşleşme_arıyor","eşleşti","taraf_onayı_bekliyor","görüşülüyor","doğrulanıyor","anlaşma_sağlandı","tamamlandı","sonuçlanmadı"].map((d, i) => (
                        <span key={d} className={`text-[10px] font-mono px-2 py-1 rounded-full border ${i <= activeStep ? "bg-white text-tfp-navy border-white" : "bg-white/10 text-white/60 border-white/20"}`}>{d}</span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-5 opacity-70">Her durum değişikliğinde: <span className="font-mono text-white">kim • ne zaman • hangi gerekçeyle</span> — denetim izine yazılır.</p>
                  </div>
                  <div className="bg-white border border-tfp-border rounded-2xl p-5">
                    <div className="text-xs font-bold text-tfp-navy">Rol ve Yetki Matrisi</div>
                    <div className="mt-3 space-y-2">
                      {[
                        { r: "Sistem Yöneticisi", y: "Rol atama, log görüntüleme", c: "bg-red-50 border-red-200" },
                        { r: "Operasyon Sorumlusu", y: "Doğrulama, eşleştirme onayı", c: "bg-blue-50 border-blue-200" },
                        { r: "İşletme Yetkilisi", y: "Kendi kayıtlarını yönetme", c: "bg-emerald-50 border-emerald-200" },
                        { r: "İzleyici / Denetçi", y: "Salt okunur, raporlama", c: "bg-gray-50 border-tfp-border" },
                      ].map((x) => (
                        <div key={x.r} className={`flex items-center justify-between border rounded-xl px-3 py-2.5 ${x.c}`}>
                          <span className="text-xs font-bold">{x.r}</span>
                          <span className="text-xs text-tfp-muted">{x.y}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DEVRELER */}
          <section id="devreler" className="bg-[#f8f9fb] border-b border-tfp-border py-10 lg:py-14">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-bold tracking-[0.12em] text-tfp-orange">DEVRE YÖNTEMİ</div>
                  <h2 className="text-[28px] font-extrabold tracking-tight text-tfp-navy mt-1">11 devre tek anda açılmaz</h2>
                  <p className="text-sm text-tfp-muted mt-2 max-w-[560px]">Her devre aynı 10 kriterli değerlendirme kartıyla puanlanır. Tek bir çatı altında bulunabilir — ama her birinin sınırları ayrıca değerlendirilir.</p>
                </div>
                <div className="bg-white border border-tfp-border rounded-xl px-4 py-3 text-xs">
                  <div className="font-bold text-tfp-navy">Değerlendirme Kartı Kriterleri</div>
                  <div className="text-tfp-muted">Müşteri sorunu • Kapasite/ihtiyaç tanımı • Doğrulanabilir veri • Taraflar • TFP rolü • Hukuki risk • Gelir • Maliyet • Pilot ölçütü • Durdurma koşulu</div>
                </div>
              </div>

              <div className="mt-8 grid lg:grid-cols-3 gap-4">
                {/* Priority candidates */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "01", name: "Parsiyel Taşımacılık / Hazır Yük", cap: "Boş dönecek araç, parsiyel kapasite", need: "Taşınacak yük, güzergâh, zaman", score: 43, max: 50, status: "Pilot adayı — öncelikli", color: "emerald", badge: "43/50" },
                    { id: "02", name: "Atıl Üretim Kapasitesi / Sipariş", cap: "Boş üretim hattı, atıl tezgâh", need: "Fason üretim siparişi, teknik şartname", score: 31, max: 50, status: "Pilot adayı", color: "amber", badge: "31/50" },
                  ].map((d) => (
                    <div key={d.id} className="bg-white rounded-2xl border border-tfp-border p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold bg-tfp-navy text-white px-2 py-1 rounded-full">Devre {d.id}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.color === "emerald" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>{d.badge}</span>
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-tfp-navy leading-tight">{d.name}</h3>
                      <div className="mt-3 space-y-2 text-xs">
                        <div className="flex gap-2"><span className="font-bold text-tfp-navy shrink-0">Kapasite:</span><span className="text-tfp-muted">{d.cap}</span></div>
                        <div className="flex gap-2"><span className="font-bold text-tfp-navy shrink-0">İhtiyaç:</span><span className="text-tfp-muted">{d.need}</span></div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-xs mb-1"><span className="font-medium">Kart puanı</span><span className="font-mono">{d.score}/{d.max}</span></div>
                        <div className="h-2 bg-tfp-gray rounded-full overflow-hidden"><div className="h-full bg-tfp-navy rounded-full" style={{ width: `${(d.score / d.max) * 100}%` }} /></div>
                      </div>
                      <div className={`mt-3 text-xs font-medium px-3 py-2 rounded-xl border ${d.color === "emerald" ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-amber-50 border-amber-200 text-amber-800"}`}>{d.status}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-tfp-navy rounded-2xl p-5 text-white">
                  <div className="text-xs font-bold tracking-widest opacity-60">DİĞER 9 DEVRE</div>
                  <p className="text-xs opacity-70 mt-1">Tanımları ve kanıt durumu TEYİT GEREKLİ — tek tek kart doldurulmayı bekliyor.</p>
                  <div className="mt-4 space-y-1.5">
                    {[
                      "03 Depo / Antrepo Alanı",
                      "04 Soğuk Zincir Kapasitesi",
                      "05 İş Makinesi / Ekipman",
                      "06 Çek / Alacak Eşleştirme",
                      "07 İhracat / İthalat Kapasitesi",
                      "08 Toptan Alım / Ortak Tedarik",
                      "09 Nitelikli İşgücü / Ekip",
                      "10 Fuar / Etkinlik Alanı",
                      "11 Dijital / Yazılım Kapasitesi",
                    ].map((x) => (
                      <div key={x} className={`flex items-center justify-between text-xs px-3 py-2 rounded-xl border ${x.includes("06") ? "bg-red-500/20 border-red-400/30" : "bg-white/10 border-white/15"}`}>
                        <span className={x.includes("06") ? "text-red-200 font-bold" : ""}>{x}</span>
                        {x.includes("06") && <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">YÜKSEK RİSK</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-amber-500/15 border border-amber-500/30 rounded-xl p-3 text-xs leading-5">
                    <span className="font-bold text-amber-200">Devre 06 uyarısı:</span><span className="text-white/80"> Çek/alacak eşleştirmesi faktoring ve BDDK düzenlemeleri açısından özel inceleme gerektirir.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MVP */}
          <section id="mvp" className="bg-white border-b border-tfp-border py-10 lg:py-14">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold tracking-[0.12em] text-tfp-orange">YAZILIM — İLK SÜRÜM KAPSAMI</div>
                  <h2 className="text-[28px] font-extrabold tracking-tight text-tfp-navy mt-1">Çekirdekle sınırlı, kanıtla tamamlandı</h2>
                  <p className="text-sm text-tfp-muted mt-2 max-w-[560px]">İlk sürüm süreci çalıştırmak için gereken çekirdekle sınırlı tutulur. Tamamlandı iddiası yalnızca test kanıtıyla yapılır.</p>
                </div>
                <button onClick={() => setView("app")} className="px-5 py-2.5 bg-tfp-navy text-white rounded-full text-xs font-bold">Canlı önizlemeyi aç →</button>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "🏢", title: "İşletme Kayıtları", desc: "Profil, yetkili kişi, iletişim, durum", check: "Yetki ve zorunlu alan kontrolü; değişiklik geçmişi" },
                  { icon: "📦", title: "Kapasite Kayıtları", desc: "Tür, miktar, zaman, geçerlilik", check: "Süresi dolmuş kayıt eşleşmeye alınmaz" },
                  { icon: "🎯", title: "İhtiyaç Kayıtları", desc: "İstenen kapasite, koşullar", check: "İhtiyaç sahibi izlenebilir" },
                  { icon: "🛡️", title: "Doğrulama Paneli", desc: "Belge türü, kaynak, sonuç", check: "Doğrulanmamış bilgi doğrulanmış görünmez" },
                  { icon: "🔗", title: "Eşleştirme", desc: "Kriter + skor + gerekçe", check: "Gerekçesiz eşleşme üretilmez" },
                  { icon: "🤝", title: "Onay ve İletişim", desc: "Taraf onayı, paylaşım izni", check: "Onay yoksa bilgi paylaşılmaz" },
                  { icon: "📊", title: "İşlem Takibi", desc: "Durumlar, sorumlular, tarihler", check: "Her durum değişikliği kayıtlı" },
                  { icon: "🧾", title: "Ücret ve Kapanış", desc: "Tetikleyici, fatura, tahsilat", check: "Ücret koşulu izlenebilir" },
                  { icon: "🔍", title: "Yetki ve Denetim İzi", desc: "Rol bazlı erişim, olay kaydı", check: "Yetkisiz erişim izlenebilir" },
                ].map((m) => (
                  <div key={m.title} className="bg-tfp-gray border border-tfp-border rounded-2xl p-5 hover:border-tfp-navy/20 transition">
                    <div className="text-lg">{m.icon}</div>
                    <h3 className="mt-2 text-sm font-bold text-tfp-navy">{m.title}</h3>
                    <p className="text-xs text-tfp-muted mt-1">{m.desc}</p>
                    <div className="mt-3 bg-white border border-tfp-border rounded-xl px-3 py-2 text-xs">
                      <span className="font-bold text-emerald-600">✓ Kontrol:</span> {m.check}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-wrap gap-6 text-xs">
                <div><span className="font-bold">Kapsam dışı (v1.0):</span> Otomatik ödeme • Banka entegrasyonu • Mobil uygulama • Yapay zekâ skorlaması • Çoklu devre</div>
              </div>
            </div>
          </section>

          {/* ROADMAP */}
          <section id="yolharitasi" className="bg-[#f8f9fb] border-b border-tfp-border py-10 lg:py-14">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="text-xs font-bold tracking-[0.12em] text-tfp-orange">KURULUŞ YOL HARİTASI</div>
              <h2 className="text-[28px] font-extrabold tracking-tight text-tfp-navy mt-1">Aşama kapıları — bir kapı atlanamaz</h2>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { k: "A", title: "Modeli Sabitleme", out: "Ana proje tanımı + varsayım listesi", gate: "Amaç, kapsam ve sınırlar tutarlı", status: "active" },
                  { k: "B", title: "Süreç Tasarımı", out: "İş akışı + devre kartları", gate: "Her adımın sorumlusu belli", status: "pending" },
                  { k: "C", title: "Hukuki / Mali Ön İnceleme", out: "Faaliyet ve kuruluş kontrol listesi", gate: "Riskler ve izinler değerlendirildi", status: "pending" },
                  { k: "D", title: "Marka ve Kurumsal Yapı", out: "İsim mimarisi ve kuruluş kararı", gate: "Unvan / marka rolleri belirli", status: "pending" },
                  { k: "E", title: "Pilot Seçimi", out: "Pilot kapsamı, ölçütler, durdurma koşulları", gate: "Gerçek talep ve doğrulanabilir süreç var", status: "pending" },
                  { k: "F", title: "Sözleşme ve Veri Belgeleri", out: "Hizmet sözleşmesi + KVKK", gate: "Gerçek operasyonla uyumlu", status: "pending" },
                  { k: "G", title: "Yazılım MVP", out: "Çalışan ilk sürüm + test", gate: "Kritik senaryolar test edildi", status: "pending" },
                  { k: "H", title: "Kontrollü Pilot", out: "Pilot sonuç raporu", gate: "Sonuçlar kanıtla ölçüldü", status: "pending" },
                ].map((a) => (
                  <div key={a.k} className={`rounded-2xl border-2 p-5 relative ${a.status === "active" ? "bg-tfp-navy border-tfp-navy text-white" : "bg-white border-tfp-border"}`}>
                    <div className="flex items-center justify-between">
                      <span className={`w-8 h-8 rounded-full grid place-items-center text-xs font-extrabold ${a.status === "active" ? "bg-white text-tfp-navy" : "bg-tfp-gray border border-tfp-border"}`}>{a.k}</span>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${a.status === "active" ? "bg-emerald-500 text-white" : "bg-tfp-gray text-tfp-muted border border-tfp-border"}`}>{a.status === "active" ? "● Bu belgeyle başlatıldı" : "Bekliyor"}</span>
                    </div>
                    <h3 className={`mt-3 text-sm font-bold ${a.status === "active" ? "text-white" : "text-tfp-navy"}`}>{a.title}</h3>
                    <div className={`mt-1 text-xs ${a.status === "active" ? "text-white/70" : "text-tfp-muted"}`}>Çıktı: {a.out}</div>
                    <div className={`mt-3 text-xs px-3 py-2 rounded-xl border ${a.status === "active" ? "bg-white/10 border-white/20 text-white" : "bg-tfp-gray border-tfp-border"}`}>
                      <span className="font-bold">Kapı:</span> {a.gate}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white border border-tfp-border rounded-2xl p-4 text-xs text-tfp-muted">
                <span className="font-bold text-tfp-navy">Kural:</span> Bir aşamanın geçiş koşulu sağlanmadan bir sonrakine geçilmez. Aşamalar paralel yürütülebilir ama kapı atlanamaz.
              </div>
            </div>
          </section>

          {/* CUSTOMER STATEMENT */}
          <section className="bg-tfp-navy text-white py-10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="max-w-[900px] mx-auto text-center">
                <div className="text-xs tracking-[0.12em] opacity-60 font-bold">KULLANILABİLECEK TEK ONAYLI MÜŞTERİ AÇIKLAMASI</div>
                <blockquote className="mt-4 text-[15px] sm:text-[17px] leading-7 font-medium">
                  “Çeki Demiri, işletmelerin gerçek ticari kapasite ve ihtiyaçlarını eşleştirmeye yardımcı olur. Para, çek, tapu veya mal bize teslim edilmez; tarafların yerine vekâleten işlem yapmayız. Taraflar işlemlerini kendi adlarına ve ilgili banka ya da kurumun onayına bağlı olarak yürütür. Eşleşme; kredi, kazanç, banka onayı veya işlem sonucu garantisi değildir. Hizmet bedeli varsa, işlem öncesinde açıkça bildirilen koşullara göre uygulanır.”
                </blockquote>
                <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">Her devre bu çerçeveyi daraltabilir, genişletemez</span>
                  <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">Pilot kanıtı olmadan başarı oranı iddia edilmez</span>
                </div>
              </div>
            </div>
          </section>

          {/* TEYIT LIST */}
          <section className="bg-white border-b border-tfp-border py-10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-extrabold text-tfp-navy">Açık Konular ve Teyit Listesi</h2>
                <button onClick={() => setShowTeyit(!showTeyit)} className="text-xs font-bold px-4 py-2 bg-tfp-gray border border-tfp-border rounded-full">
                  {showTeyit ? "Gizle" : "9 maddeyi göster"} {showTeyit ? "↑" : "↓"}
                </button>
              </div>
              {showTeyit && (
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { id: "T-01", t: "TFP tüzel kişilik ve unvan durumu", o: "Ticaret sicil / vergi levhası kanıtı" },
                    { id: "T-02", t: "Çeki Demiri marka ve alan adı", o: "TürkPatent + alan adı sorgu raporu" },
                    { id: "T-03", t: "Mevcut paydaş / müşteri ağı", o: "Niyet mektubu veya talep kaydı" },
                    { id: "T-04", t: "11 devrenin tam tanımları", o: "Devre kartları tamamlanmış" },
                    { id: "T-05", t: "İlk pilot için erişilebilir taraflar", o: "En az 5+ doğrulanmış kayıt" },
                    { id: "T-06", t: "Hizmet bedeli ve tetikleyici", o: "Yazılı ücret politikası" },
                    { id: "T-07", t: "Kişisel / ticari veri envanteri", o: "Aydınlatma metni + VERBİS analizi" },
                    { id: "T-08", t: "Yazılım mevcut durumu", o: "Kod reposu / demo / altyapı" },
                    { id: "T-09", t: "Alınmış hukuk / banka görüşleri", o: "Görüşme tutanağı / yazışma" },
                  ].map((t) => (
                    <div key={t.id} className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full">{t.id}</span>
                        <span className="text-xs font-bold text-amber-800">TEYİT GEREKLİ</span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-tfp-navy">{t.t}</div>
                      <div className="mt-1 text-xs text-tfp-muted">Kapanma: {t.o}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="belgeler" className="bg-[#f8f9fb] py-10 lg:py-14">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <div className="text-xs font-bold tracking-[0.12em] text-tfp-orange">TESLİMAT PAKETİ</div>
                  <h2 className="text-[28px] font-extrabold tracking-tight text-tfp-navy mt-1">Ana Proje Dosyası + Ekler</h2>
                  <p className="text-sm text-tfp-muted mt-2">Tüm belgeler bu reponun <span className="font-mono bg-white border px-1.5 py-0.5 rounded">docs/</span> klasöründe — sürümlü, izlenebilir.</p>
                </div>
                <a href="https://github.com/AppleCurse/TFP-ceki-demiri" target="_blank" className="px-5 py-2.5 bg-white border border-tfp-border rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  GitHub Reposu
                </a>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "TFP Ana Proje Dosyası v1.0", desc: "Ana belge — 15 bölüm, 10 soru, 9 teyit maddesi", badge: "ANA BELGE", icon: "📄", path: "docs/TFP-Ana-Proje-Dosyasi-v1.0.md" },
                  { title: "Operasyon Akışı ve Görev Sınırları", desc: "10 adım, durum makinesi, rol matrisi", badge: "EK-A", icon: "🔄", path: "docs/Operasyon-Akisi-ve-Gorev-Sinirlari.md" },
                  { title: "Faaliyet Sınırları ve Uyum Kontrol Listesi", desc: "Risk haritası, KVKK, şirket yapısı, sözleşme seti", badge: "EK-B", icon: "⚖️", path: "docs/Faaliyet-Sinirlari-ve-Uyum-Kontrol-Listesi.md" },
                  { title: "Marka Mimarisi ve Tanıtım", desc: "İsim mimarisi, site haritası, SSS, görsel ilkeler", badge: "EK-C", icon: "🎨", path: "docs/Marka-Mimarisi.md" },
                  { title: "Devre Değerlendirme Kartları", desc: "01 Parsiyel, 02 Atıl Kapasite, 03–11 şablon", badge: "EK-D", icon: "🗂️", path: "docs/devre-kartlari/" },
                  { title: "Yazılım MVP Gereksinimleri", desc: "9 modül, veri modeli, kabul testleri", badge: "EK-E", icon: "💻", path: "docs/Yazilim-MVP-Gereksinimleri.md" },
                  { title: "Pilot Şablonu", desc: "KPI, durdurma koşulları, 5 test senaryosu", badge: "EK-F", icon: "🧪", path: "docs/Pilot-Sablonu.md" },
                ].map((doc) => (
                  <div key={doc.title} className="bg-white border border-tfp-border rounded-2xl p-5 hover:shadow-md transition">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 bg-tfp-gray border border-tfp-border rounded-xl grid place-items-center">{doc.icon}</div>
                      <span className="text-[10px] font-bold tracking-widest bg-tfp-navy text-white px-2 py-1 rounded-full">{doc.badge}</span>
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-tfp-navy">{doc.title}</h3>
                    <p className="mt-1 text-xs text-tfp-muted leading-5">{doc.desc}</p>
                    <div className="mt-3 font-mono text-[11px] bg-tfp-gray border border-tfp-border rounded-lg px-2.5 py-1.5 text-tfp-muted truncate">{doc.path}</div>
                  </div>
                ))}
              </div>

              {/* 10 questions */}
              <div className="mt-8 bg-white border border-tfp-border rounded-2xl p-6">
                <h3 className="text-sm font-bold text-tfp-navy">İlk Teslimatın Kabul Ölçütü — 10 Soru</h3>
                <p className="text-xs text-tfp-muted mt-1">Bu dosya aşağıdaki soruların her birini mevcut bilgilerle cevaplamalı — bilinmeyenler tahminle doldurulmaz, açıkça işaretlenir.</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "1. Sistem kimin hangi sorununu çözüyor?",
                    "2. Taraflar sisteme hangi bilgilerle giriyor?",
                    "3. Bilgiler nasıl doğrulanıyor?",
                    "4. Eşleştirme nasıl yapılıyor?",
                    "5. Taraflar işlem boyunca nasıl ilerliyor?",
                    "6. TFP’nin sorumluluğu nerede başlıyor ve bitiyor?",
                    "7. Gelir hangi olay gerçekleştiğinde doğuyor?",
                    "8. Hangi hukuki, mali ve operasyonel riskler var?",
                    "9. İlk devre nasıl test edilecek?",
                    "10. Bir sonraki aşamaya geçmek için hangi kanıtlar gerekiyor?",
                  ].map((q) => (
                    <div key={q} className="flex gap-2 bg-tfp-gray border border-tfp-border rounded-xl px-3 py-2.5">
                      <span className="w-5 h-5 bg-emerald-500 text-white rounded-full grid place-items-center text-[10px] shrink-0">✓</span>
                      <span className="font-medium">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-tfp-navy text-white/60 text-xs py-8 border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-wrap gap-6 justify-between">
                <div>
                  <div className="text-white font-bold">TÜRK FİNANSAL PAYDAŞLIK • ÇEKİ DEMİRİ</div>
                  <div className="mt-1">Ana Proje Dosyası v1.0 — Çalışma Taslağı • 20 Ekim 2026</div>
                  <div className="mt-2 max-w-[600px] leading-5 opacity-60">Bu belge hukuki mütalaa değildir. Şirketin kurulduğunu, markaların tescilli olduğunu, banka protokollerinin bulunduğunu veya yazılımın çalışır durumda olduğunu varsaymaz. Doğrulanması gereken hususlar “TEYİT GEREKLİ” olarak işaretlenmiştir.</div>
                </div>
                <div className="text-right">
                  <div className="font-mono bg-white/10 border border-white/15 px-3 py-1.5 rounded-full inline-block">docs/ klasöründe sürümlü</div>
                  <div className="mt-2">Her aşamanın teslimatı ve doğrulama ölçütü var.</div>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        /* ========== APP PREVIEW ========== */
        <div className="bg-[#f1f3f6] min-h-[calc(100vh-64px-32px)]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6">
            {/* App header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-tfp-navy">Kapasite ve İhtiyaç Eşleştirme Sistemi</h2>
                <p className="text-xs text-tfp-muted">MVP v1.0 Önizleme — Gerçek verilerle test edilecek • Para/belge teslimi yok • Eşleşme ≠ ücret</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-white border border-tfp-border px-3 py-1.5 rounded-full">Demo Modu</span>
                <span className="text-xs bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full">TEYİT GEREKLİ veriler örnek amaçlı</span>
              </div>
            </div>

            {/* App tabs */}
            <div className="mt-5 bg-white border border-tfp-border rounded-2xl p-1.5 inline-flex flex-wrap gap-1">
              {[
                { id: "genel", label: "Genel Bakış" },
                { id: "kapasite", label: "Kapasite Kayıtları" },
                { id: "ihtiyac", label: "İhtiyaç Kayıtları" },
                { id: "eslesme", label: "Eşleşmeler" },
                { id: "islem", label: "İşlem Takibi" },
                { id: "dogrulama", label: "Doğrulama Paneli" },
              ].map((t) => (
                <button key={t.id} onClick={() => setAppTab(t.id as AppTab)} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${appTab === t.id ? "bg-tfp-navy text-white" : "hover:bg-tfp-gray text-tfp-muted"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Genel Bakış */}
            {appTab === "genel" && (
              <div className="mt-5 space-y-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Toplam İşletme", value: "12", sub: "8 doğrulandı • 4 beklemede" },
                    { label: "Aktif Kapasite", value: "18", sub: "4 süre doldu" },
                    { label: "Aktif İhtiyaç", value: "14", sub: "2 süresi doldu" },
                    { label: "Eşleşme Önerisi", value: "7", sub: "3 onay bekliyor • 2 onaylandı" },
                  ].map((k) => (
                    <div key={k.label} className="bg-white border border-tfp-border rounded-2xl p-5">
                      <div className="text-xs text-tfp-muted font-medium">{k.label}</div>
                      <div className="text-2xl font-extrabold text-tfp-navy mt-1">{k.value}</div>
                      <div className="text-xs text-tfp-muted mt-1">{k.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 bg-white border border-tfp-border rounded-2xl p-5">
                    <div className="text-sm font-bold text-tfp-navy">Son Eşleşmeler</div>
                    <div className="mt-4 space-y-3">
                      {mockEslesmeler.map((e) => (
                        <div key={e.id} className="flex items-center gap-4 border border-tfp-border rounded-xl p-3">
                          <div className="w-10 h-10 bg-tfp-navy text-white rounded-xl grid place-items-center text-xs font-bold">{e.id}</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-tfp-navy truncate">{e.taraflar}</div>
                            <div className="text-xs text-tfp-muted truncate">{e.gerekce}</div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-xs font-bold">Skor {e.skor}</div>
                            <span className={`text-[10px] px-2 py-1 rounded-full border ${e.durum === "onaylandi" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : e.durum === "gorusuluyor" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>{e.durum}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-tfp-navy rounded-2xl p-5 text-white">
                      <div className="text-xs font-bold opacity-60 tracking-widest">DENETİM İZİ — SON 5 OLAY</div>
                      <div className="mt-3 space-y-2 text-xs font-mono">
                        <div className="bg-white/10 rounded-lg px-3 py-2">20.10 14:32 — K-124 doğrulandı (op.ayse)</div>
                        <div className="bg-white/10 rounded-lg px-3 py-2">20.10 13:10 — E-041 oluşturuldu (sistem)</div>
                        <div className="bg-white/10 rounded-lg px-3 py-2">20.10 11:05 — I-089 onaylandı (beta.tic)</div>
                        <div className="bg-white/10 rounded-lg px-3 py-2">19.10 16:40 — K-127 eklendi (karadeniz.nak)</div>
                        <div className="bg-white/10 rounded-lg px-3 py-2">19.10 15:22 — İşletme doğrulandı (op.mehmet)</div>
                      </div>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                      <div className="text-xs font-bold text-amber-800">⚠ Doğrulama Kuyruğu</div>
                      <div className="text-xs text-amber-700 mt-1">2 kayıt doğrulama bekliyor • En eski: 1 gün</div>
                      <button onClick={() => setAppTab("dogrulama")} className="mt-2 text-xs font-bold bg-amber-500 text-white px-3 py-1.5 rounded-full">Panele git →</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {appTab === "kapasite" && (
              <div className="mt-5 bg-white border border-tfp-border rounded-2xl overflow-hidden">
                <div className="p-5 flex items-center justify-between border-b border-tfp-border">
                  <div className="text-sm font-bold">Kapasite Kayıtları</div>
                  <span className="text-xs bg-tfp-gray border border-tfp-border px-3 py-1 rounded-full">{mockKapasiteler.length} kayıt • 2 doğrulama bekliyor</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-tfp-gray text-tfp-muted">
                      <tr>
                        <th className="text-left px-4 py-2.5 font-bold">ID</th>
                        <th className="text-left px-4 py-2.5 font-bold">İşletme</th>
                        <th className="text-left px-4 py-2.5 font-bold">Tür</th>
                        <th className="text-left px-4 py-2.5 font-bold">Detay</th>
                        <th className="text-left px-4 py-2.5 font-bold">Zaman</th>
                        <th className="text-left px-4 py-2.5 font-bold">Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockKapasiteler.map((r) => (
                        <tr key={r.id} className="border-t border-tfp-border hover:bg-tfp-gray/50">
                          <td className="px-4 py-3 font-mono font-bold">{r.id}</td>
                          <td className="px-4 py-3 font-medium">{r.isletme}</td>
                          <td className="px-4 py-3">{r.tur}</td>
                          <td className="px-4 py-3 text-tfp-muted">{r.detay}</td>
                          <td className="px-4 py-3">{r.zaman}</td>
                          <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full border text-[11px] font-bold ${r.durum === "dogrulandi" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>{r.durum}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-amber-50 border-t border-amber-200 text-xs text-amber-800">Kural: Süresi dolmuş kayıt eşleşmeye alınmaz • Doğrulanmamış bilgi doğrulanmış gibi görünmez</div>
              </div>
            )}

            {appTab === "ihtiyac" && (
              <div className="mt-5 bg-white border border-tfp-border rounded-2xl overflow-hidden">
                <div className="p-5 flex items-center justify-between border-b border-tfp-border">
                  <div className="text-sm font-bold">İhtiyaç Kayıtları</div>
                  <span className="text-xs bg-tfp-gray border border-tfp-border px-3 py-1 rounded-full">{mockIhtiyaclar.length} kayıt</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-tfp-gray text-tfp-muted">
                      <tr>
                        <th className="text-left px-4 py-2.5 font-bold">ID</th>
                        <th className="text-left px-4 py-2.5 font-bold">İşletme</th>
                        <th className="text-left px-4 py-2.5 font-bold">Tür</th>
                        <th className="text-left px-4 py-2.5 font-bold">Detay</th>
                        <th className="text-left px-4 py-2.5 font-bold">Zaman</th>
                        <th className="text-left px-4 py-2.5 font-bold">Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockIhtiyaclar.map((r) => (
                        <tr key={r.id} className="border-t border-tfp-border hover:bg-tfp-gray/50">
                          <td className="px-4 py-3 font-mono font-bold">{r.id}</td>
                          <td className="px-4 py-3 font-medium">{r.isletme}</td>
                          <td className="px-4 py-3">{r.tur}</td>
                          <td className="px-4 py-3 text-tfp-muted">{r.detay}</td>
                          <td className="px-4 py-3">{r.zaman}</td>
                          <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full border text-[11px] font-bold ${r.durum === "dogrulandi" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>{r.durum}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {appTab === "eslesme" && (
              <div className="mt-5 space-y-3">
                {mockEslesmeler.map((e) => (
                  <div key={e.id} className="bg-white border border-tfp-border rounded-2xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-tfp-navy text-white rounded-xl grid place-items-center text-xs font-bold">{e.id}</div>
                        <div>
                          <div className="text-sm font-bold text-tfp-navy">{e.taraflar}</div>
                          <div className="text-xs text-tfp-muted mt-1">{e.kapasite} ↔ {e.ihtiyac}</div>
                          <div className="mt-2 bg-tfp-gray border border-tfp-border rounded-xl px-3 py-2 text-xs leading-5"> <span className="font-bold">Gerekçe:</span> {e.gerekce}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-extrabold text-tfp-navy">Skor {e.skor}</div>
                        <span className={`inline-block mt-1 text-xs font-bold px-3 py-1 rounded-full border ${e.durum === "onaylandi" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : e.durum === "gorusuluyor" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>{e.durum}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-tfp-navy text-white rounded-full text-xs font-bold">Onayla</button>
                      <button className="px-4 py-2 bg-white border border-tfp-border rounded-full text-xs font-bold">Reddet (gerekçeli)</button>
                      <button className="px-4 py-2 bg-tfp-gray border border-tfp-border rounded-full text-xs font-bold">Detay →</button>
                    </div>
                  </div>
                ))}
                <div className="bg-white border border-tfp-border rounded-2xl p-4 text-xs text-tfp-muted">Kural: Gerekçesiz eşleşme üretilmez • Onay yoksa iletişim bilgisi paylaşılmaz • Eşleşme ≠ ücret</div>
              </div>
            )}

            {appTab === "islem" && (
              <div className="mt-5 bg-white border border-tfp-border rounded-2xl p-5">
                <div className="text-sm font-bold text-tfp-navy">İşlem Takibi — Durum Makinesi</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["taslak","doğrulama_bekliyor","eşleşme_arıyor","eşleşti","taraf_onayı_bekliyor","görüşülüyor","doğrulanıyor","anlaşma_sağlandı","tamamlandı"].map((d, i) => (
                    <span key={d} className={`text-xs font-mono px-3 py-2 rounded-full border-2 ${i === 5 ? "bg-tfp-navy text-white border-tfp-navy" : i < 5 ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-tfp-gray border-tfp-border text-tfp-muted"}`}>{d} {i < 5 ? "✓" : i === 5 ? "●" : "○"}</span>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { t: "20.10 14:32", a: "E-042 → görüşülüyor", u: "op.ayse", n: "Taraflar tanıştırıldı, görüşme planlandı" },
                    { t: "20.10 11:05", a: "E-041 → taraf_onayı_bekliyor", u: "sistem", n: "Eşleşme önerildi, taraflara bildirim gönderildi" },
                    { t: "19.10 16:40", a: "K-127 → doğrulandı", u: "op.mehmet", n: "Ruhsat ve yetki belgesi kontrol edildi" },
                  ].map((r) => (
                    <div key={r.t} className="flex gap-3 border border-tfp-border rounded-xl p-3">
                      <span className="text-xs font-mono bg-tfp-gray px-2 py-1 rounded-full h-fit">{r.t}</span>
                      <div className="flex-1">
                        <div className="text-xs font-bold">{r.a} <span className="font-normal text-tfp-muted">— {r.u}</span></div>
                        <div className="text-xs text-tfp-muted">{r.n}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {appTab === "dogrulama" && (
              <div className="mt-5 bg-white border border-tfp-border rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-tfp-border">
                  <div className="text-sm font-bold">Doğrulama Paneli</div>
                  <div className="text-xs text-tfp-muted">Belge / bilgi türü, kaynak, doğrulayan, tarih ve sonuç — Doğrulanmamış bilgi doğrulanmış gibi görünmez</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-tfp-gray text-tfp-muted">
                      <tr>
                        <th className="text-left px-4 py-2.5">Kayıt</th>
                        <th className="text-left px-4 py-2.5">Belge Türü</th>
                        <th className="text-left px-4 py-2.5">Kaynak</th>
                        <th className="text-left px-4 py-2.5">Doğrulayan</th>
                        <th className="text-left px-4 py-2.5">Sonuç</th>
                        <th className="text-left px-4 py-2.5">İşlem</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-mono">K-125</td>
                        <td className="px-4 py-3">Kapasite raporu</td>
                        <td className="px-4 py-3">İşletme beyanı</td>
                        <td className="px-4 py-3">—</td>
                        <td className="px-4 py-3"><span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-full font-bold">bekliyor</span></td>
                        <td className="px-4 py-3 flex gap-1"><button className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs">Doğrula</button><button className="px-3 py-1 bg-white border border-tfp-border rounded-full text-xs">Reddet</button></td>
                      </tr>
                      <tr className="border-t bg-tfp-gray/30">
                        <td className="px-4 py-3 font-mono">I-091</td>
                        <td className="px-4 py-3">Ticaret sicil</td>
                        <td className="px-4 py-3">MERSİS</td>
                        <td className="px-4 py-3">—</td>
                        <td className="px-4 py-3"><span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-full font-bold">bekliyor</span></td>
                        <td className="px-4 py-3 flex gap-1"><button className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs">Doğrula</button><button className="px-3 py-1 bg-white border border-tfp-border rounded-full text-xs">Reddet</button></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-mono">K-124</td>
                        <td className="px-4 py-3">Ruhsat + yetki belgesi</td>
                        <td className="px-4 py-3">İşletme beyanı + açık kaynak</td>
                        <td className="px-4 py-3">op.ayse — 20.10</td>
                        <td className="px-4 py-3"><span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-1 rounded-full font-bold">doğrulandı</span></td>
                        <td className="px-4 py-3 text-tfp-muted">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="mt-6 bg-white border border-tfp-border rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-tfp-muted">MVP kapsamı: 9 modül • Para/belge emaneti yok • Ücret tetikleyicisi sözleşmede tanımlı • <span className="font-bold">Test kanıtı olmadan tamamlandı denmez</span></div>
              <button onClick={() => setView("landing")} className="px-4 py-2 bg-tfp-navy text-white rounded-full text-xs font-bold">Ana Plana Dön →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
