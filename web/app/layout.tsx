import "./globals.css";

export const metadata = {
  title: "TFP | Çeki Demiri — Kapasite ve İhtiyaç Eşleştirme Sistemi",
  description: "Türk Finansal Paydaşlık — İşletmelerin gerçek ticari kapasite ve ihtiyacını eşleştiren sistem. Para, çek, tapu veya mal teslim alınmaz. Taraflar kendi adlarına hareket eder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[#f8f9fb] text-tfp-text antialiased">{children}</body>
    </html>
  );
}
