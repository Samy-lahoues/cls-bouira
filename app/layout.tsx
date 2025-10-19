import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مركز الترفيه العلمي | ولاية البويرة",
  description:
    "مرحبًا بكم في مركز الترفيه العلمي بولاية البويرة. وجهتكم لاكتشاف العلوم والتكنولوجيا عبر أنشطة تفاعلية، عروض تعليمية، وفعاليات مميزة للأطفال والشباب والعائلات.",
  keywords:
    "البويرة, مركز الترفيه العلمي, علوم, تكنولوجيا, تعليم, الجزائر, فضاء علمي, أنشطة تفاعلية, ترفيه علمي, Bouira Science Entertainment Center",
  openGraph: {
    title: "مركز الترفيه العلمي | ولاية البويرة",
    description:
      "اكتشف متعة العلوم والتكنولوجيا في مركز الترفيه العلمي بولاية البويرة.",
    type: "website",
    locale: "ar_DZ",
    siteName: "Bouira Science Entertainment Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز الترفيه العلمي | ولاية البويرة",
    description:
      "وجهتكم لاكتشاف العلوم والتكنولوجيا عبر أنشطة تفاعلية وفعاليات تعليمية مميزة.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
